import React from 'react';
import Button from '@mui/material/Button';

const NextButton = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      disableElevation
      sx={{
        color: 'white',
        height: '50px',
        fontWeight: 600,
        fontSize: '18px',
        backgroundColor: '#FF9900',
        ':hover': { backgroundColor: '#FFC266' },
      }}
    >
      상세페이지 확인하기
    </Button>
  );
};

export default NextButton;
