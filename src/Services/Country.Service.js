import { apiConfig } from "./Configs/AxiosUtils";
const routeName = "country";
export const CountryAPI = {
    getAll: async function (request, cancel = false) {
      const response = await apiConfig.request({
        url: `${routeName}`,
        method: "GET",
        params:request
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      return response.data
    },

    create: async function (userData) {
        const response =  await apiConfig.request({
          url: `${routeName}`,
          method: "POST",
          data: userData,
          //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
        })
        //console.log("'response",response);
        return response

    },

    get: async function (id) {
      const response =  await apiConfig.request({
        url: `${routeName}/${id}`,
        method: "GET",
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      //console.log("update response",response);
      return response
    },

    update: async function (userData,id) {
      const response =  await apiConfig.request({
        url: `${routeName}/${id}`,
        method: "PUT",
        data: userData,
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      //console.log("update response",response);
      return response
    },

    delete: async function (id) {
      const response =  await apiConfig.request({
        url: `${routeName}/${id}`,
        method: "Delete",
        //data: userData,
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },
}