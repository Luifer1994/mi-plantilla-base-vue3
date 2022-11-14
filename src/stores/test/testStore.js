import { defineStore } from 'pinia'
import { axiosHttp } from "../../utils/axios";

export const useTestStore = defineStore('test', {
    
    // state
    state: () => ({
        count: 0,
        doubleCount: 0,
        test: [],
    }),
    //actions
    actions: {
        increment() {
            this.count++
        },

        async getDocumentTypes(){
            const response = await axiosHttp.get("document-types-list");
            this.test = response.data.data;
            console.log(response);
        }
    },
})