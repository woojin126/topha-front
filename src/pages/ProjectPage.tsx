import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../components/post/Post';
import { ProjectType } from '../components/project/Project';
import JavascriptUrl from '../images/javascript.svg';
interface ParamTypes {
  key: string;
}

const temp = {
  id: 1,
  title: '프로젝트 같이 하실분 모집합니다!!',
  date: '2021-08-26 11:00:32',
  like: 4,
  spec: [{ id: 1, value: 'frontend', key: '프론트엔드 개발자' }],
  nickname: '개발자1',
  tech: [{ id: 1, key: 'typescript', url: JavascriptUrl }],
  userSpec: '백엔드 개발자',
  view: 63,
};

export const ProjectPage: React.FunctionComponent = (props) => {
  let { key } = useParams<ParamTypes>();

  const [projectInfo, setProjectInfo] = useState<ProjectType>(temp);

  useEffect(() => {
    //api need for get projectInfo
  }, []);

  return <Post project={projectInfo}></Post>;
};
