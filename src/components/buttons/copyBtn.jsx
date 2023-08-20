import React, { useState } from 'react';
import { toast } from "react-toastify";
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleSuccess = () => {
    toast.dismiss();
    toast.success('Copied to Clipboard!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleError = () => {
    toast.dismiss();
    toast.error('Failed to copy, Try again', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        handleSuccess();
        setTimeout(() => setCopied(false), 1500); // Reset the "copied" state after 1.5 seconds
      })
      .catch(error => {handleError()});
  };

  return (
    <div>
      <button onClick={copyToClipboard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M6.6001 12.1044C6.6001 9.37835 6.6001 8.01535 7.4431 7.16835C8.2871 6.32135 9.6441 6.32135 12.3601 6.32135H15.2401C17.9551 6.32135 19.3121 6.32135 20.1561 7.16835C21.0001 8.01535 21.0001 9.37835 21.0001 12.1044V16.9243C21.0001 19.6503 21.0001 21.0133 20.1561 21.8603C19.3131 22.7073 17.9551 22.7073 15.2401 22.7073H12.3601C9.6441 22.7073 8.2871 22.7073 7.4431 21.8603C6.6001 21.0133 6.6001 19.6503 6.6001 16.9243V12.1044Z" fill={`${!copied ? '#800080': '#FEF'}`}/>
        <path opacity="0.5" d="M4.172 3.87934C3 5.05034 3 6.93634 3 10.7073V12.7073C3 16.4783 3 18.3643 4.172 19.5353C4.789 20.1533 5.605 20.4453 6.792 20.5833C6.6 19.7433 6.6 18.5873 6.6 16.9233V12.1043C6.6 9.37834 6.6 8.01534 7.443 7.16834C8.287 6.32134 9.644 6.32134 12.36 6.32134H15.24C16.892 6.32134 18.04 6.32134 18.878 6.51134C18.74 5.31834 18.448 4.49934 17.828 3.87934C16.657 2.70734 14.771 2.70734 11 2.70734C7.229 2.70734 5.343 2.70734 4.172 3.87934Z" fill={`${!copied ? '#800080': '#FEF'}`}/>
    </svg>
      </button>
    </div>
  );
};

export default CopyButton;
