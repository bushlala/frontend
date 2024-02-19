import React, { useEffect } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom";
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { useNavigate } from "react-router-dom";


const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0]
  const referenceNum = seachQuery.get("reference");
  const navigate = useNavigate();


  useEffect(() => {
     let dataList = JSON.parse(localStorage.getItem("bookingRequest"));
    BookingConfirm(dataList);
  }, [])



  const BookingConfirm = async (dataList) => {
 let newobject = dataList.travellerInfo.map(item => {
      return item
    })

    for (let i = 0; i < newobject.length; i++) {
    
      // Remove 'amount' and 'desc' keys from ssrBaggageInfos array
      newobject[i].ssrBaggageInfos.forEach(info => {
        delete info.amount;
        delete info.desc;
      });
      newobject[i].ssrSeatInfos.forEach(info => {
        delete info.amount;
        delete info.color;
        delete info.isBooked;
        delete info.seatNo;
        delete info.seatPosition;
        delete info.isAisle;
      });
      newobject[i].ssrMealInfos.forEach(info => {
        delete info.amount;
        delete info.desc;
      });
    
    }
  FlightSearchService.BookingConfirm(dataList).then(async (response) => {
      if (response.data.status) {
        const result = response.data.data;
        setTimeout(() => {
          navigate(`/booking-success/${dataList.bookingId}`);
        }, 200)
      } else {
        alert("Something went wrong")


      }
    }).catch((e) => {
      console.log(e);
      alert("Something went wrong")

    });
  }


  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>

        <Heading textTransform={"uppercase"}> Order Successfull</Heading>

        <Text>
          Reference No.{referenceNum}
        </Text>

      </VStack>
    </Box>
  )
}

export default PaymentSuccess;
