import PropTypes from 'prop-types';

const Board = ({articles}) => {
  return (
    <div>
      <ul>
        {articles.map(articles => ( 
          //jsx 내에서 루프를 돌린다면 반드시 가장 상위 요소에 key를 넣어야함
          <li key={articles.id}> 
            {articles.id} | {articles.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

Board.propTypes = {
  articles: PropTypes.array
}

export default Board;