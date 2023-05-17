import React from 'react'



const CustomLoader = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <CircularProgress size={100} />
    </Box>
  )
}

export default CustomLoader