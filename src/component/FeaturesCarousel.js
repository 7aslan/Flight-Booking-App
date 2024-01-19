import React, { useState } from 'react';
import { Box, Typography, MobileStepper, Button } from '@mui/material';

const FeaturesCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const features = [
    {
      title: 'Guarantee',
      description: 'We provide a safe and comfortable experience for your journeys.',
    },
    {
      title: 'Comfortable',
      description: 'Experience a comfortable journey in our modern and cozy airplanes.',
    },
    {
      title: 'Food',
      description: 'We would like to present our delicious food for you as free.'

    }
  ];

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden', margin: 'auto', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '70%', marginTop: '2rem' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Advantages
        </Typography>
        <Box style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" align="center" gutterBottom>
            {features[activeStep].title}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            {features[activeStep].description}
          </Typography>
        </Box>
        <MobileStepper
          variant="dots"
          steps={features.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === features.length - 1}>
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
          }
        />
      </Box>
    </div>

  );
};

export default FeaturesCarousel;
