import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useControlPlagasStore = defineStore("controlPlagas", () => {
    let token = ref(useLoginStore().user.token);

    let getControlPlagas = async () => {
        try {
            let res = await axios.get("/control-plagas", 
                {
                headers: {
                    "token": token.value,
                },
            }
        );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    let getControlPlaga = async (id) => {
        try {
            let res = await axios.get("/control-plagas/" + id,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let postControlPlaga = async (controlPlaga) => {
        try {
            let res = await axios.post("/control-plagas", controlPlaga,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let putControlPlaga = async (id, controlPlaga) => {
        try {
            let res = await axios.put("/control-plagas/" + id, controlPlaga,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getControlPlagas , getControlPlaga, postControlPlaga, putControlPlaga
    }
});