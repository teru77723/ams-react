import React, { useEffect, useState } from 'react'
import  QRCode  from "qrcode"

export default function QR({ show, setShow, children }) {

     const [src, setSrc] = useState('');

     useEffect(() => {
          QRCode.toDataURL('#').then(setSrc);
     }, [])

     const closeModal = () => {
          setShow(false);
     };
     if (show) {
          return (
               <div id="overlay">
                    <div id="modalContent">
                         <img src={src} alt="QR"/>
                         <button onClick={closeModal}>閉じる</button>
                    </div>
               </div>
          );
     } else {
          return null
     }
     
};


