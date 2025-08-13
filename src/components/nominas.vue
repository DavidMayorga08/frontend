<template>
  <div class="app">
    <div class="q-pa-md">
      <q-table
        title="Tickets"
        :rows="rowsTickets"
        :columns="columnsTickets"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-btn color="primary" @click="crearTicket()">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1e3)"
                fill="#ffffff"
                d="m0 0h45l3 2 16 6 15 8 10 8 9 8 10 13 6 10 6 15 4 16 1 9v826h828l17 3 15 5 16 9 10 8 8 7 12 16 8 16 5 14 2 1v46l-2 2-6 18-6 11-9 13-14 14-15 10-16 7-15 4-19 2h-819v822l-2 17-4 14-5 12-9 15-11 12-10 9-13 8-15 7-16 5h-41l-1-2-15-5-16-8-13-10-11-11-10-14-8-17-4-13-2-13v-828h-821l-18-2-15-4-17-8-14-10-12-12-10-14-8-16-6-18v-40h2l1-8 5-14 8-14 9-12h2l2-4 10-9 14-9 15-7 17-4 7-1h763l65-1 1-829 4-19 5-13 8-14 7-9 11-12 14-10 16-8 15-5z"
              />
            </svg>
          </q-btn>
           <q-btn
              class="q-mx-md"
              color="green"
              @click="exportToExcelTikets()"
            >
              <svg
                version="1.1"
                viewBox="0 0 1024 1024"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M960 128H64C28.7 128 0 156.7 0 192v640c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM576 608H448l-64-96-64 96H192l96-144-96-144h128l64 96 64-96h128L480 464l96 144z"
                />
              </svg>
            </q-btn>
          
        </template>
        <template v-slot:body-cell-Acciones="props">
          <q-td :props="props">
            <q-btn color="secondary" @click="editarTicket(props.row)">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1736)"
                  fill="#ffffff"
                  d="m0 0h75l4 2 30 7 23 8 20 9 19 10 12 8 19 14 12 11 8 7v2h2l7 8 9 10 14 19 12 20 8 15 10 25 7 23 5 25 2 17 1 17v15l-3 31-5 25-7 23-6 15-12 25-11 18-8 11-11 14-12 13-1238 1238-11 7-14 6-57 18-258 80-65 20-13 3h-18l-11-3-16-8-12-11-7-10-6-13-2-8v-21l6-25 11-44 17-66 14-55 19-75 15-58 14-56 9-33 8-16 11-12 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 8-7 1168-1168 14-11 18-13 21-12 21-10 30-10zm28 128-17 2-17 4-18 7-15 9-13 10-7 7-8 7-36 36v2l-4 2v2l-2 1 2 5 181 181h2l2 4h4l7-8 48-48 10-13 9-16 6-14 5-17 2-15v-27l-4-22-4-12-7-16-9-15-11-13-11-11-15-11-12-7-20-8-17-4-17-2zm-138 90m-92 92-8 7-1069 1069-6 22-15 58-11 44-19 74-18 71v3l9-2 64-20 177-55 9-4 1073-1073 2-1v-2h2l-2-5h-2l-2-4h-2l-2-4-176-176z"
                />
                <path
                  transform="translate(77,1919)"
                  fill="#ffffff"
                  d="m0 0h1322l15 2 11 4 11 7 10 9 9 13 5 12 2 10v15l-3 13-4 10-7 10-7 8-10 7-12 6-8 3h-1349v-2l-10-3-11-6-12-11-9-13-5-13-2-10v-12l4-17 8-15 11-12 10-7 15-6z"
                />
              </svg>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="tablaPagos">
      <q-table
        title="Pagos"
        :rows="rowsPagos"
        :columns="columnsPagos"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-btn color="primary" @click="crearPago()">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1e3)"
                fill="#ffffff"
                d="m0 0h45l3 2 16 6 15 8 10 8 9 8 10 13 6 10 6 15 4 16 1 9v826h828l17 3 15 5 16 9 10 8 8 7 12 16 8 16 5 14 2 1v46l-2 2-6 18-6 11-9 13-14 14-15 10-16 7-15 4-19 2h-819v822l-2 17-4 14-5 12-9 15-11 12-10 9-13 8-15 7-16 5h-41l-1-2-15-5-16-8-13-10-11-11-10-14-8-17-4-13-2-13v-828h-821l-18-2-15-4-17-8-14-10-12-12-10-14-8-16-6-18v-40h2l1-8 5-14 8-14 9-12h2l2-4 10-9 14-9 15-7 17-4 7-1h763l65-1 1-829 4-19 5-13 8-14 7-9 11-12 14-10 16-8 15-5z"
              />
            </svg>
          </q-btn>
           <q-btn class="q-mx-md" color="green" @click="exportToExcel()">
              <svg
                version="1.1"
                viewBox="0 0 1024 1024"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M960 128H64C28.7 128 0 156.7 0 192v640c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM576 608H448l-64-96-64 96H192l96-144-96-144h128l64 96 64-96h128L480 464l96 144z"
                />
              </svg>
            </q-btn>
        </template>
        <template v-slot:body-cell-Acciones="props">
          <q-td :props="props">
            <q-btn color="secondary" @click="editarPago(props.row)">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1736)"
                  fill="#ffffff"
                  d="m0 0h75l4 2 30 7 23 8 20 9 19 10 12 8 19 14 12 11 8 7v2h2l7 8 9 10 14 19 12 20 8 15 10 25 7 23 5 25 2 17 1 17v15l-3 31-5 25-7 23-6 15-12 25-11 18-8 11-11 14-12 13-1238 1238-11 7-14 6-57 18-258 80-65 20-13 3h-18l-11-3-16-8-12-11-7-10-6-13-2-8v-21l6-25 11-44 17-66 14-55 19-75 15-58 14-56 9-33 8-16 11-12 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 8-7 1168-1168 14-11 18-13 21-12 21-10 30-10zm28 128-17 2-17 4-18 7-15 9-13 10-7 7-8 7-36 36v2l-4 2v2l-2 1 2 5 181 181h2l2 4h4l7-8 48-48 10-13 9-16 6-14 5-17 2-15v-27l-4-22-4-12-7-16-9-15-11-13-11-11-15-11-12-7-20-8-17-4-17-2zm-138 90m-92 92-8 7-1069 1069-6 22-15 58-11 44-19 74-18 71v3l9-2 64-20 177-55 9-4 1073-1073 2-1v-2h2l-2-5h-2l-2-4h-2l-2-4-176-176z"
                />
                <path
                  transform="translate(77,1919)"
                  fill="#ffffff"
                  d="m0 0h1322l15 2 11 4 11 7 10 9 9 13 5 12 2 10v15l-3 13-4 10-7 10-7 8-10 7-12 6-8 3h-1349v-2l-10-3-11-6-12-11-9-13-5-13-2-10v-12l4-17 8-15 11-12 10-7 15-6z"
                />
              </svg>
            </q-btn>
           
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="tablaTrabajadores">
      <q-table
        title="Registro de trabajos"
        :rows="rowsRegistroTrabajos"
        :columns="columnsRegistroTrabajos"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-btn color="primary" @click="crearRegistroTrabajo()">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1e3)"
                fill="#ffffff"
                d="m0 0h45l3 2 16 6 15 8 10 8 9 8 10 13 6 10 6 15 4 16 1 9v826h828l17 3 15 5 16 9 10 8 8 7 12 16 8 16 5 14 2 1v46l-2 2-6 18-6 11-9 13-14 14-15 10-16 7-15 4-19 2h-819v822l-2 17-4 14-5 12-9 15-11 12-10 9-13 8-15 7-16 5h-41l-1-2-15-5-16-8-13-10-11-11-10-14-8-17-4-13-2-13v-828h-821l-18-2-15-4-17-8-14-10-12-12-10-14-8-16-6-18v-40h2l1-8 5-14 8-14 9-12h2l2-4 10-9 14-9 15-7 17-4 7-1h763l65-1 1-829 4-19 5-13 8-14 7-9 11-12 14-10 16-8 15-5z"
              />
            </svg>
          </q-btn>
           <q-btn
              class="q-mx-md"
              color="green"
              @click="exportToExcelTrabajador()"
            >
              <svg
                version="1.1"
                viewBox="0 0 1024 1024"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M960 128H64C28.7 128 0 156.7 0 192v640c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM576 608H448l-64-96-64 96H192l96-144-96-144h128l64 96 64-96h128L480 464l96 144z"
                />
              </svg>
            </q-btn>
        </template>
        <template v-slot:body-cell-Acciones="props">
          <q-td :props="props">
            <q-btn color="secondary" @click="editarRegistroTrabajo(props.row)">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1736)"
                  fill="#ffffff"
                  d="m0 0h75l4 2 30 7 23 8 20 9 19 10 12 8 19 14 12 11 8 7v2h2l7 8 9 10 14 19 12 20 8 15 10 25 7 23 5 25 2 17 1 17v15l-3 31-5 25-7 23-6 15-12 25-11 18-8 11-11 14-12 13-1238 1238-11 7-14 6-57 18-258 80-65 20-13 3h-18l-11-3-16-8-12-11-7-10-6-13-2-8v-21l6-25 11-44 17-66 14-55 19-75 15-58 14-56 9-33 8-16 11-12 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 8-7 1168-1168 14-11 18-13 21-12 21-10 30-10zm28 128-17 2-17 4-18 7-15 9-13 10-7 7-8 7-36 36v2l-4 2v2l-2 1 2 5 181 181h2l2 4h4l7-8 48-48 10-13 9-16 6-14 5-17 2-15v-27l-4-22-4-12-7-16-9-15-11-13-11-11-15-11-12-7-20-8-17-4-17-2zm-138 90m-92 92-8 7-1069 1069-6 22-15 58-11 44-19 74-18 71v3l9-2 64-20 177-55 9-4 1073-1073 2-1v-2h2l-2-5h-2l-2-4h-2l-2-4-176-176z"
                />
                <path
                  transform="translate(77,1919)"
                  fill="#ffffff"
                  d="m0 0h1322l15 2 11 4 11 7 10 9 9 13 5 12 2 10v15l-3 13-4 10-7 10-7 8-10 7-12 6-8 3h-1349v-2l-10-3-11-6-12-11-9-13-5-13-2-10v-12l4-17 8-15 11-12 10-7 15-6z"
                />
              </svg>
            </q-btn>
           
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="tablaTiposLabor">
      <q-table
        title="Tipos de labor"
        :rows="rowsTiposLabor"
        :columns="columnsTiposLabor"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-btn color="primary" @click="crearTipoLabor()">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1e3)"
                fill="#ffffff"
                d="m0 0h45l3 2 16 6 15 8 10 8 9 8 10 13 6 10 6 15 4 16 1 9v826h828l17 3 15 5 16 9 10 8 8 7 12 16 8 16 5 14 2 1v46l-2 2-6 18-6 11-9 13-14 14-15 10-16 7-15 4-19 2h-819v822l-2 17-4 14-5 12-9 15-11 12-10 9-13 8-15 7-16 5h-41l-1-2-15-5-16-8-13-10-11-11-10-14-8-17-4-13-2-13v-828h-821l-18-2-15-4-17-8-14-10-12-12-10-14-8-16-6-18v-40h2l1-8 5-14 8-14 9-12h2l2-4 10-9 14-9 15-7 17-4 7-1h763l65-1 1-829 4-19 5-13 8-14 7-9 11-12 14-10 16-8 15-5z"
              />
            </svg>
          </q-btn>
           <q-btn
              class="q-mx-md"
              color="green"
              @click="exportToExcelLabor()"
            >
              <svg
                version="1.1"
                viewBox="0 0 1024 1024"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M960 128H64C28.7 128 0 156.7 0 192v640c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM576 608H448l-64-96-64 96H192l96-144-96-144h128l64 96 64-96h128L480 464l96 144z"
                />
              </svg>
            </q-btn>
        </template>
        <template v-slot:body-cell-Acciones="props">
          <q-td :props="props">
            <q-btn color="secondary" @click="editarTipoLabor(props.row)">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1736)"
                  fill="#ffffff"
                  d="m0 0h75l4 2 30 7 23 8 20 9 19 10 12 8 19 14 12 11 8 7v2h2l7 8 9 10 14 19 12 20 8 15 10 25 7 23 5 25 2 17 1 17v15l-3 31-5 25-7 23-6 15-12 25-11 18-8 11-11 14-12 13-1238 1238-11 7-14 6-57 18-258 80-65 20-13 3h-18l-11-3-16-8-12-11-7-10-6-13-2-8v-21l6-25 11-44 17-66 14-55 19-75 15-58 14-56 9-33 8-16 11-12 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 8-7 1168-1168 14-11 18-13 21-12 21-10 30-10zm28 128-17 2-17 4-18 7-15 9-13 10-7 7-8 7-36 36v2l-4 2v2l-2 1 2 5 181 181h2l2 4h4l7-8 48-48 10-13 9-16 6-14 5-17 2-15v-27l-4-22-4-12-7-16-9-15-11-13-11-11-15-11-12-7-20-8-17-4-17-2zm-138 90m-92 92-8 7-1069 1069-6 22-15 58-11 44-19 74-18 71v3l9-2 64-20 177-55 9-4 1073-1073 2-1v-2h2l-2-5h-2l-2-4h-2l-2-4-176-176z"
                />
                <path
                  transform="translate(77,1919)"
                  fill="#ffffff"
                  d="m0 0h1322l15 2 11 4 11 7 10 9 9 13 5 12 2 10v15l-3 13-4 10-7 10-7 8-10 7-12 6-8 3h-1349v-2l-10-3-11-6-12-11-9-13-5-13-2-10v-12l4-17 8-15 11-12 10-7 15-6z"
                />
              </svg>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="tablaTrabajadores">
      <q-table
        title="Trabajadores"
        :rows="rowsTrabajadores"
        :columns="columnsTrabajadores"
        row-key="name"
      >
        <template v-slot:top-right>
          <q-btn color="primary" @click="crearTrabajador()">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1e3)"
                fill="#ffffff"
                d="m0 0h45l3 2 16 6 15 8 10 8 9 8 10 13 6 10 6 15 4 16 1 9v826h828l17 3 15 5 16 9 10 8 8 7 12 16 8 16 5 14 2 1v46l-2 2-6 18-6 11-9 13-14 14-15 10-16 7-15 4-19 2h-819v822l-2 17-4 14-5 12-9 15-11 12-10 9-13 8-15 7-16 5h-41l-1-2-15-5-16-8-13-10-11-11-10-14-8-17-4-13-2-13v-828h-821l-18-2-15-4-17-8-14-10-12-12-10-14-8-16-6-18v-40h2l1-8 5-14 8-14 9-12h2l2-4 10-9 14-9 15-7 17-4 7-1h763l65-1 1-829 4-19 5-13 8-14 7-9 11-12 14-10 16-8 15-5z"
              />
            </svg>
          </q-btn>
           <q-btn
              class="q-mx-md"
              color="green"
              @click="exportToExcelTrabajadores()"
            >
              <svg
                version="1.1"
                viewBox="0 0 1024 1024"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M960 128H64C28.7 128 0 156.7 0 192v640c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM576 608H448l-64-96-64 96H192l96-144-96-144h128l64 96 64-96h128L480 464l96 144z"
                />
              </svg>
            </q-btn>
        </template>
        <template v-slot:body-cell-Acciones="props">
          <q-td :props="props">
            <q-btn color="secondary" @click="editarTrabajador(props.row)">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1736)"
                  fill="#ffffff"
                  d="m0 0h75l4 2 30 7 23 8 20 9 19 10 12 8 19 14 12 11 8 7v2h2l7 8 9 10 14 19 12 20 8 15 10 25 7 23 5 25 2 17 1 17v15l-3 31-5 25-7 23-6 15-12 25-11 18-8 11-11 14-12 13-1238 1238-11 7-14 6-57 18-258 80-65 20-13 3h-18l-11-3-16-8-12-11-7-10-6-13-2-8v-21l6-25 11-44 17-66 14-55 19-75 15-58 14-56 9-33 8-16 11-12 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 8-7 1168-1168 14-11 18-13 21-12 21-10 30-10zm28 128-17 2-17 4-18 7-15 9-13 10-7 7-8 7-36 36v2l-4 2v2l-2 1 2 5 181 181h2l2 4h4l7-8 48-48 10-13 9-16 6-14 5-17 2-15v-27l-4-22-4-12-7-16-9-15-11-13-11-11-15-11-12-7-20-8-17-4-17-2zm-138 90m-92 92-8 7-1069 1069-6 22-15 58-11 44-19 74-18 71v3l9-2 64-20 177-55 9-4 1073-1073 2-1v-2h2l-2-5h-2l-2-4h-2l-2-4-176-176z"
                />
                <path
                  transform="translate(77,1919)"
                  fill="#ffffff"
                  d="m0 0h1322l15 2 11 4 11 7 10 9 9 13 5 12 2 10v15l-3 13-4 10-7 10-7 8-10 7-12 6-8 3h-1349v-2l-10-3-11-6-12-11-9-13-5-13-2-10v-12l4-17 8-15 11-12 10-7 15-6z"
                />
              </svg>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="btn_mostrar_tablas">
      <q-btn
        color="primary"
        @click="mostrarTablas()"
        v-if="!tablaPagos && !tablaRegistroTrabajos && !tablaTiposLabor && !tablaTrabajadores"
      >
        Mostrar mas
      </q-btn>
      <q-btn
        color="primary"
        @click="ocultarTablas()"
        v-if="tablaPagos || tablaRegistroTrabajos || tablaTiposLabor || tablaTrabajadores"
      >
        Ocultar
      </q-btn>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useNominasPagosStore } from "../stores/nominasPagos.js";
