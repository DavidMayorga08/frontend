import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useGastosStore = defineStore('gastos', () => {
    let token = ref(useLoginStore().user.token);

    let getGastos = async () => {
        try {
            let res = await axios.get("/gastos",
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

    let getGasto = async (id) => {
        try {
            let res = await axios.get("/gastos/" + id,
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

    let postGasto = async (gasto) => {
        try {
            let res = await axios.post("/gastos", gasto,
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

    let putGasto = async (id, gasto) => {
        try {
            let res = await axios.put("/gastos/" + id, gasto,
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
        getGastos , getGasto, postGasto, putGasto
    }
    });