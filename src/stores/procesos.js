import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useProcesosStore = defineStore('procesos', () => {
    let token = ref(useLoginStore().user.token);

    let getProcesos = async () => {
        try {
            let res = await axios.get("/procesos",
                {
                    headers: {
                        "token": token.value
                    }
                }
            );
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let getProceso = async (id) => {
        try {
            let res = await axios.get("/procesos/" + id,
                {
                    headers: {
                        "token": token.value
                    }
                }
            );
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let postProceso = async (proceso) => {
        try {
            let res = await axios.post("/procesos", proceso,
                {
                    headers: {
                        "token": token.value
                    }
                }
            );
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let putProceso = async (id, proceso) => {
        try {
            let res = await axios.put("/procesos/" + id, proceso,
                {
                    headers: {
                        "token": token.value
                    }
                }
            );
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getProcesos, getProceso, postProceso, putProceso
    }
});