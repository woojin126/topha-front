import { Button, Chip, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { ProjectType } from '../project/Project';
import './editproject.scss';
import 'react-quill/dist/quill.snow.css';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../states/auth';
import { createProject } from '../../apis/Project';

type SpecType = {
  id: number;
  value: string;
  key: string;
  clicked: boolean;
};

type TechType = {
  id: number;
  key: string;
  clicked: boolean;
};

const specCategories: SpecType[] = [
  {
    id: 1,
    value: 'frontend',
    key: '프론트엔드 개발자',
    clicked: false,
  },
  {
    id: 2,
    value: 'backend',
    key: '백엔드 개발자',
    clicked: false,
  },
];

const techCategories: TechType[] = [
  {
    id: 1,
    key: 'typescript',
    clicked: false,
  },
  {
    id: 2,
    key: 'nodejs',
    clicked: false,
  },
];

export interface EditProjectProps {
  projectData?: ProjectType;
}

export const EditProject: React.FunctionComponent<EditProjectProps> = (props) => {
  const [specIndex, setSpecIndex] = useState(specCategories);
  const [techIndex, setTechIndex] = useState(techCategories);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const auth = useRecoilValue(authAtom);

  const handleChipChange = (category: SpecType) => {
    if (category.clicked) {
      category.clicked = false;
    } else {
      category.clicked = true;
    }
    const chipList = specIndex.map((spec, index) => {
      if (index + 1 === category.id) {
        return category;
      } else {
        return spec;
      }
    });
    setSpecIndex(chipList);
  };

  const handleTechChange = (tech: TechType) => {
    if (tech.clicked) {
      tech.clicked = false;
    } else {
      tech.clicked = true;
    }
    const chipList = techIndex.map((chip, index) => {
      if (index + 1 === tech.id) {
        return tech;
      } else {
        return chip;
      }
    });
    setTechIndex(chipList);
  };

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = () => {
    const specList = specIndex.filter((spec) => spec.clicked);
    const techList = techIndex.filter((tech) => tech.clicked);

    createProject(auth as string, {
      title,
      content,
      tech: techList,
      spec: specList,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="np-wrapper">
      <TextField
        className="project-title"
        placeholder="제목을 입력하세요."
        fullWidth
        InputProps={{ style: { fontSize: '2.4rem' } }}
        value={title}
        onChange={onChangeTitle}
      />
      <div className="project-spec">
        <div className="spec-label">모집 분야</div>
        <div className="spec-list">
          {specCategories.map((category, index) => (
            <Chip
              key={index}
              className="category-spec-item"
              label={category.key}
              color={specIndex[index].clicked ? 'primary' : 'default'}
              clickable={true}
              onClick={() => {
                handleChipChange(category);
              }}
            />
          ))}
        </div>
      </div>
      <div className="project-tech">
        <div className="tech-label">기술 스택</div>
        <div className="tech-selector">
          {techCategories.map((tech, index) => (
            <Chip
              key={index}
              className="category-spec-item"
              label={tech.key}
              color={techIndex[index].clicked ? 'primary' : 'default'}
              clickable={true}
              onClick={() => {
                handleTechChange(tech);
              }}
            />
          ))}
        </div>
        <div className="tech-list"></div>
      </div>

      <div className="editor">
        <ReactQuill className="editor" value={content} onChange={setContent} />
      </div>

      <div className="np-button">
        <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
          <Button className="cancel-button" onClick={() => {}}>
            취소
          </Button>
        </Link>

        <Button className="complete-button" onClick={onSubmit}>
          완료
        </Button>
      </div>
    </div>
  );
};
