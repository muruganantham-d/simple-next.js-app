import { Stack, Typography } from '@mui/material'
import React from 'react'

const context = () => {
  return (
    <Stack spacing={5} mt={20}>
         <Typography variant='h3'>Context</Typography>
         <Typography color="gray" variant='h3'>The Box component wraps your component. It create
         s a new DOM element, a  that by default can be c
         hanged with the component prop. Lets say you want to use ins
         tead:</Typography>

    </Stack>
  )
}

export default context