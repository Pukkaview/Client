import share from '../../assets/share.svg'
import './button.css'
export default function ShareBtn({data}) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: data.title,
          text: data.plot,
          url: `https://pukkaview.vercel.app/play/${data.id}`,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        console.log("Web Share API not supported");
        alert("Web Share API not supported")
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button onClick={handleShare} className='text-accent4 flex items-center gap-[5px] cursor-pointer'>
      <img className='iconlight' src={share} alt="share" />
      <span className='font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]'>Share Now</span>
    </button>
  )
}