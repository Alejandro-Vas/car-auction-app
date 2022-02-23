import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const { IMAGES_BASEPATH } = process.env.CONFIG;

function AuctionItem(props) {
  const {
    auction: {
      title, id, bid, finishTime, imgUrl,
    },
  } = props;
  return (

    <Box sx={{
      width: 300,
      height: 200,
      backgroundImage: `url(${IMAGES_BASEPATH}${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: 3,
    }}
    >
      <Link to={`${id}`}><div>{title}</div></Link>
      <div>{id}</div>
      <div>{bid}</div>
      <div>{finishTime}</div>
    </Box>
  );
}

export default AuctionItem;

AuctionItem.propTypes = {
  auction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    bid: PropTypes.number.isRequired,
    finishTime: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};
