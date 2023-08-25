import React, { useState, useEffect } from 'react';
import  './style.css';

const PopupNotification = ({ message }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);

    
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  return (
    <>
      {showPopup && <div className="popup">{message}</div>}
    </>
  );
};

export default PopupNotification;
