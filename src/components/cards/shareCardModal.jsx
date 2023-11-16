import { Dialog } from '@mui/material'
import React from 'react'
import ShareCard from './shareCard'

export default function ShareCardModal({open, handleClose, data, width}) {
  return (
    <Dialog open={open} onClose={handleClose}>
        <ShareCard width={width} data={data} handleClose={handleClose}/>
    </Dialog>
  )
}
