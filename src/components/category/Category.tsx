import './category.scss';
import JavascriptUrl from '../../images/javascript.svg';
import TypescriptUrl from '../../images/typescript.svg';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { useState } from 'react';

export type techCategory = {
  id: number;
  key: string;
  url: string;
};

export type specCategory = {
  id: number;
  value: string;
  key: string;
};

export interface CategoryProps {
  onChange: (options: any) => void;
}

const techCategories = [
  {
    id: 1,
    key: 'typescript',
    url: JavascriptUrl,
  },
  {
    id: 2,
    key: 'javascript',
    url: TypescriptUrl,
  },
];

const specCategories = [
  {
    id: 1,
    value: 'frontend',
    key: '프론트엔드 개발자',
  },
  {
    id: 2,
    value: 'backend',
    key: '백엔드 개발자',
  },
];

export const Category: React.FunctionComponent<CategoryProps> = (props) => {
  const [tech, setTech] = useState<techCategory[]>(techCategories);
  const [spec, setSpec] = useState<specCategory[]>(specCategories);

  const onChangeTech = (index: number) => {};

  return (
    <section className="category">
      <p className="category-title">TOPHA 카테고리</p>
      <Divider className="divider" />
      <div className="tech">
        <div className="category-tech">
          <p className="category-tech-title">기술 스택</p>
          <div className="category-tech-lists">
            {tech.map((category, index) => (
              <img key={index} className="category-tech-item" src={category.url} alt="There is Error" />
            ))}
          </div>
        </div>
      </div>
      <div className="spec">
        <div className="category-spec">
          <p className="category-spec-title">모집 분야</p>
          <div className="category-spec-lists">
            {spec.map((category, index) => (
              <Chip key={index} className="category-spec-item" label={category.key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
