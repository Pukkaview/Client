import { Dialog, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import cancel from '../../assets/cancel.svg'
import WatchBtn from '../buttons/WatchBtn';
import ShareBtn from '../buttons/ShareBtn';
import './moviecards.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShareCard from './shareCard';

export default function MovieDetailCard({open, handleClose, data}) {
  const [openShare, setOpenShare] = useState(false)
  const handleOpen = () => {
    setOpenShare(true)
  }
  const handleCloseShare = () => {
    setOpenShare(false)
  }
  return (
    <div className=''>
      {data && 
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{padding:0}}>
              <div className='flex justify-end'>
                <img className='sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] cursor-pointer' src={cancel} onClick={handleClose} alt="cancel" />
                {/* <Button className='text-white bg-white' onClick={handleClose}>Cancel</Button> */}
              </div>
              <div style={{
              backgroundImage: `url(${encodeURI(data.thumbnaillink)})`,
              backgroundSize: 'cover',

              }} className='moviecard3 relative sm:h-[392px] sm:w-[517px] w-[325px] h-[350px] mx-auto  rounded-[15px] overflow-hidden items-center flex'>
              <div className='details w-full text-text-color sm:px-[18px] px-[8px] py-[33px] flex flex-col gap-[25px] '>
                <div className='flex justify-between w-full z-10'>
                  <div className='flex flex-col gap-[5px] w-[30%]'>
                    <span className='sm:text-[16px] text-[12px]'><b>Year:</b> {data.year}</span>
                    <span className='sm:text-[16px] text-[12px]'><b>Genre:</b> {data.genre}</span>
                  </div>
                  <div className='flex gap-[5px] w-[60%]'>
                    <span className='sm:text-[16px] text-[12px]'> <b>Casts:</b>  </span>
                    <div className='flex flex-wrap'>
                        <span className='sm:text-[16px] text-[12px]'>{data.cast}</span>
                    </div>
                  </div>
                </div>
                <div className='z-10'>
                  <h2 className='uppercase sm:text-[24px] text-[16px] font-[700]'>{data.title}</h2>
                  <p className='sm:text-[16px] text-[12px]'>{data.plot}</p>
                </div>
                <div className='flex gap-[50px] z-10'>
                <Link to={`/play/${data.id}`}>
                  <WatchBtn/>
                </Link>
                  <ShareBtn data={data} handleOpen={handleOpen}/>
                </div>
              </div>
              {openShare &&
              <div className='absolute z-[100] bottom-0 left-0'>
                <ShareCard width={window.innerWidth < 640 ? 325 : 517} handleClose={handleCloseShare} data={data}/>
              </div>
          }
            </div>
            </DialogContent>
          </Dialog>
        </div>
      }
    </div>
  );
}
MovieDetailCard.propTypes = {
  data: PropTypes.object,
  open:PropTypes.bool,
  handleClose:PropTypes.func,
};