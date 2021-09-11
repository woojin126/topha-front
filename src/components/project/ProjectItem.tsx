import { Card, CardContent } from '@material-ui/core';
import JavascriptUrl from '../../images/javascript.svg';
import { ProjectType } from './Project';
import './projectItem.scss';
import likeEmpty from '../../images/heart-empty.svg';
import likeFull from '../../images/heart-full.svg';
import view from '../../images/view.svg';
import { useHistory } from 'react-router-dom';

export interface ProjectItemProps {
  project: ProjectType;
}

export const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const history = useHistory();
  return (
    <Card
      className="project-item"
      onClick={() => {
        history.push(`/project/${props.project.id}`);
      }}
    >
      <CardContent>
        <p className="card-title">{props.project.title}</p>
        <p className="card-spec">모집분야: {props.project.spec.map((spec) => spec.key)}</p>
        <div className="card-tech-list">
          {props.project.tech.map((tech, index) => (
            <img key={index} src={tech.url} />
          ))}
        </div>

        <p className="card-user">{props.project.nickname}</p>
        <p className="card-user-spec">{props.project.userSpec}</p>
        <div className="card-bottom">
          <div className="card-like">
            <img src={likeEmpty} />
            {props.project.like}
          </div>
          <div className="card-view">
            <img src={view} />
            {props.project.view}
          </div>
          <div className="card-date">{props.project.date}</div>
        </div>
      </CardContent>
    </Card>
  );
};

ProjectItem.defaultProps = {
  project: {
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
};
