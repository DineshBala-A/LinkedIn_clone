import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobListing = ({ job }) => {
  const { title, company, location, description } = job;

  const handleApply = () => {
    // Implement your apply logic here
    console.log(`Applying for ${title} at ${company}`);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
        
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {company} - {location}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleApply}>
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobListing;
