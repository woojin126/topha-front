import { specCategory, techCategory } from '../category/Category';
import Divider from '@material-ui/core/Divider';
import { ProjectItem } from './ProjectItem';
import JavascriptUrl from '../../images/javascript.svg';
import Chip from '@material-ui/core/Chip';
import './project.scss';
import searchUrl from '../../images/search.svg';
import { Loading } from '../loading/Loading';
import { useEffect, useState } from 'react';
import { getAllProject } from '../../apis/Project';

export type ProjectType = {
  id?: number;
  title: string;
  spec: specCategory[];
  tech: techCategory[];
  nickname: string;
  userSpec: string;
  like: number;
  view: number;
  date: string;
  content?: string;
};

const temp = [
  {
    id: 1,
    title: '프로젝트 같이 하실분 모집합니다!!',
    date: '2021-08-26 11:00:32',
    like: 4,
    spec: [{ id: 1, value: 'frontend', key: '프론트엔드 개발자' }],
    nickname: '개발자1',
    tech: [{ id: 1, key: 'typescript', url: JavascriptUrl }],
    userSpec: '백엔드 개발자',
    view: 63,
  },
  {
    id: 2,
    title: '프로젝트 같이 하실분 모집합니다!!',
    date: '2021-08-26 11:00:32',
    like: 4,
    spec: [{ id: 1, value: 'frontend', key: '프론트엔드 개발자' }],
    nickname: '개발자1',
    tech: [{ id: 1, key: 'typescript', url: JavascriptUrl }],
    userSpec: '백엔드 개발자',
    view: 63,
  },
  {
    id: 3,
    title: '프로젝트 같이 하실분 모집합니다!!',
    date: '2021-08-26 11:00:32',
    like: 4,
    spec: [{ id: 1, value: 'frontend', key: '프론트엔드 개발자' }],
    nickname: '개발자1',
    tech: [{ id: 1, key: 'typescript', url: JavascriptUrl }],
    userSpec: '백엔드 개발자',
    view: 63,
  },
  {
    id: 4,
    title: '프로젝트 같이 하실분 모집합니다!!',
    date: '2021-08-26 11:00:32',
    like: 4,
    spec: [{ id: 1, value: 'frontend', key: '프론트엔드 개발자' }],
    nickname: '개발자1',
    tech: [{ id: 1, key: 'typescript', url: JavascriptUrl }],
    userSpec: '백엔드 개발자',
    view: 63,
  },
  {
    id: 5,
    title: '프로젝트 같이 하실분 모집합니다!!',
    date: '2021-08-26 11:00:32',
    like: 4,
    spec: [{ id: 1, value: 'frontend', key: '프론트엔드 개발자' }],
    nickname: '개발자1',
    tech: [{ id: 1, key: 'typescript', url: JavascriptUrl }],
    userSpec: '백엔드 개발자',
    view: 63,
  },
];

export interface ProjectProps {}

export const Project: React.FunctionComponent<ProjectProps> = (props) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [projects, setProjects] = useState<ProjectType[]>(temp);

  const setAllProject = async () => {
    getAllProject().then(({ data, status }) => {
      if (status === 200) {
        setProjects(data.data);
      }

      setIsLoading(false);
    });
  };

  useEffect(() => {
    setAllProject();
  }, [setProjects]);

  return (
    <section className="project-list">
      <p className="project-list-title">TOPHA 프로젝트</p>
      <Divider className="divider" />
      <div className="project-list-filter">
        <Chip className="filter-chip" label="최신" />
        <Chip className="filter-chip" label="인기" />
      </div>
      <div className="project-list-search">
        <img src={searchUrl} alt="There is Error" />
        <input type="text" />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="project-list-items">
          {projects.length > 0 ? (
            projects.map((project) => <ProjectItem key={project.id} project={project} />)
          ) : (
            <div>No value</div>
          )}
        </div>
      )}
    </section>
  );
};
