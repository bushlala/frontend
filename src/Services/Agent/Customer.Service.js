import { apiConfig } from "../Configs/AxiosUtils"
const userData = JSON.parse(localStorage.getItem('userData'));
//console.log("userData",userData.data.token)
const jwtToken = userData.data.token;
export const CustomerService = {
    
    getAll: async function (request, cancel = false) {
       

      // var requestParam = {
      //     params: request
      // };
      const response = await apiConfig.request({
        url: `customer/get-all-customer?id=isequal:${userData.data.id}&pagination=true`,
        method: "GET",
        params:request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      return response.data
    },

    create: async function (request) {
        const response =  await apiConfig.request({
          url: `customer`,
          method: "POST",
          data: request,
          headers: { 
            Authorization: `Bearer ${jwtToken}`
          }
          //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
        })
        console.log("'response",response);
        return response

    },

    get: async function (id) {
      const response =  await apiConfig.request({
        url: `customer/${id}`,
        method: "GET",
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },

    update: async function (request,id) {
      const response =  await apiConfig.request({
        url: `customer/${id}`,
        method: "PUT",
        data: request,
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },

    delete: async function (id) {
      const response =  await apiConfig.request({
        url: `customer/${id}`,
        method: "Delete",
        headers: { 
            Authorization: `Bearer ${jwtToken}`
        }
        //data: userData,
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },
}