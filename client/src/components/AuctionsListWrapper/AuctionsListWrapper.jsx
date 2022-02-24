import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetAuctionsListQuery } from '../../reducers/auctionsListApi/auctionsListApi';
import Spinner from '../Spinner/Spinner';
import AuctionItem from '../AuctionItem/AuctionItem';

const { POLLING_INTERVAL } = process.env.CONFIG;

function AuctionsListWrapper() {
  const { data, isLoading, isSuccess } = useGetAuctionsListQuery('', { pollingInterval: POLLING_INTERVAL });
  const searchQuery = useSelector((state) => state.searchQuerySlice);

  const filteredData = data?.auctions.filter((el) => el.title
    .toLowerCase()
    .includes(searchQuery
      .toLowerCase()
      .trim()));

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
      <Grid container spacing={3}>
          {filteredData?.map((auction) => (
            <Grid item lg={4} key={auction.id}>
              <AuctionItem auction={auction} isMainPage />
            </Grid>
          ))}
      </Grid>
      )}
    </>
  );
}
export default AuctionsListWrapper;
