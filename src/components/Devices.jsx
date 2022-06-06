// import { Box } from '@mui/system';
import React from 'react';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
const deviceImg = require('../icons/device.png');

export const Devices = () => (
  <>
    <h1>
      <title>Products</title>
    </h1>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            <Grid lg={4} md={6} xs={12}>
              <img src={deviceImg} />
              <Box className="deviceName" mb={3} mt={3} width="30%">
                <Typography variant="h4" fontWeight="bold" mb={3} color="#0096c7">
                  Bellas feeder
                </Typography>
              </Box>
              <Box mt={3} width="30%">
                <Button fullWidth variant="contained" type="submit">
                  Turn on
                </Button>
              </Box>
              <Box mt={3} width="30%">
                <Button fullWidth variant="contained" type="submit">
                  See plan
                </Button>
              </Box>
              <Box mt={3} width="30%">
                <Button fullWidth variant="contained" type="submit">
                  See pet
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}>
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

// export default Devices;
