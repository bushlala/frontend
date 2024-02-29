import { apiConfig } from "./Configs/AxiosUtils"
export const AuthAPI = {
    login: async function (request) {
      const response = await apiConfig.request({
        url: `user/agent-login`,
        method: "POST",
        data: request,
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      return response.data
    },

    agentRegister: async function (request) {
      const response = await apiConfig.request({
        url: `user/agent-register`,
        method: "POST",
        data: request,
        // retrieving the signal value by using the property name
        //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
      })
      // returning the product returned by the API
      return response.data
    },
    logout : async function ()  {
      localStorage.removeItem("userData");
      localStorage.removeItem("bookingStatus")
      // return axios.post(API_URL + "signout").then((response) => {
      //   return response.data;
      // });
    }
    
}