import { apiConfig } from "../Configs/AxiosUtils"
const userData = JSON.parse(localStorage.getItem('userData'));
//console.log("userData",userData.data.token)
  const jwtToken = userData?.data?.token || " ";
export const FlightSearchService = {
    
    Search: async function (request, cancel = false) {
      // var requestParam = {
      //     params: request
      // };
      return await apiConfig.request({
        url: `flight/oneWay`,
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

    
}