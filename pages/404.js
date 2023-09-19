


import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PageNotFount = () => {

    const router = useRouter();

    useEffect(() => {
       const id = setTimeout(()=>{
        router.push('/')
       },3000)
       
      return () => clearTimeout(id);

    },[])

  return (
    <Box sx={{margin:20}}>
    <Typography  variant='h5'>Whoops! Page not fount</Typography>
    <Link href="/"><Button variant='text'>Go to Home</Button></Link>
    </Box>
  )
}

export default PageNotFount