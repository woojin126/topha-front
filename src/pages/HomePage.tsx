import React, { useCallback, useState } from 'react';
import { Article } from '../components/article/Article';
import { Category } from '../components/category/Category';
import { Project } from '../components/project/Project';

export const HomePage: React.FunctionComponent = () => {
  const [options, setOptions] = useState();

  const onChangeOption = useCallback(
    (options: any) => {
      setOptions(options);
    },
    [setOptions]
  );

  return (
    <React.Fragment>
      <Article />
      <Category onChange={onChangeOption} />
      <Project />
    </React.Fragment>
  );
};
