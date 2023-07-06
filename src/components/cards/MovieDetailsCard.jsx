import { Dialog, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import cancel from '../../assets/cancel.svg'
import WatchBtn from '../buttons/WatchBtn';
import ShareBtn from '../buttons/ShareBtn';
import './moviecards.css'

export default function MovieDetailCard({open, handleClose, data}) {
  return (
    <div className=''>
      {data && 
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{padding:0}}>
              <div className='flex justify-end pb-[100px]'>
                <img className='sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] cursor-pointer' src={cancel} onClick={handleClose} alt="cancel" />
                {/* <Button className='text-white bg-white' onClick={handleClose}>Cancel</Button> */}
              </div>
              <div style={{
              backgroundImage: `url(${data.coverImage})`,
              backgroundSize: 'cover',

              }} className='moviecard2 relative sm:h-[392px] sm:w-[517px] w-[350px] h-[350px] mx-auto  rounded-[15px] overflow-hidden'>
              <div className='details w-full text-text-color px-[18px] py-[33px] flex flex-col gap-[25px]'>
                <div className='flex justify-between w-full z-10'>
                  <div className='flex flex-col gap-[5px] w-[30%]'>
                    <span className='sm:text-[16px] text-[12px]'><b>Year:</b> {data.year}</span>
                    <span className='sm:text-[16px] text-[12px]'><b>Genre:</b> {data.genre}</span>
                  </div>
                  <div className='flex gap-[5px] w-[60%]'>
                    <span className='sm:text-[16px] text-[12px]'> <b>Casts:</b>  </span>
                    <div className='flex flex-wrap'>
                      {data && data.casts.map(cast => (
                        <span className='sm:text-[16px] text-[12px]' key={cast}>{cast},</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='z-10'>
                  <h2 className='uppercase sm:text-[24px] text-[16px] font-[700]'>{data.title}</h2>
                  <p className='sm:text-[16px] text-[12px]'>{data.bio}</p>
                </div>
                <div className='flex gap-[50px] z-10'>
                  <WatchBtn/>
                  <ShareBtn/>
                </div>
              </div>
            </div>
            </DialogContent>
          </Dialog>
        </div>
      }
    </div>
  );
}
MovieDetailCard.propTypes = {
  data: PropTypes.object.isRequired,
  open:PropTypes.bool.isRequired,
  handleClose:PropTypes.func.isRequired,
};