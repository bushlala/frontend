import React, {useState,useEffect } from 'react';
import {Link,useNavigate,useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service'; 
import toast from 'react-hot-toast';
export default function BookingTimerOff({}) {
    // for timers
    const [countdown, setcountdown] = useState(60 * 12);
    const navigate = useNavigate();
  
    let timerid;
    useEffect(() => {
        setcountdown(60 * 12);
        timerid = setInterval(() => {
            setcountdown((countdown) => countdown - 1);
        }, 1000);
    }, []);

    const fancyTimeFormat =  (duration) => {
        if(duration === 0){
             clearInterval(timerid);
            navigate(-1)
        }else{
            // Hours, minutes and seconds
            const hrs = ~~(duration / 3600);
            const mins = ~~((duration % 3600) / 60);
            const secs = ~~duration % 60;
            // Output like "1:01" or "4:03:59" or "123:03:59"
            let ret = "";
        
            if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }
            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
          return ret;
        }
    }
      
  
 // const seconds = (countdown % 60).String().padstart(2, 0);
  //const minutes = string(math.floor(countdown / 60)).padstart(2, 0);
    return (
        <>
        <div className="flightsession open-button text-center">
        Your session will expire in <p>{fancyTimeFormat(countdown)} min/sec</p>
        </div> 
        </>
    )
}