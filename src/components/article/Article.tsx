import './article.scss';
import url from '../../images/article.svg';

export interface ArticleProps {}

export const Article: React.FunctionComponent<ArticleProps> = (props) => {
  return (
    <section className="article">
      <div className="article-text">
        <p>
          {' '}
          프로젝트를 하고싶은 모임이 필요한가요?
          <br />
          그러면 저희 `토프하`에서 찾아보세요.
          <br />
          여러분들의 아이디어를 맞는사람과 함께 만들어가요.{' '}
        </p>
      </div>
      <img className="article-image" src={url} width={300} alt="There is Error" />
    </section>
  );
};
