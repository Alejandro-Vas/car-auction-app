import { useGetAuctionsListQuery } from '../../reducers/auctionsListApi/auctionsListApi';
import Spinner from '../Spinner/Spinner';
import GridWrapper from '../GridWrapper/GridWrapper';

const { POLLING_INTERVAL } = process.env.CONFIG;

function AuctionsListWrapper() {
  const { isLoading, isSuccess } = useGetAuctionsListQuery('', { pollingInterval: POLLING_INTERVAL });

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
        <GridWrapper />
      )}
    </>
  );
}
export default AuctionsListWrapper;
