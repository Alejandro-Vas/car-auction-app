import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import BidLabel from '../BidLabel/BidLabel';
import FinishTime from '../FinishTime/FinishTime';

const { IMAGES_BASEPATH } = process.env.CONFIG;

function AuctionItem(props) {
  const {
    auction: {
      title, id, bid, finishTime, imgUrl,
    },
    isMainPage,
  } = props;

  const renderWidth = isMainPage ? 375 : 675;
  const renderHeight = isMainPage ? 250 : 400;

  const renderTitle = (
    <div>
      {title}
    </div>
  );

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: renderWidth,
      height: renderHeight,
      backgroundImage: `url(${IMAGES_BASEPATH}${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: 2,
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1,
        backgroundColor: '#F0F0F0',
      }}
      >
        {isMainPage
          ? (
            <Link to={`${id}`}>
              {renderTitle}
            </Link>
          ) : (
            renderTitle
          ) }
        <FinishTime finishTime={finishTime} />
      </Box>
      <BidLabel bid={bid} />
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
  isMainPage: PropTypes.bool.isRequired,
};
