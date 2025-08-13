import { createRouter, createWebHashHistory } from "vue-router";

import home from "../components/home.vue";
import login from "../components/login.vue";
import menu from "../components/menu.vue";
import climas from "../components/climas.vue";
import usuarios from "../components/usuarios.vue";
import parcelas from "../components/parcelas.vue";
import controlPlagas from "../components/controlPlagas.vue";
import siembras from "../components/siembras.vue";
import semillas from "../components/semillas.vue";
import riegos from "../components/riegos.vue";
import producciones from "../components/producciones.vue";
import procesos from "../components/procesos.vue";
import analisisSuelos from "../components/analisisSuelos.vue";
import compradores from "../components/compradores.vue";
import facturasCompras from "../components/facturasCompras.vue";
import facturasVentas from "../components/facturasVentas.vue";
import maquinariaHerramientas from "../components/maquinariaHerramientas.vue";
import insumos from "../components/insumos.vue";
import gastos from "../components/gastos.vue";
import fertilizantes from "../components/fertilizantes.vue";
import elaboracionSustratos from "../components/elaboracionSustratos.vue";
import cultivos from "../components/cultivos.vue";
import nominas from "../components/nominas.vue";
import preparacionSuelos from "../components/preparacionSuelos.vue";
import proveedores from "../components/proveedores.vue";
import fincas from "../components/fincas.vue";

