import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useNominasRegistroTrabajosStore = defineStore('nominasRegistroTrabajos', () => {
    let token = ref(useLoginStore().user.token);

    let getNominasRegistroTrabajos = async () => {
        try {
            let res = await axios.get("/nominas-registro-trabajos",
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

    let getNominaRegistroTrabajo = async (id) => {
        try {
            let res = await axios.get("/nominas-registro-trabajos/" + id,
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

    let postNominaRegistroTrabajo = async (nominaRegistroTrabajo) => {
        try {
            let res = await axios.post("/nominas-registro-trabajos", nominaRegistroTrabajo,
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

    let putNominaRegistroTrabajo = async (id, nominaRegistroTrabajo) => {
        try {
            let res = await axios.put("/nominas-registro-trabajos/" + id, nominaRegistroTrabajo,
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
        getNominasRegistroTrabajos, getNominaRegistroTrabajo, postNominaRegistroTrabajo, putNominaRegistroTrabajo
    }
});