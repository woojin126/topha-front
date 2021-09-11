import loadingUrl from '../../assets/loading.gif';
import './loading.scss';

export const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading">
      <img src={loadingUrl} alt="There is Error" />
    </div>
  );
};
