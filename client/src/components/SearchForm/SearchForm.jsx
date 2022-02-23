import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';

function SearchForm() {
  const options = ['FORD', 'KIA', 'NISSAN', 'TOYOTA', 'ВАЗ'];
  const searchQuery = useSelector((state) => state.searchQuerySlice);
  const { setSearchQuery } = useActions();

  return (
    <Autocomplete
      sx={{ width: 300 }}
      freeSolo
      inputValue={searchQuery}
      onInputChange={(event, newInputValue) => {
        setSearchQuery(newInputValue);
      }}
      autoHighlight
      autoSelect
      options={options}
      renderInput={(params) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextField {...params} label="Введите модель" />
      )}
    />
  );
}
export default SearchForm;
