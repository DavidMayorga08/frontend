import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useNominasTrabajadoresStore = defineStore('nominasTrabajadores', () => {
    let token = ref(useLoginStore().user.token);

    let getNominasTrabajadores = async () => {
        try {
            let res = await axios.get("/nominas-trabajadores",
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

    let getNominaTrabajador = async (id) => {
        try {
            let res = await axios.get("/nominas-trabajadores/" + id,
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

    let postNominaTrabajador = async (nominaTrabajador) => {
        try {
            let res = await axios.post("/nominas-trabajadores", nominaTrabajador,
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

    let putNominaTrabajador = async (id, nominaTrabajador) => {
        try {
            let res = await axios.put("/nominas-trabajadores/" + id, nominaTrabajador,
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
        getNominasTrabajadores, getNominaTrabajador, postNominaTrabajador, putNominaTrabajador
    }
});