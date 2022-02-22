import { useGetAuctionsListQuery } from '../reducers/auctionsListApi/auctionsListApi';

function MainPage() {
  const { data, isLoading, isSuccess } = useGetAuctionsListQuery('');
  return (
    <div>
      Main page
      {' '}
      {isLoading && <div>Загрузка...</div>}
      {isSuccess && !isLoading && data?.auctions.map((el) => <div>{el.title}</div>)}
    </div>
  );
}
export default MainPage;
