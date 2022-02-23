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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 375,
      height: 250,
      backgroundImage: `url(${IMAGES_BASEPATH}${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: 3,
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1,
        backgroundColor: '#F0F0F0',
      }}
      >
        <Link to={`${id}`}><div>{title}</div></Link>
        <div>{finishTime}</div>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',

      }}
      >
        <Box sx={{
          width: 150,
          height: 30,
          backgroundColor: '#F0F0F0',
        }}
        >
          Ставка:
          {' '}
          {bid}
        </Box>
      </Box>

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
