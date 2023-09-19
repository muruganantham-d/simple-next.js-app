import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Box, Chip, Stack, Typography } from '@mui/material';




export default function Home() {
  return (
<Box sx={{marginBottom:20}}>
  <Head>
      <title>Next | Home</title>
      <meta name='keyword' content='home'/>
  </Head>
    <Stack alignItems="center" justifyContent="center">
       <Image src='/1.webp' width={500} height={200} marginTop={20}/>
       <Stack alignSelf="flex-start" spacing={5} mb={10}>
         <Typography variant='h3'>Introduction</Typography>
         <Typography color="gray" variant='h4'>The Box component wraps your component. 
         It create
         s a new DOM element, a  that by default can be c
         hanged with the component prop. Lets say you want to use ins
         tead</Typography>

    </Stack>

  <Link href='/nested'><Chip label="Go to Users"/></Link> 
    </Stack>
</Box>
  )
}
 