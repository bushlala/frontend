import { apiConfig } from "./Configs/AxiosUtils"
export const CountryAPI = {

    getAll: async function (id, cancel = false) {
      const response = await apiConfig.request({
        url: `country`,
        method: "GET",
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      return response.data
    },

    create: async function (userData) {
        const response =  await apiConfig.request({
          url: `country`,
          method: "POST",
          data: userData,
          //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
        })
        //console.log("'response",response);
        return response

    },

    get: async function (id) {
      const response =  await apiConfig.request({
        url: `country/${id}`,
        method: "GET",
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      //console.log("update response",response);
      return response
    },

    update: async function (userData,id) {
      const response =  await apiConfig.request({
        url: `country/${id}`,
        method: "PUT",
        data: userData,
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      //console.log("update response",response);
      return response
    },
}