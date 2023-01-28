import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AuctionWrapper from '../components/AuctionWrapper/AuctionWrapper';

function AuctionItemPage() {
  const { id } = useParams();

  return (
    <>
      <AuctionWrapper id={id} />
      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </>
  );
}
export default AuctionItemPage;
