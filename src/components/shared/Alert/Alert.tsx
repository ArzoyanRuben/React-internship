import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '10%', position: "absolute", top: "0%" }} spacing={2}>
      <Alert severity="success">SUCCESS</Alert>
    </Stack>
  );
}