import { useNominasRegistroTrabajosStore } from "../stores/nominasRegistroTrabajos.js";
import { useNominasTicketStore } from "../stores/nominasTicket.js";
import { useNominasTiposLaborStore } from "../stores/nominasTiposLabor.js";
import { useNominasTrabajadoresStore } from "../stores/nominasTrabajadores.js";
import { useParcelasStore } from "../stores/parcelas.js";
import * as XLSX from "xlsx";
let useNominasPagos = useNominasPagosStore();
let useNominasRegistroTrabajos = useNominasRegistroTrabajosStore();
let useNominasTicket = useNominasTicketStore();
let useNominasTiposLabor = useNominasTiposLaborStore();
let useNominasTrabajadores = useNominasTrabajadoresStore();
let useParcelas = useParcelasStore();

let formatCurrency = (value) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};

let rowsPagos = ref([]);
let rowsRegistroTrabajos = ref([]);
let rowsTickets = ref([]);
let rowsTiposLabor = ref([]);
let rowsTrabajadores = ref([]);
let parcelas = ref([]);

let columnsPagos = [
  {
    name: "Id_trabajador",
    label: "Trabajador",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let trabajador = rowsTrabajadores.value.find(
        (trabajador) => trabajador._id === row.Id_trabajador
      );
      return `${trabajador.Nombre} ${trabajador.Apellido}`;
    },
  },
  {
    name: "Fecha_pago",
    label: "Fecha de Pago",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => row.Fecha_pago.split("T")[0],
  },
  {
    name: "Monto_base",
    label: "Monto Base",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Monto_base),
  },
  {
    name: "Bonificaciones",
    label: "Bonificaciones",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Bonificaciones),
  },
  {
    name: "Motivo_bonificaciones",
    label: "Motivo Bonificaciones",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Motivo_bonificaciones",
  },
  {
    name: "Descuentos",
    label: "Descuentos",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Descuentos),
  },
  {
    name: "Motivo_descuentos",
    label: "Motivo Descuentos",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Motivo_descuentos",
  },
  {
    name: "Impuestos",
    label: "Impuestos",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Impuestos),
  },
  {
    name: "Motivo_impuestos",
    label: "Motivo Impuestos",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Motivo_impuestos",
  },
  {
    name: "Monto_total",
    label: "Monto Total",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Monto_total),
  },
  // {
  //   name: "Historial_modificacion",
  //   label: "Historial de Modificación",
  //   align: "center",
  //   field: "Historial_modificacion",
  // },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let columnsRegistroTrabajos = [
  {
    name: "Id_trabajador",
    label: "Trabajador",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let trabajador = rowsTrabajadores.value.find(
        (trabajador) => trabajador._id === row.Id_trabajador
      );
      return `${trabajador.Nombre} ${trabajador.Apellido}`;
    },
  },
  {
    name: "Fecha",
    label: "Fecha",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => row.Fecha.split("T")[0],
  },
  {
    name: "Hora_inicio",
    label: "Hora de Inicio",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Hora_inicio",
  },
  {
    name: "Hora_fin",
    label: "Hora de Fin",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Hora_fin",
  },
  {
    name: "Tiempo_total",
    label: "Tiempo Total",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Tiempo_total",
  },
  {
    name: "Id_parcela",
    label: "Parcela",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let parcela = parcelas.value.find(
        (parcela) => parcela._id === row.Id_parcela
      );
      return parcela.Numero;
    },
  },
  {
    name: "Id_tipoLabor",
    label: "Tipo de Labor",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let tipoLabor = rowsTiposLabor.value.find(
        (tipoLabor) => tipoLabor._id === row.Id_tipoLabor
      );
      return tipoLabor.Nombre;
    },
  },
  {
    name: "Cantidad_recogida",
    label: "Cantidad Recogida",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Cantidad_recogida",
  },
  // {
  //   name: "Historial_modificacion",
  //   label: "Historial de Modificación",
  //   align: "center",
  //   field: "Historial_modificacion",
  // },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let columnsTickets = [
  {
    name: "Id_pago",
    label: "Pago",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => {
      let pago = rowsPagos.value.find((pago) => pago._id === row.Id_pago);
      return pago.Monto_total;
    },
  },
  {
    name: "Detalle",
    label: "Detalle",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Detalle",
  },
  {
    name: "Fecha_emision",
    label: "Fecha de Emisión",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => row.Fecha_emision.split("T")[0],
  },
  // {
  //   name: "Historial_modificacion",
  //   label: "Historial de Modificación",
  //   align: "center",
  //   field: "Historial_modificacion",
  // },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let columnsTiposLabor = [
  {
    name: "Nombre",
    label: "Nombre",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Nombre",
  },
  {
    name: "Categoria",
    label: "Categoría",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Categoria",
  },
  {
    name: "Tarifa_base",
    label: "Tarifa Base",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Tarifa_base),
  },
  {
    name: "Tarifa_producto",
    label: "Tarifa Producto",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: (row) => formatCurrency(row.Tarifa_producto),
  },
  {
    name: "Unidad_medida",
    label: "Unidad de Medida",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Unidad_medida",
  },
  // {
  //   name: "Historial_modificacion",
  //   label: "Historial de Modificación",
  //   align: "center",
  //   field: "Historial_modificacion",
  // },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let columnsTrabajadores = [
  {
    name: "Nombre",
    label: "Nombre",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Nombre",
  },
  {
    name: "Apellido",
    label: "Apellido",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Apellido",
  },
  {
    name: "Tipo_identificacion",
    label: "Tipo de Identificación",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Tipo_identificacion",
  },
  {
    name: "Numero_identificacion",
    label: "Número de Identificación",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Numero_identificacion",
  },
  {
    name: "Telefono",
    label: "Teléfono",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Telefono",
  },
  {
    name: "Direccion",
    label: "Dirección",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Direccion",
  },
  {
    name: "Metodo_pago",
    label: "Método de Pago",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Metodo_pago",
  },
  {
    name: "Informacion_bancaria",
    label: "Información Bancaria",
    align: "center",
    headerStyle: "font-weight: bold;",
    field: "Informacion_bancaria",
  },
  // {
  //   name: "Historial_modificacion",
  //   label: "Historial de Modificación",
  //   align: "center",
  //   field: "Historial_modificacion",
  // },
  {
    name: "Acciones",
    label: "",
    align: "center",
    field: "Acciones",
  },
];

