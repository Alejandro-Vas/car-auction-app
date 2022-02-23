import { Typography } from '@mui/material';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" />
      <Typography variant="h2" fontSize="h4.fontSize" gutterBottom component="div">
        Загрузка...
      </Typography>
    </div>
  );
}
export default Spinner;
