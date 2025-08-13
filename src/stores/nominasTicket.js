import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useNominasTicketStore = defineStore('nominasTicket', () => {
    let token = ref(useLoginStore().user.token);

    let getNominasTicket = async () => {
        try {
            let res = await axios.get("/nominas-ticket",
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

    let getNominaTicket = async (id) => {
        try {
            let res = await axios.get("/nominas-ticket/" + id,
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

    let postNominaTicket = async (nominaTicket) => {
        try {
            let res = await axios.post("/nominas-ticket", nominaTicket,
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

    let putNominaTicket = async (id, nominaTicket) => {
        try {
            let res = await axios.put("/nominas-ticket/" + id, nominaTicket,
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
        getNominasTicket, getNominaTicket, postNominaTicket, putNominaTicket
    }
});