import { apiConfig } from "../Configs/AxiosUtils"
const userData = JSON.parse(localStorage.getItem('userData'));
//console.log("userData",userData.data.token)
  const jwtToken = userData?.data?.token || " ";
export const FlightSearchService = {
    
    // Search: async function (request, cancel = false) {
    //   // var requestParam = {
    //   //     params: request
    //   // };
    //   return await apiConfig.request({
    //     url: `flight/oneWay`,
    //     method: "POST",
    //     data: request,
    //     headers: { 
    //         Authorization: `Bearer ${jwtToken}`
    //     }
    //     // retrieving the signal value by using the property name
    //     //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
    //   })
    //   // returning the product returned by the API
    //   //return response
    // },
    
    Search: async function (request, cancel = false) {
      // var requestParam = {
      //     params: request
      // };
      return await apiConfig.request({
        url: `flight/OneWaySearch`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      //return response
    },
  
    RoundTrip: async function (request, cancel = false) {
      // var requestParam = {
      //     params: request
      // };
      return await apiConfig.request({
        url: `flight/roundTripSearch`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      //return response
    },

    SearchRule: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `flightRules/serchRules`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },

    BookingReview: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/review`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },
    ReviewReturn: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/reviewReturn`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },
    

    BookingSeatMap: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/seatMap`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },

    BookingSeatMap: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/seatMap`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },

    BookingAddPassenger: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/addPassenger`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },
    HoldBooking: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/holdBooking`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },
    BookingConfirm: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/confirmBooking`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },

    BookingCheckValidationOfBookingId: async function (request, cancel = false) {
      return await apiConfig.request({
        url: `booking/checkValidationOfBookingId`,
        method: "POST",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
      })
    },

    
    BookTicket: async function (request, cancel = false) {
      return await apiConfig.request({
      url: `user/bookTicket`,
      method: "POST",
      data: request,
      headers: { 
          Authorization: `Bearer ${jwtToken}`
      }
    })
  },
  AirPort: async function (request, cancel = false) {
    return await apiConfig.request({
    url: `airport`,
    method: "POST",
    data: request,
    headers: { 
        Authorization: `Bearer ${jwtToken}`
    }
  })
},
getTicketDetails: async function (request, cancel = false) {
  return await apiConfig.request({
  url: `booking/getTicketDetails`,
  method: "POST",
  data: request,
  headers: { 
      Authorization: `Bearer ${jwtToken}`
  }
})
},
UpdateTransactions: async function (request, cancel = false) {
  return await apiConfig.request({
  url: `payment/updateTransactions`,
  method: "POST",
  data: request,
  headers: { 
      Authorization: `Bearer ${jwtToken}`
  }
})
},
ChangeBookingStatus: async function (request, cancel = false) {
  return await apiConfig.request({
  url: `booking/changeBookingStatus`,
  method: "POST",
  data: request,
  headers: { 
      Authorization: `Bearer ${jwtToken}`
  }
})
},
ConfirmholdBooking: async function (request, cancel = false) {
  return await apiConfig.request({
  url: `booking/ConfirmholdBooking`,
  method: "POST",
  data: request,
  headers: { 
      Authorization: `Bearer ${jwtToken}`
  }
})
},   
checkoutapiurl: async function (request, cancel = false) {
  return await apiConfig.request({
  url: `payment/checkout`,
  method: "POST",
  data: request,
  headers: { 
      Authorization: `Bearer ${jwtToken}`
  }
})
},  
}