import formUsuarios from "../components/formularios/usuarios.vue";
import formParcelas from "../components/formularios/parcelas.vue";
import formMaquinariaHerramientas from "../components/formularios/maquinariaHerramientas.vue";
import formCultivos from "../components/formularios/cultivos.vue";
import formProducciones from "../components/formularios/producciones.vue";
import formAnalisisSuelos from "../components/formularios/analisisSuelos.vue";
import formControlPlagas from "../components/formularios/controlPlagas.vue";
import formInsumos from "../components/formularios/insumos.vue";
import formCompradores from "../components/formularios/compradores.vue";
import formGastos from "../components/formularios/gastos.vue";
import formProcesos from "../components/formularios/procesos.vue";
import formNominasPagos from "../components/formularios/nominas/nominasPagos.vue";
import formNominasRegistroTrabajos from "../components/formularios/nominas/nominasRegistroTrabajos.vue";
import formNominasTicket from "../components/formularios/nominas/nominasTickets.vue";
import formNominasTiposLabor from "../components/formularios/nominas/nominasTiposLabor.vue";
import formNominasTrabajadores from "../components/formularios/nominas/nominasTrabajadores.vue";
import formSiembras from "../components/formularios/siembras.vue";
import formSemillas from "../components/formularios/semillas.vue";
import formPreparacionSuelos from "../components/formularios/preparacionSuelos.vue";
import formElaboracionSustratos from "../components/formularios/elaboracionSustratos.vue";
import formFertilizantes from "../components/formularios/fertilizantes.vue";
import formRiegos from "../components/formularios/riegos.vue";
import formProveedores from "../components/formularios/proveedores.vue";
import formFacturasCompras from "../components/formularios/facturasCompras.vue";
import formFacturasVentas from "../components/formularios/facturasVentas.vue";
import Recuperar from "../components/recuperar_contrasena.vue";
import Cambiar from "../components/cambiar_contrasena.vue";
import Mensaje from "../components/mensaje_exitoso.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/recuperar/contrasena",
    name: "recuperar_contrasena",
    component: Recuperar,
  },
  {
    path: "/cambiar/contrasena",
    name: "cambiar_contrasena",
    component: Cambiar,
  },
  {
    path: "/mensaje/exitoso",
    name: "mensaje",
    component: Mensaje,
  },
  {
    path: "/fincas",
    name: "fincas",
    component: fincas,
  },
  {
    path: "/menu",
    name: "menu",
    component: menu,
    children: [
      {
        path: "/clima",
        name: "clima",
        component: climas,
      },
      {
        path: "/usuarios",
        name: "usuarios",
        component: usuarios,
      },
      {
        path: "/parcelas",
        name: "parcela",
        component: parcelas,
      },
      {
        path: "/controlPlagas",
        name: "controlPlagas",
        component: controlPlagas,
      },
      {
        path: "/siembras",
        name: "siembras",
        component: siembras,
      },
      {
        path: "/semillas",
        name: "semillas",
        component: semillas,
      },
      {
        path: "/riegos",
        name: "riegos",
        component: riegos,
      },
      {
        path: "/producciones",
        name: "producciones",
        component: producciones,
      },
      {
        path: "/procesos",
        name: "procesos",
        component: procesos,
      },
      {
        path: "/analisisSuelos",
        name: "analisisSuelos",
        component: analisisSuelos,
      },
      {
        path: "/compradores",
        name: "compradores",
        component: compradores,
      },
      {
        path: "/facturasCompras",
        name: "facturasCompras",
        component: facturasCompras,
      },
      {
        path: "/facturasVentas",
        name: "facturasVentas",
        component: facturasVentas,
      },
      {
        path: "/maquinariaHerramientas",
        name: "maquinariaHerramientas",
        component: maquinariaHerramientas,
      },
      {
        path: "/insumos",
        name: "insumos",
        component: insumos,
      },
      {
        path: "/gastos",
        name: "gastos",
        component: gastos,
      },
      {
        path: "/fertilizantes",
        name: "fertilizantes",
        component: fertilizantes,
      },
      {
        path: "/elaboracion-sustratos",
        name: "elaboracionSustratos",
        component: elaboracionSustratos,
      },
      {
        path: "/cultivos",
        name: "cultivos",
        component: cultivos,
      },
      {
        path: "/nominas",
        name: "nominas",
        component: nominas,
      },
      {
        path: "/preparacionSuelos",
        name: "preparacionSuelos",
        component: preparacionSuelos,
      },
      {
        path: "/proveedores",
        name: "proveedores",
        component: proveedores,
      },
    ],
  },
  {
    path: "/formUsuarios",
    name: "formUsuarios",
    component: formUsuarios,
  },
  {
    path: "/formParcelas",
    name: "formParcelas",
    component: formParcelas,
  },
  {
    path: "/formMaquinariaHerramientas",
    name: "formMaquinariaHerramientas",
    component: formMaquinariaHerramientas,
  },
  {
    path: "/formCultivos",
    name: "formCultivos",
    component: formCultivos,
  },
  {
    path: "/formProducciones",
    name: "formProducciones",
    component: formProducciones,
  },
  {
    path: "/formAnalisisSuelos",
    name: "formAnalisisSuelos",
    component: formAnalisisSuelos,
  },
  {
    path: "/formControlPlagas",
    name: "formControlPlagas",
    component: formControlPlagas,
  },
  {
    path: "/formInsumos",
    name: "formInsumos",
    component: formInsumos,
  },
  {
    path: "/formCompradores",
    name: "formCompradores",
    component: formCompradores,
  },
  {
    path: "/formGastos",
    name: "formGastos",
    component: formGastos,
  },
  {
    path: "/formProcesos",
    name: "formProcesos",
    component: formProcesos,
  },
  {
    path: "/formNominasPagos",
    name: "formNominasPagos",
    component: formNominasPagos,
  },
  {
    path: "/formNominasRegistroTrabajos",
    name: "formNominasRegistroTrabajos",
    component: formNominasRegistroTrabajos,
  },
  {
    path: "/formNominasTicket",
    name: "formNominasTicket",
    component: formNominasTicket,
  },
  {
    path: "/formNominasTiposLabor",
    name: "formNominasTiposLabor",
    component: formNominasTiposLabor,
  },
  {
    path: "/formNominasTrabajadores",
    name: "formNominasTrabajadores",
    component: formNominasTrabajadores,
  },
  {
    path: "/formSiembras",
    name: "formSiembras",
    component: formSiembras,
  },
  {
    path: "/formSemillas",
    name: "formSemillas",
    component: formSemillas,
  },
  {
    path: "/formPreparacionSuelos",
    name: "formPreparacionSuelos",
    component: formPreparacionSuelos,
  },
  {
    path: "/formElaboracionSustratos",
    name: "formElaboracionSustratos",
    component: formElaboracionSustratos,
  },
  {
    path: "/formFertilizantes",
    name: "formFertilizantes",
    component: formFertilizantes,
  },
  {
    path: "/formRiegos",
    name: "formRiegos",
    component: formRiegos,
  },
  {
    path: "/formProveedores",
    name: "formProveedores",
    component: formProveedores,
  },
  {
    path: "/formFacturasCompras",
    name: "formFacturasCompras",
    component: formFacturasCompras,
  },
  {
    path: "/formFacturasVentas",
    name: "formFacturasVentas",
    component: formFacturasVentas,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
