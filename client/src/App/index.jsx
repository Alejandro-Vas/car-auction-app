import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AuctionItemPage from '../pages/AuctionItemPage';

function App() {
  return (
    <Router>
      <Container>
        <Box mt={3} mb={2}>
          <Typography variant="h1" fontSize="h3.fontSize">
            Аукционы
          </Typography>
        </Box>
        <Box mb={3}>
          <Divider />
        </Box>
        <Box mb={3}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path=":id" element={<AuctionItemPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
