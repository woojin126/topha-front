import { Button, Card, CardContent } from '@material-ui/core';
import './loginbox.scss';
import leftImage from '../../images/login-left.svg';
import RightImage from '../../images/login-right.svg';
import kakao from '../../images/kakao.svg';
import github from '../../images/github.svg';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8080/oauth2/authorize/kakao?redirect_uri=http://localhost:3000/signup';

export const LoginBox: React.FunctionComponent = (props) => {
  return (
    <div className="loginbox">
      <Card>
        <CardContent className="loginbox-content">
          <div className="logo">TOPHA</div>
          <div className="login-wrapper">
            <Button
              className="button-kakao"
              onClick={(e) => {
                e.preventDefault();

                window.location.href = url;
              }}
            >
              <img className="button-image" src={kakao} alt="There is Error" />
              <span>카카오 로그인</span>
            </Button>
          </div>
          {/* <Button className="button-github">
            <img className="button-image" src={github} alt="There is Error" />
            <span>깃허브 로그인</span>
          </Button> */}
          <Link to="/" className="button-back" style={{ textDecoration: 'none', color: '#000000' }}>
            뒤로 가기
          </Link>
        </CardContent>
      </Card>
      <img className="login-left" src={leftImage} alt="There is Error" />
      <img className="login-right" src={RightImage} alt="There is Error" />
    </div>
  );
};
