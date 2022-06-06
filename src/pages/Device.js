import { Button, Table, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const Device = () => {
  const disptach = useDispatch();
  const history = useHistory();
  const { Device } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    history.push('/');
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3} color="#0096c7">
        Your device is {}
      </Typography>
      <Table variant="h3" fontWeight="bold" mb={3} color="#0096c7"></Table>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back to initial page!
      </Button>
    </Box>
  );
};

export default Device;
