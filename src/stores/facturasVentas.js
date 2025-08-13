import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useFacturasVentasStore = defineStore('facturasVentas', () => {
    let token = ref(useLoginStore().user.token);

    let getFacturasVentas = async () => {
        try {
            let res = await axios.get("/facturas-ventas",
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
        console.log(token);
        
    }

    let getFacturaVenta = async (id) => {
        try {
            let res = await axios.get("/facturas-ventas/" + id,
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

    let postVenta = async (venta) => {
        try {
            let res = await axios.post("/facturas-ventas", venta,
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
        getFacturasVentas, getFacturaVenta,postVenta
    }
});