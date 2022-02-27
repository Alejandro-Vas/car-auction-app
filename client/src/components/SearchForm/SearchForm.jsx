import { TextField } from '@mui/material';

import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

function SearchForm() {
  const searchQuery = useSelector((state) => state.searchQuerySlice);
  const { setSearchQuery } = useActions();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <TextField
      type="search"
      sx={{ width: 300 }}
      label="Введите модель"
      value={searchQuery}
      onChange={handleChange}
    />
  );
}
export default SearchForm;
