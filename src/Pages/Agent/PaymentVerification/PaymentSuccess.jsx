import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom";
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';




const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0]
  const referenceNum = seachQuery.get("reference");
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState(false);

  let dataList = JSON.parse(localStorage.getItem("bookingRequest"));
  let status = localStorage.getItem("bookingStatus");
  let orderId = localStorage.getItem("orderId");

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    UpdateTransactions();
  }, [])


  const ConfirmholdBooking = async () => {
    localStorage.removeItem("bookingStatus");
    const data = {
      bookingId: dataList.bookingId,
      amount: dataList.amount
    }

    FlightSearchService.ConfirmholdBooking(data)
      .then(async (response) => {
        if (response.data.status) {
          const result = response.data.data;
          setTimeout(() => {
            navigate(`/booking-success/${dataList.bookingId}`);
          }, 500);
        } else {
          let errorMsg = response.data?.message?.message
          // toast.error(errorMsg);
          setErrormsg(errorMsg);
          handleShow()
          setTimeout(() => {
            navigate(`/agent/flight`);
          }, 2000)
        }
      })
      .catch((e) => {
        console.log(e);
        handleShow();
      });
  };

  const BookingConfirm = async () => {

    let newobject = dataList.travellerInfo.map(item => {
      return item;
    });

    for (let i = 0; i < newobject.length; i++) {
      // Remove 'amount' and 'desc' keys from ssrBaggageInfos array if it exists
      if (newobject[i].ssrBaggageInfos) {
        newobject[i].ssrBaggageInfos.forEach(info => {
          delete info.amount;
          delete info.desc;
        });
      }

      // Remove specified keys from ssrSeatInfos array if it exists
      if (newobject[i].ssrSeatInfos) {
        newobject[i].ssrSeatInfos.forEach(info => {
          delete info.amount;
          delete info.color;
          delete info.isBooked;
          delete info.seatNo;
          delete info.seatPosition;
          delete info.isAisle;
        });
      }

      // Remove 'amount' and 'desc' keys from ssrMealInfos array if it exists
      if (newobject[i].ssrMealInfos) {
        newobject[i].ssrMealInfos.forEach(info => {
          delete info.amount;
          delete info.desc;
        });
      }
    }

    FlightSearchService.BookingConfirm(dataList)
      .then(async (response) => {
        if (response.data.status) {
          const result = response.data.data;
          setTimeout(() => {
            navigate(`/booking-success/${dataList.bookingId}`);
            localStorage.removeItem("bookingStatus")
          }, 200);
        } else {
          alert("Something went wrong");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong");
      });
  };

  const UpdateTransactions = () => {
    let values = {
      bookingId: dataList.bookingId,
      orderId: orderId, // Assuming order.id is available in the scope
      status: "1"
    }
    FlightSearchService.UpdateTransactions(values).then(async (response) => {
      if (response.status === 200) {

        if (response.data.status) {
          console.log("response", response.data.data)
          if (status === "onhold") {
            ConfirmholdBooking();
          } else {
            BookingConfirm();
          }
        } else {
          let errorMessage = response.data.message ? response.data.message : "someting wrong"
          console.log(errorMessage)
          setErrormsg(true);
          localStorage.removeItem("bookingStatus");
        }
      } else {
        let errorMessage = response.data.message;
        console.log(errorMessage)
      }

    }).catch((error) => {
      let errorMessage = error.message
      console.log(errorMessage)
    });
  }

  return (
    <div>
      <Box>
        <VStack h="100vh" justifyContent={"center"}>

          <Heading textTransform={"uppercase"}> Payment Successfull</Heading>

          <Text>
            Reference No.{referenceNum}
          </Text>

        </VStack>
      </Box>
      <Modal size="sm" show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h3>{errormsg ? "unable to process your request due to" + { errormsg } + "error. for more information please contact. " : "Pending"} </h3>
          <h5>Thank You !</h5>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
    

  )
}

export default PaymentSuccess;
