import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
// import { Link } from 'react-router-dom';

const StyledPaper = styled(Box)({
  height: '100vh',
  width: '100vw',
});

const NotFoundPage = () => {
  const typographyStyle = { color: 'black', fontWeight: 'bold' };
  return (
    <Box
      sx={{
        backgroundColor: '#F6F7F9',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fill',
        display: 'block',
        height: 'auto',
        paddingTop: 5,
        position: 'fixed',
        width: 'max-content',
        zIndex: 10000,
      }}
    >
      <Grid container justifyContent="center">
        <StyledPaper>
          <Container maxWidth="sm">
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom style={typographyStyle}>
                404
              </Typography>
              <Typography variant="body1" style={typographyStyle}>
                Página no encontrada
              </Typography>
              <Typography style={{ color: '#1D2939' }}>
                El enlace que siguió puede estar roto o la página puede haber sido eliminada.
              </Typography>
              <Button
                href="/dashboard"
                // disableElevation
                style={{background: '#1671F4', fontSize: '12px', color: 'white'}}
                // sx={{
                //   backgroundColor: '#1671F4',
                //   color: 'white',
                //   fontSize: '12px',
                //   fontWeight: 550,
                //   mt: 3,
                //   pb: 0.8,
                //   pl: 1.3,
                //   pr: 1.3,
                //   pt: 0.8,
                //   textTransform: 'none',
                // }}
                variant="contained"
                color="secondary"
              >
                Volver al sitio web
              </Button>
            </Box>
          </Container>
        </StyledPaper>
      </Grid>
    </Box>
  );
};

export default NotFoundPage;
