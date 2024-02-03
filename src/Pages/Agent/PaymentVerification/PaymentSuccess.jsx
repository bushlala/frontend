import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference");

    //const handleBookingConfirm = async () =>{
        // const confirmBookingRequest = {
        //     bookingId : reInitialValues.bookingId,
        //     amount : totalPrices.total,
        //     personalPhone : reInitialValues.personalPhone,
        //     personalEmail : reInitialValues.personalEmail,
        //     gstNumber : reInitialValues.gstNumber,
        //     gstEmail : reInitialValues.gstEmail,
        //     registeredName : reInitialValues.registeredName,
        //     mobile : reInitialValues.mobile,
        //     address : reInitialValues.address,
        //     isGst : reInitialValues.isGst,
        //     bookingId : reInitialValues.bookingId,
        //     travellerInfo : reInitialValues.travellerInfo
        // }
        //console.log("confirmBookingRequest",confirmBookingRequest);
        // FlightSearchService.BookingConfirm(confirmBookingRequest).then(async (response) => {
        //   if(response.data.status){
        //     const result =  response.data.data;
        //     console.log("result",result);
        //   }else{
        //     toast.error('Something went wrong');
        //   }
        // }).catch((e) => {
        //   console.log(e);
        //   toast.error('Something went wrong');
        // });
      //}
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
export default PaymentSuccess
