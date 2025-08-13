import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useNominasPagosStore = defineStore('nominasPagos', () => {
    let token = ref(useLoginStore().user.token);

    let getNominasPagos = async () => {
        try {
            let res = await axios.get("/nominas-pagos",
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let getNominaPago = async (id) => {
        try {
            let res = await axios.get("/nominas-pagos/" + id,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let postNominaPago = async (nominaPago) => {
        try {
            let res = await axios.post("/nominas-pagos", nominaPago,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let putNominaPago = async (id, nominaPago) => {
        try {
            let res = await axios.put("/nominas-pagos/" + id, nominaPago,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getNominasPagos, getNominaPago, postNominaPago, putNominaPago
    }
});