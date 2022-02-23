import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuctionItem(props) {
  const {
    auction: {
      title, id, bid, finishTime,
    },
  } = props;
  return (
    <>
      <div>{title}</div>
      <div>{id}</div>
      <div>{bid}</div>
      <div>{finishTime}</div>

      <Link to={`${id}`}>
        <button
          type="button"
        >
          подробнее
        </button>
      </Link>
    </>
  );
}

export default AuctionItem;

AuctionItem.propTypes = {
  auction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    bid: PropTypes.number.isRequired,
    finishTime: PropTypes.number.isRequired,
  }).isRequired,
};
