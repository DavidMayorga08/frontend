import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useSiembrasStore = defineStore("siembras", () => {
    let token = ref(useLoginStore().user.token);

    let getSiembras = async () => {
        try {
            let res = await axios.get("/siembras",
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let getSiembra = async (id) => {
        try {
            let res = await axios.get("/siembras/" + id,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let postSiembra = async (siembra) => {
        try {
            let res = await axios.post("/siembras", siembra,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let putSiembra = async (id, siembra) => {
        try {
            let res = await axios.put("/siembras/" + id, siembra,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getSiembras, getSiembra, postSiembra, putSiembra
    }
});