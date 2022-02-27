import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import AuctionItem from '../AuctionItem/AuctionItem';
import { useGetAuctionItemQuery } from '../../reducers/auctionItemApi/auctionItemApi';
import Spinner from '../Spinner/Spinner';

const { POLLING_INTERVAL } = process.env.CONFIG;

function AuctionWrapper(props) {
  const { id } = props;
  const { data, isLoading, isSuccess } = useGetAuctionItemQuery(
    id,
    { pollingInterval: POLLING_INTERVAL },
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
      <>
        <Typography
          variant="h2"
          fontSize="h4.fontSize"
        >
          Подробная информация об автомобиле
          <br />
          <b>{data?.auction?.title}</b>
        </Typography>
        <Box mb={3}>
          <AuctionItem auction={data?.auction} isMainPage={false} />
          <Typography
            variant="h5"
            fontSize="h5.fontSize"
          >
            Пробег
            {' '}
            {data?.auction?.mileage}
            {' '}
            км
          </Typography>
        </Box>
      </>
      )}
    </>
  );
}
export default AuctionWrapper;

AuctionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
};