let getNominas = async () => {
  let Trabajadores =
    await useNominasTrabajadores.getNominasTrabajadores();
  let TiposLabor = await useNominasTiposLabor.getNominasTiposLabor();
  parcelas.value = await useParcelas.getParcelas();
  let RegistroTrabajos =
    await useNominasRegistroTrabajos.getNominasRegistroTrabajos();
  let Pagos = await useNominasPagos.getNominasPagos();
  let Tickets = await useNominasTicket.getNominasTicket();
  rowsTrabajadores.value = Trabajadores.filter((trabajador) => trabajador.Id_finca === finca.value);
  rowsTiposLabor.value = TiposLabor.filter((tipoLabor) => tipoLabor.Id_finca === finca.value);
  rowsRegistroTrabajos.value = RegistroTrabajos.filter((registroTrabajos) => registroTrabajos.Id_finca === finca.value);
  rowsPagos.value = Pagos.filter((pago) => pago.Id_finca === finca.value);
  rowsTickets.value = Tickets.filter((ticket) => ticket.Id_finca === finca.value);
};
let exportData = ref([]);
let exportDataTrabajador = ref([]);
let exportDataTikets = ref([]);
let exportExcelLabor= ref([]);



const loadNominasPagos = async () => {
  exportData.value = await useNominasPagos.getNominasPagos();
  exportDataTrabajador.value =
    await useNominasRegistroTrabajos.getNominasRegistroTrabajos();
     exportDataTikets.value =
    await useNominasTicket.getNominasTicket();
      exportExcelLabor.value =
    useNominasTiposLabor.getNominasTiposLabor();
};

