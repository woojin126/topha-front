import React from 'react';
import { LoginBox } from '../components/login/LoginBox';
import backgroundUrl from '../images/background.svg';

export const LoginPage: React.FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        display: 'flex',
        height: '100vh',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <LoginBox />
    </div>
  );
};
