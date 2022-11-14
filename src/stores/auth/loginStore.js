import { defineStore } from 'pinia'
import { axiosHttp } from "../../utils/axios";


export const useLoginStore = defineStore('test', {
    // state
    state: () => ({
        /*  emain: "",
         password: "", */
        ifLoged: false,
        errors: {},
        token: "",
        userLoged: JSON.parse(localStorage.getItem('userLoged')),
    }),
    //actions
    actions: {
        async login(data) {
            try {
                const response = await axiosHttp.post("login", data);
                this.token = response.data.data.token;
                this.userLoged = response.data.data.user;
                localStorage.setItem("token", this.token);
                localStorage.setItem("userLoged", JSON.stringify(this.userLoged));
                this.ifLoged = true;
            } catch (error) {
                this.errors = error.response.data;
            }

        },

        async validateSesion() {
            try {
                const res = await axiosHttp.get("users-validate-session");
                if (res.data) {
                    this.ifLoged = true;
                    return true;
                }
            } catch (error) {
                if (error) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userLoged");
                    this.ifLoged = false;
                    window.location.reload();
                    return false;
                }
            }
        }
    },
})