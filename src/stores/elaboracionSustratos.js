import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useElaboracionSustratosStore = defineStore('elaboracionSustratos', () => {
    let token = ref(useLoginStore().user.token);

    let getElaboracionSustratos = async () => {
        try {
            let res = await axios.get("/elaboracion-sustratos",
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let getElaboracionSustrato = async (id) => {
        try {
            let res = await axios.get("/elaboracion-sustratos/" + id,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let postElaboracionSustrato = async (elaboracionSustrato) => {
        try {
            let res = await axios.post("/elaboracion-sustratos", elaboracionSustrato,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let putElaboracionSustrato = async (id, elaboracionSustrato) => {
        try {
            let res = await axios.put("/elaboracion-sustratos/" + id, elaboracionSustrato,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getElaboracionSustratos , getElaboracionSustrato, postElaboracionSustrato, putElaboracionSustrato
    }
});