import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner() {
  return (
    <Box sx={{
      minHeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <CircularProgress sx={{ margin: '0 auto' }} size={80} />
    </Box>
  );
}
export default Spinner;
