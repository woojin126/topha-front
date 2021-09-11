import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/notfound.svg';
import './notFound.scss';

export const NotFound: React.FunctionComponent = () => {
  return (
    <div className="notfound">
      <img className="notfound-image" src={notFoundImg} alt="There is Error" />
      <p className="notfound-title">404</p>
      <p className="notfound-content">잘못된 링크입니다.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
        <Button className="button-notfound">홈으로 돌아가기</Button>
      </Link>
    </div>
  );
};
