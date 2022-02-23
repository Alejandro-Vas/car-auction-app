import { Typography } from '@mui/material';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" />
      <Typography variant="subtitle1" fontSize="subtitle1.fontSize" gutterBottom component="div">
        Загрузка...
      </Typography>
    </div>
  );
}
export default Spinner;
