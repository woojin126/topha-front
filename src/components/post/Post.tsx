import { Button, Chip, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ProjectType } from '../project/Project';
import './post.scss';

export interface PostProps {
  project: ProjectType;
}

export const Post: React.FunctionComponent<PostProps> = (props) => {
  const { title, date, id, like, nickname, spec, tech, userSpec, view, content } = props.project;

  const commentCount = 2;

  return (
    <div className="post-wrapper">
      <div className="post-title">
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <div className="user-info">
          <div className="user-image"></div>
          <div className="user-nickname">{nickname}</div>
          <div className="user-spec">{userSpec}</div>
        </div>
      </div>

      <div className="post-spec">
        <h5>프로젝트 모집 분야</h5>
        <div className="spec">
          {spec.map((el) => (
            <Chip label={el.key}></Chip>
          ))}
        </div>
      </div>

      <div className="post-tech">
        <h5>프로젝트 기술 스택</h5>
        <div className="tech">
          {tech.map((el) => (
            <img src={el.url}></img>
          ))}
        </div>
        <Divider className="post-divider" />
      </div>

      <div className="post-content">{content}</div>

      <div className="post-comment">
        <p className="comment-count">{commentCount}개의 댓글이 있습니다.</p>

        <input className="comment-input" type="text" />
        <Button className="comment-confirm">작성하기</Button>

        <div className="comment-list"></div>
        <Link to="/">
          <Button className="button-back">뒤로가기</Button>
        </Link>
      </div>
    </div>
  );
};
