import { Link } from 'react-router-dom';
import { useGetAuctionsListQuery } from '../reducers/auctionsListApi/auctionsListApi';
import Spinner from '../components/Spinner/Spinner';

const { POLLING_INTERVAL } = process.env.CONFIG;

function MainPage() {
  const { data, isLoading, isSuccess } = useGetAuctionsListQuery('', { pollingInterval: POLLING_INTERVAL });
  return (
    <>
      <div>
        Main page

        {isLoading && <Spinner />}
        {isSuccess && !isLoading && data?.auctions.map((el) => (
          <div key={el.title}>
            <div>{el.title}</div>
            <div>{el.id}</div>
            <div>{el.bid}</div>
            <div>{el.finishTime}</div>

            <Link to={`${el.id}`}>
              <button
                type="button"
              >
                подробнее
              </button>
            </Link>
          </div>
        ))}

      </div>
      <div />
    </>
  );
}
export default MainPage;
