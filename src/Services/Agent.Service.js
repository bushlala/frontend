import { apiConfig } from "./Configs/AxiosUtils"
export const AgentAPI = {

    getAll: async function (request, cancel = false) {
      var requestParam = {
          params: request
      };
      const response = await apiConfig.request({
        url: `user`,
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
          url: `user`,
          method: "POST",
          data: userData,
          //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
        })
        console.log("'response",response);
        return response

    },

    get: async function (id) {
      const response =  await apiConfig.request({
        url: `user/${id}`,
        method: "GET",
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },

    update: async function (userData,id) {
      const response =  await apiConfig.request({
        url: `user/${id}`,
        method: "PUT",
        data: userData,
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },

    delete: async function (id) {
      const response =  await apiConfig.request({
        url: `user/${id}`,
        method: "Delete",
        //data: userData,
        //signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
      })
      console.log("update response",response);
      return response
    },
}