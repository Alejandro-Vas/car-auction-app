import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchQueryActions } from '../reducers/searchQuerySlice/searchQuerySlice';

const AllActions = {
  ...searchQueryActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
