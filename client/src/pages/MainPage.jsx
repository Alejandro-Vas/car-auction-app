import { Box } from '@mui/material';
import SearchForm from '../components/SearchForm/SearchForm';
import AuctionsListWrapper from '../components/AuctionsListWrapper/AuctionsListWrapper';

function MainPage() {
  return (
    <>
      <Box mb={2}>
        <SearchForm />
      </Box>
      <AuctionsListWrapper />
    </>
  );
}
export default MainPage;
