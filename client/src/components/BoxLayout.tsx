import { Box } from '@mui/material'
import React from 'react'
import { BoxType } from '../@types/types'

const BoxLayout = ({children}:BoxType) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        {children}
    </Box>
  )
}

export default BoxLayout