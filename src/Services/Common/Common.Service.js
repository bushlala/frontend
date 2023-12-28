//import { apiConfig } from "../Configs/AxiosUtils";
import { apiConfig } from "../Configs/AxiosUtils";
export const CommonService = {
    getAllCountry: async function (request, cancel = false) {
        return await apiConfig.request({
            url: `country/get-all-country?sortName`,
            method: "GET",
            // retrieving the signal value by using the property name
            //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
        })
        // returning the product returned by the API
        //return response.data
    },

    getAllState: async function (countryId, cancel = false) {
        return await apiConfig.request({
            url: `state/get-all-state?countryId=isequal:${countryId}`,
            method: "GET",
            // retrieving the signal value by using the property name
            //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
        })
        // returning the product returned by the API
        //return response.data
    },

    getAllCity: async function (stateId, cancel = false) {
        return await apiConfig.request({
            url: `city/get-all-city?stateId=isequal:${stateId}`,
            method: "GET",
            // retrieving the signal value by using the property name
            //signal: cancel ? apiConfig[this.get.name].handleRequestCancellation().signal : undefined,
        })
        // returning the product returned by the API
        //return response.data
    },
}