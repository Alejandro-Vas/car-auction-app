import { Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetAuctionsListQuery } from '../reducers/auctionsListApi/auctionsListApi';
import Spinner from '../components/Spinner/Spinner';
import AuctionItem from '../components/AuctionItem/AuctionItem';
import SearchForm from '../components/SearchForm/SearchForm';

const { POLLING_INTERVAL } = process.env.CONFIG;

function MainPage() {
  const { data, isLoading, isSuccess } = useGetAuctionsListQuery('', { pollingInterval: POLLING_INTERVAL });
  const searchQuery = useSelector((state) => state.searchQuerySlice);

  const filteredData = data?.auctions.filter((el) => el.title
    .toLowerCase()
    .includes(searchQuery.toLowerCase()));

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
      <>
        <Box mb={2}>
          <SearchForm />
        </Box>
        <Grid container spacing={3}>
          {filteredData?.map((auction) => (
            <Grid item lg={4} key={auction.id}>
              <AuctionItem auction={auction} isMainPage />
            </Grid>
          ))}
        </Grid>
      </>
      )}
    </>
  );
}
export default MainPage;