const exportToExcel = () => {
  if (exportData.value.length === 0) {
    console.error("No hay datos para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(exportData.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Nómina de Pagos");

  XLSX.writeFile(workbook, "nomina_pagos_completo.xlsx");
};
const exportToExcelTrabajador = () => {
  if (exportDataTrabajador.value.length === 0) {
    console.error("No hay datos para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(exportDataTrabajador.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Nómina de Trabajadores");

  XLSX.writeFile(workbook, "nomina_trabajadores_completo.xlsx");
};
const exportToExcelTikets = () => {
  // if (exportDataTikets.value.length === 0) {
  //   console.error("No hay datos para exportar.");
  //   return;
  // }

  const worksheet = XLSX.utils.json_to_sheet(exportDataTikets.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Nómina de Tikets");

  XLSX.writeFile(workbook, "nomina_Tikets_completo.xlsx");
};

const exportToExcelLabor = () => {
  if (rowsTiposLabor.value.length === 0) {
    console.error("No hay datos para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(rowsTiposLabor.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Nómina de Labor");

  XLSX.writeFile(workbook, "nomina_labor_completo.xlsx");
};
const exportToExcelTrabajadores = () => {
  if (rowsTrabajadores.value.length === 0) {
    console.error("No hay datos para exportar.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(rowsTrabajadores.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Nómina de Trabajadores ");

  XLSX.writeFile(workbook, "nomina_Trabajadores_completo.xlsx");
};
// const exportToExcel = () => {

//   if (exportDataTrabajador.value.length === 0) {
//     console.error("No hay datos para exportar.");
//     return;
//   }

//   const worksheet = XLSX.utils.json_to_sheet(exportDataTrabajador.value);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Nómina de Trabajadores");

//   XLSX.writeFile(workbook, "nomina_trabajadores_completo.xlsx");
// };

let crearPago = () => {
  router.push("/formNominasPagos");
};

let editarPago = (pago) => {
  let id = pago._id;
  router.push({ path: "/formNominasPagos", query: { id } });
};

let crearRegistroTrabajo = () => {
  router.push("/formNominasRegistroTrabajos");
};

let editarRegistroTrabajo = (registroTrabajos) => {
  let id = registroTrabajos._id;
  router.push({ path: "/formNominasRegistroTrabajos", query: { id } });
};

let crearTicket = () => {
  router.push("/formNominasTicket");
};

let editarTicket = (ticket) => {
  let id = ticket._id;
  router.push({ path: "/formNominasTicket", query: { id } });
};

let crearTipoLabor = () => {
  router.push("/formNominasTiposLabor");
};

let editarTipoLabor = (tipoLabor) => {
  let id = tipoLabor._id;
  router.push({ path: "/formNominasTiposLabor", query: { id } });
};

let crearTrabajador = () => {
  router.push("/formNominasTrabajadores");
};

let editarTrabajador = (trabajador) => {
  let id = trabajador._id;
  router.push({ path: "/formNominasTrabajadores", query: { id } });
};

let tablaPagos = ref(false);
let tablaRegistroTrabajos = ref(false);
let tablaTiposLabor = ref(false);
let tablaTrabajadores = ref(false);

let mostrarTablas = () => {
  tablaPagos.value = true;
  tablaRegistroTrabajos.value = true;
  tablaTiposLabor.value = true;
  tablaTrabajadores.value = true;
};

let ocultarTablas = () => {
  tablaPagos.value = false;
  tablaRegistroTrabajos.value = false;
  tablaTiposLabor.value = false;
  tablaTrabajadores.value = false;
};

let finca = ref("");

onMounted(() => {
  finca.value = localStorage.getItem("Finca");
  console.log(finca.value);
  getNominas();
  loadNominasPagos();
});
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.btn_mostrar_tablas{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
