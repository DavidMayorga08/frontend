import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useNominasTiposLaborStore = defineStore('nominasTiposLabor', () => {
    let token = ref(useLoginStore().user.token);

    let getNominasTiposLabor = async () => {
        try {
            let res = await axios.get("/nominas-tipos-labor",
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

    let getNominaTipoLabor = async (id) => {
        try {
            let res = await axios.get(`/nominas-tipos-labor/${id}`,
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

    let postNominaTipoLabor = async (nominaTipoLabor) => {
        try {
            let res = await axios.post("/nominas-tipos-labor", nominaTipoLabor,
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

    let putNominaTipoLabor = async (id, nominaTipoLabor) => {
        try {
            let res = await axios.put("/nominas-tipos-labor/" + id, nominaTipoLabor,
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
        getNominasTiposLabor , getNominaTipoLabor, postNominaTipoLabor, putNominaTipoLabor
    }
});