import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useFacturasComprasStore = defineStore('facturasCompras', () => {
    let token = ref(useLoginStore().user.token);

    let getFacturasCompras = async () => {
        try {
            let res = await axios.get("/facturas-compras",
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

    let getFacturaCompra = async (id) => {
        try {
            let res = await axios.get("/facturas-compras/" + id,
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

    let postFacturaCompra = async (facturaCompra) => {
        try {
            let res = await axios.post("/facturas-compras", facturaCompra,
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

    let putFacturaCompra = async (id, facturaCompra) => {
        try {
            let res = await axios.put("/facturas-compras/" + id, facturaCompra,
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
        getFacturasCompras, getFacturaCompra, postFacturaCompra, putFacturaCompra
    }
});