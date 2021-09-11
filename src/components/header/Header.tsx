import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { logout } from '../../apis/Auth';
import { userAtom } from '../../states/user';
import './header.scss';

export interface HeaderProps {
  isLogged: boolean;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ isLogged }) => {
  const user = useRecoilValueLoadable(userAtom);
  let nick = '';

  switch (user.state) {
    case 'hasValue':
      if (user.contents) {
        nick = user.contents.nickname;
        console.log(nick);
      }

      break;
    case 'hasError':
      logout();
      // userNickname = user.contents.message;
      break;
    case 'loading':
    default:
      nick = 'loading';
  }

  return (
    <header>
      <div className="logo">TOPHA</div>
      <div className="login">
        {isLogged ? (
          <span>
            <Link to="/newproject">프로젝트 글쓰기</Link>
            <Link to="/user">{nick as string}</Link>
            <Button className="logout" onClick={logout}>
              로그아웃
            </Button>
          </span>
        ) : (
          <Link to="/login">로그인</Link>
        )}{' '}
      </div>
    </header>
  );
};
