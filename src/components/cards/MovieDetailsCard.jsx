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
                {/* <Button className='text-white bg-white' onClick={handleClose}>Cancel</Button> */}
              </div>
              <div className='moviecard3 relative sm:h-[392px] sm:w-[517px] w-[300px] h-[250px] mx-auto  rounded-[15px] overflow-hidden items-center flex'>
              <img className='cursor-pointer absolute z-[1] h-[30px] w-[30px] top-[10px] right-[10px]' src={cancel} onClick={handleClose} alt="cancel" />
              <img className='h-full w-full absolute z-[-2]' src={encodeURI(data.thumbnaillink)} alt="" />
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
                <ShareCard width={window.innerWidth < 640 ? 300 : 517} handleClose={handleCloseShare} data={data}/>
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