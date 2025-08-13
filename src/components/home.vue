<template>
  <div class="app">
    <div class="header">
      <div class="cont_titulo">
        <p class="titulo">AgroForma</p>
      </div>
      <div class="cont_login">
        <button @click="Login()" class="iniciar_sesion">Iniciar Sesion</button>
      </div>
    </div>
    <div class="cont_descripcion">
      <div class="cont_frase">
        <p class="text_frase">
          Gestiona y optimiza cada aspecto de tu producción agrícola de forma
          simple y eficaz
        </p>
      </div>
      <div class="cont_objetivo">
        <p class="text_objetivo">
          Nuestro sistema de gestión agrícola está diseñado para facilitar el
          control de todas las áreas productivas de una finca, desde el manejo
          de cultivos y control de plagas hasta la administración de personal,
          insumos y facturación. Con una interfaz intuitiva y opciones de
          personalización, ofrecemos una solución completa para mejorar la
          eficiencia y productividad en el campo, cumpliendo con las normativas
          legales y simplificando la operación agrícola.
        </p>
      </div>
    </div>
    <div class="cont_img">
      <svg
        version="1.1"
        viewBox="0 0 908 888"
        width="260"
        height="255"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transform="translate(9,396)"
          d="m0 0h407l-1 7-5 9-3 4h-2l-2 7-9 17-3 4h-2l-2 7-9 17-3 4h-2l-2 7-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-4 5h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-4 5h-2l-2 7-4 8-5 9-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-5 9-3 4h-2l-2 7-9 17-3 4h-2l-2 7-4 8-5 9-3 4h-2l-2 7-5 9-3 4h-2l-3 9-6 10-3 1-5-6-7-3-37-37 1-6 7-11 5-8 9-17 5-7 7-14 6-10 3-4 7-14 6-10 5-8 5-9 6-9 8-16 7-10 7-14 6-10 3-4 7-14 6-10 3-4 7-14 6-10 3-4 7-14 5-8 4-5 4-10v-22l-5-5-6-3-1-1-258-1-1-1-1-58-2-2 1-4z"
          fill="#020202"
        />
        <path
          transform="translate(453,468)"
          d="m0 0 4 2 9 17 5 6 7 14 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 9 19 7 9 4 7 4 5 9 19 7 9 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 6 12 6 8 1 5-2 3-23 11-17 9-8 4-5 5h-5l-9-11-6-12-6-8-6-12-6-8-6-12-6-8-9-19-7-9-6-12-6-8-6-12-6-8-9-19-7-9-6-12-6-8-6-12-6-8-6-12-6-7-3-7-7-14-5-6-11-6h-8l-10 5-3 4-2 5-4 8-4 5h-2l-2 7-4 8-4 5h-2l-2 7-4 8-4 5h-2l-2 7-5 9-3 4h-2l-2 7-5 9-3 4h-2l-2 7-4 8-5 9-5 6-2 5-5 9-5 6-2 5-5 9-5 6-2 5-5 9-3 4h-2l-2 7-5 9-3 4h-2l-2 7-9 17-3 4h-2l-2 7-4 9-6-1-56-28 1-4 3-6 6-7 3-7 6-10 5-8 9-17 5-7 6-12 6-8 7-14 6-10 3-4 6-12 6-8 7-14 6-10 3-4 6-12 6-7 3-7 6-10 3-4 7-14 6-10 3-4 6-12 6-8 7-14 6-10 3-4 6-12 6-7 3-7 6-10 3-4 7-14 6-10 3-4 6-12 6-7 4-8 3-7z"
          fill="#040404"
        />
        <path
          transform="translate(496,396)"
          d="m0 0h402l2 1v2l3 1 1 2v61l-5 1-262 1-7 7-1 2v20l8 16 5 9 6 9 6 11 6 9 8 15 4 7 5 8 9 17 6 9 8 15 4 7 5 8 5 9 6 9 8 15 4 7 5 8 9 17 6 9 6 11 6 9 8 15 4 7 3 3 5 10v7l-26 26-6 2-15 15-2 3h-2l-4-9-5-6-8-16-6-9-10-19-6-9-8-15-6-8-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-9-19-7-9-8-16-6-9-10-19-6-9-10-19z"
          fill="#020202"
        />
        <path
          transform="translate(441,8)"
          d="m0 0h28l5 3h7l8 3 16 8 8 5 7 6v2l4 2v2l4 2v2l4 2 8 10 7 14 2 9 2 2 1 6v38l-3 6-1 8-3 4-2 9-4 5h-2l-2 7-21 21-7 3-6 5-9 2-8 4-6 2h-45l-2-4h-9l-4-3-7-3-10-6-3-3-5-2-12-12-3-6-6-8-8-16-1-11-3-4v-36l3-4 2-9 5-10 5-9 2-5 12-13 5-5h2l1-3 13-8 16-8 13-2z"
          fill="#020202"
        />
        <path
          transform="translate(437,236)"
          d="m0 0h70l12 13 3 2v2h2l7 8 5 6 3 5 1 3 4 2v2h2v2h2v2h2v2h2l7 8 3 2v2h2v2l4 2 7 8 3 6 2 1v-79l1-1h54l1 1v122l-1 1h-73l-21-21-3-6-3-3v-2l-4-2v-2h-2l-7-8-9-9-3-6-11-12-8-8-2-1-1 79-2 1h-49l-1-1v-122z"
          fill="#050505"
        />
        <path
          transform="translate(101,232)"
          d="m0 0h85l6 3 9 3 14 7 5 6 4 9v7l-1 1h-54l-2-7-9-4h-38l-3 4-1 10 13 1 7 3 16 1 6 3 18 1 6 3 11 1 6 3 8 2 8 6 7 4 5 10 1 4v16l-7 8-10 10-8 4-10 2-2 2-22 2-1 2-16 1h-45l-7-1-2-2-14-2-2-2-9-2-11-6-6-8-4-8v-12l1-1h54l1 1v10l9 3 1 1 16 1 4 3h14l1-3 9-1 5-4v-6l-4-4-12-3-3-1-17-1-8-2-13-2-9-1-5-2-15-5-10-4-10-8-5-6-2-10-1-4 2-5 2-6 9-10 7-4 13-7 13-2z"
          fill="#060606"
        />
        <path
          transform="translate(729,236)"
          d="m0 0h66l4 5 3 6 5 6 3 6 6 9 7 10 6 9 7 11 7 10 7 11 6 9 7 10 4 6 5 7 3 5 1 3-7 1h-56l-4-9-5-5v-6h-92v6l-7 8-1 5-2 1h-57l-1-2 5-5 6-7 3-6 6-9 7-9 3-6 8-9 6-10 7-10 8-12 7-8 6-10 7-10 4-5zm29 31-9 17-5 6-4 7-7 11-1 4h52l1-2-6-13-6-11-4-5-6-12-2-2z"
          fill="#040404"
        />
        <path
          transform="translate(253,236)"
          d="m0 0h150l1 1v26l-1 1h-95l1 15 2 4 84 1 1 1v22l-2 1h-86v24h94l5 4 1 4v19l-2 1h-153l-1-1v-122z"
        />
        <path
          transform="translate(496,396)"
          d="m0 0h402l2 1v2l3 1 1 2v61l-4 1-1-64h-399l-1 5-3-4z"
          fill="#6B6B6B"
        />
        <path
          transform="translate(9,396)"
          d="m0 0h407l-1 7-3 3 1-6h-404l-1 3h-3l1-4z"
          fill="#6B6B6B"
        />
        <path
          transform="translate(308,332)"
          d="m0 0h94l5 4 1 4v19l-2 1h-153v-1h151v-23h-93l-3-1z"
          fill="#6F6F6F"
        />
        <path
          transform="translate(644,461)"
          d="m0 0h94l28 1 133 1v1h-259l4-1z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(401,236)"
          d="m0 0 3 1v26l-1 1h-95l-1-3 2-1h91z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(713,336)"
          d="m0 0h88l2 1v3h-90z"
          fill="#707070"
        />
        <path
          transform="translate(100,356)"
          d="m0 0h67l1 3-16 1h-45l-7-1z"
          fill="#7A7A7A"
        />
        <path
          transform="translate(901,400)"
          d="m0 0h2l1 2v61l-3 1z"
          fill="#BDBDBD"
        />
        <path
          transform="translate(392,284)"
          d="m0 0 4 1v22l-2 1h-86v-1h85z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(441,8)"
          d="m0 0h28l2 1v2l-31 1v-3z"
          fill="#828282"
        />
        <path
          transform="translate(650,352)"
          d="m0 0h2l-2 4-2 3 52-1 3-1-1 3h-57l-1-2 5-5z"
          fill="#838383"
        />
        <path
          transform="translate(127,253)"
          d="m0 0h24v3h-31l3-2 4 1z"
          fill="#797979"
        />
        <path
          transform="translate(401,236)"
          d="m0 0 3 1v26h-3z"
          fill="#D0D0D0"
        />
        <path
          transform="translate(508,238)"
          d="m0 0 12 12 2 1v2h2l7 8 5 6h-3l-1-3h-2v-2l-4-2-12-12-7-8z"
          fill="#919191"
        />
        <path
          transform="translate(432,196)"
          d="m0 0 6 1v2l35-1 11-1-1 2-7 1h-43l-2-3z"
          fill="#787878"
        />
        <path
          transform="translate(139,783)"
          d="m0 0 4 2 21 21v2l-4-2-21-21z"
          fill="#ACACAC"
        />
        <path
          transform="translate(551,287)"
          d="m0 0 5 2 4 5 2 1v2h2v2l4 2 7 8v3l-12-11-9-9z"
          fill="#888"
        />
        <path
          transform="translate(392,284)"
          d="m0 0 4 1v22l-4 1z"
          fill="#6B6B6B"
        />
        <path
          transform="translate(281,477)"
          d="m0 0 2 1v15l-4 10-3 2 3-9 1-18z"
          fill="#6A6A6A"
        />
        <path
          transform="translate(533,161)"
          d="m0 0 3 1-22 22h-2l2-4 17-17h2z"
          fill="#919191"
        />
        <path
          transform="translate(169,264)"
          d="m0 0h3v3h51v1h-54z"
          fill="#7A7A7A"
        />
        <path
          transform="translate(125,765)"
          d="m0 0h2v6l4 2 9 9-2 2-14-14z"
          fill="#545454"
        />
        <path
          transform="translate(187,658)"
          d="m0 0 1 3-12 20-4 5 1-5 5-9 6-9z"
          fill="#898989"
        />
        <path
          transform="translate(512,304)"
          d="m0 0 5 2 3 5 8 7 3 5-2 1-7-8-9-9z"
          fill="#989898"
        />
        <path
          transform="translate(540,336)"
          d="m0 0 4 2 13 13 2 4-4-2-14-14z"
          fill="#8D8D8D"
        />
        <path
          transform="translate(101,232)"
          d="m0 0h16l1 2-11 1-7 1v-3z"
          fill="#aaa"
        />
        <path
          transform="translate(380,163)"
          d="m0 0 7 6 9 9v2l-4-2-11-11z"
          fill="#AFAFAF"
        />
        <path
          transform="translate(163,316)"
          d="m0 0 4 1 4 4-1 6-4 5h-2l2-4 1-1v-6z"
          fill="#7D7D7D"
        />
        <path
          transform="translate(406,338)"
          d="m0 0 2 2v19h-3z"
          fill="#AEAEAE"
        />
        <path
          transform="translate(488,276)"
          d="m0 0 3 1v2l4 2 8 9h-3l-9-9-3-2z"
          fill="#888"
        />
        <path
          transform="translate(410,20)"
          d="m0 0 3 1-7 4h-2v2l-8 6-3-1 3-1 1-3z"
          fill="#858585"
        />
        <path
          transform="translate(167,693)"
          d="m0 0 1 3-6 9-5 9-1-3 6-11z"
          fill="#878787"
        />
        <path
          transform="translate(361,104)"
          d="m0 0h1l1 19-3-1v-12z"
          fill="#7D7D7D"
        />
        <path
          transform="translate(120,308)"
          d="m0 0h7l11 2 1 2h-8l-8-2z"
          fill="#737373"
        />
        <path
          transform="translate(242,563)"
          d="m0 0v3l-9 16-1-3 6-11z"
          fill="#8E8E8E"
        />
        <path
          transform="translate(258,535)"
          d="m0 0v3l-9 16-1-3 6-11z"
          fill="#8A8A8A"
        />
        <path
          transform="translate(780,298)"
          d="m0 0 4 4 4 7v3l-4-2-4-9z"
          fill="#777"
        />
        <path
          transform="translate(56,335)"
          d="m0 0 5 4 5 5 3 4-6-2-7-9z"
          fill="#757575"
        />
        <path
          transform="translate(627,478)"
          d="m0 0h1v15l-2-1-2-7v-4h2z"
          fill="#6D6D6D"
        />
        <path
          transform="translate(768,783)"
          d="m0 0 2 1-12 12h-2l2-4 8-7z"
          fill="#C8C8C8"
        />
        <path
          transform="translate(361,84)"
          d="m0 0h2l-1 15h-1l-1-5v-8z"
          fill="#A8A8A8"
        />
      </svg>
    </div>
    <div class="funciones_claves">
      <div class="cont_titulo_fun">
        <p class="titulo_fun">Funciones Claves</p>
      </div>
      <div class="cont_funciones">
        <div class="cont_produccion">
          <div class="cont_logo">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="80"
              height="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1058,115)"
                d="m0 0h10l8 3 9 6 9 9v2h2l9 11 10 12 16 24 9 16 10 21 6 15 7 24 5 22 3 22 1 13v32l-2 22-4 23-6 24-9 25-12 26-12 20-8 12-11 14-11 13-4 4-1 35v82l14-11 18-14 19-13 9-7 11-28 8-16 10-18 14-21 11-14 12-14 22-22 11-9 16-12 15-10 21-12 23-11 27-10 27-7 22-4 30-3h26l32 3 27 5 15 4 12 6 6 7 4 10v9l-6 23-9 24-7 16-12 23-9 14-8 12-13 16-7 9h-2l-2 4-17 17-11 9-8 7-17 12-14 9-18 10-23 11-25 9-26 7-28 5-17 2-18 1-31-1-23-3-30-6-7-2-7 4-13 10-10 8-14 11-13 12-16 14-1 39h48l10 2 8 5 6 7 6 15 23 71 8 24 8 3 24 8 22 9 20 9 24 12 20-10 19-10 36-18 19-10 10-4 10-1 11 4 11 9 41 41v2l4 2v2l4 2 8 8v2l4 2v2l4 2v2l4 2v2l4 2 24 24v2h2v2h2l8 11 2 6v10l-5 13-8 15-23 46-10 19-6 12 1 5 15 30 11 27 13 37 106 35 9 6 7 9 2 7v43l16-5 11-2h30l18 4 15 6 11 6 11 8 12 11 10 12 6 10 6 15 4 16 1 8v21l-3 19-7 19-10 18-11 14-14 14-14 11-13 10-15 12-9 7-14 11-18 14-10 8-13 10-16 13-17 13-10 8-13 10-16 13-17 13-10 8-13 10-16 13-17 13-10 8-13 10-16 13-12 9-11 9-16 12-16 13-13 10-15 12-18 11-22 12-23 12-16 8-29 14-33 14-39 15-34 11-29 8-34 8-33 6-37 5-38 3-23 1h-25l-46-2-43-4-45-6-48-8-94-18-71-14-59-10-27-4-15-2-2 6-6 10-5 7h-2l-2 4-10 8-12 7-15 5-11 2h-138l-19-5-13-7-9-7-5-5-9-10-8-15-4-13-1-5-1-16v-396l1-18 4-16 7-14 8-11 10-10 14-9 13-5 16-3h132l14 2 12 4v-80l3-9 8-9 10-5 33-11 41-13 29-10 11-32 9-22 9-20 10-20 1-5-18-36-10-19-22-44-2-5v-11l4-9 7-9 105-105 10-6 5-2h8l14 5 15 8 50 25 19 10 8 4 6-1 19-10 25-11 26-10 23-7 4-9 16-50 12-37 5-13 4-6 8-7 10-3h51l-1-38-7-8-11-10-11-9-13-11-17-13-9-6-26 5-25 3-26 1-23-1-30-4-26-6-20-6-25-10-21-10-17-10-12-8-16-12-11-9-13-12-15-15-9-11-12-15-10-15-9-15-10-19-10-24-9-27-2-8v-14l5-10 7-7 13-5 21-5 25-4 23-2h25l25 2 30 5 26 7 27 10 29 14 20 12 17 12 16 13 8 7 13 12 13 14 11 14 11 15 11 18 7 12 11 24 9 24 3 10 10 8 16 12 13 11 1-1-1-116-11-12-13-17-10-14-11-19-8-16-9-21-8-26-6-29-3-27v-35l2-21 4-23 6-23 8-23 11-24 11-20 7-10 10-14 13-16 14-15 11-8zm4 70-8 11-14 22-12 25-9 27-4 17-3 20-1 18v15l2 23 4 22 6 21 10 25 10 19 10 15 9 12 4-1 13-18 11-19 9-19 9-27 5-23 2-15 1-15v-17l-2-23-3-17-5-20-8-22-12-25-10-16-10-13zm-387 263-23 3 6 15 11 23 14 22 10 13 12 14 13 13h2v2l11 9 13 10 19 12 25 13 24 9 21 6 14 3 25 3h39l24-3-3-9-9-20-10-18-10-15-10-13-11-12-18-18-14-11-16-11-15-9-16-8-21-9-23-7-17-4-23-3zm749 0-28 4-20 5-21 7-20 9-17 9-11 7-13 9-16 13-15 14-9 10-12 15-7 10-11 18-8 15-8 19v3l13 2 12 1h37l24-3 27-6 23-8 20-9 17-9 21-14 14-11 12-11 14-14v-2h2l11-14 12-17 9-16 11-23 3-10-23-3zm-306 369-111 1-20 62-12 37-7 12-9 5-21 7-16 5-27 10-22 10-22 12-12 6-6 2h-8l-13-5-29-15-26-13-19-10-14-7-4 2-76 76 2 7 10 19 25 50 9 17 3 8 1 7-4 13-5 10-9 16-11 24-10 26-6 18-6 20-6 11-10 6-36 12-52 17-13 4-1 2v80l13-1 30-4 23-2h63l40 4 6 1h8v-37l2-27 6-36 8-30 7-20 9-21 8-16 9-17 11-17 10-14 14-18 12-13v-2h2l7-8 7-7 8-7 14-12 19-14 17-11 25-14 24-11 24-9 24-7 22-5 28-4 32-2 32 1 20 2 30 5 24 6 30 10 25 11 21 11 13 8 15 10 16 12 13 11 8 7 4 2 1 3 8 7 11 12 13 15 14 19 11 17 12 21 13 27 9 24 8 26 6 27 4 29 1 15v36l-2 24-5 30-6 25-3 11 4-1 16-9 17-10 21-12 24-14 78-45 24-14 14-8 1-2v-49l-28-10-38-12-36-12-8-5-6-8-16-48-8-20-11-24-12-22-5-12v-11l5-13 10-19 10-20 10-19 14-28-1-5-6-5-7-8-63-63-5 1-15 8-54 27-19 10-12 4h-7l-12-5-28-15-27-12-27-10-30-9-9-5-6-7-6-15-16-50-12-36-2-5zm-78 239-32 4-29 7-21 7-21 9-25 13-20 13-17 13-14 12-24 24-11 14-6 8-10 15-9 15-9 17-9 21-9 27-6 25-4 29-1 21v13l1 21 1 9 5 3 24 9 27 12 14 7 280 1 19 2 17 5 16 8 14 9 13 12 9 11 8 13 7 16 5 21 2 27 3 1 19-1 15-4 21-10 22-13 13-8 4-5 10-18 8-17 9-24 7-25 4-21 3-24 1-29-2-30-5-30-6-23-9-25-8-18-12-23-14-21-10-13-11-13-9-10-9-9-8-7-11-9-18-13-19-12-23-12-19-8-27-9-26-6-22-3-10-1zm-726 349-8 3-7 6-3 5-1 5v417l3 7 7 7 8 3h129l8-3 6-5 3-5 1-4 1-411-2-11-4-6-5-5-5-2-6-1zm1377-38-13 4-17 9-24 14-130 75-24 14-28 16-19 11-52 30-24 14-26 15-24 14-19 10-16 6-17 4-16 2h-20l-10-1h-9l-10 13-11 10-17 11-14 6-17 5-16 2h-295l-10-4-8-9-3-7v-13l4-9 5-6 9-5 7-1 291-1 13-3 13-7 10-9 6-8 6-12 3-16-1-14-4-12-6-11-9-10-10-7-13-5-12-2-289-1-10-3-17-9-22-10-24-9-27-8-28-6-20-3-23-2-20-1h-24l-31 2-31 4-29 5-2 1-1 366 1 3 47 7 58 10 160 31 54 9 37 5 43 4 36 2h30l40-2 37-4 35-6 36-8 35-10 38-13 28-11 28-12 30-14 17-9 16-8 24-13 15-10 18-14 10-8 18-14 15-12 17-13 16-13 13-10 15-12 14-11 13-10 14-11 16-13 26-20 14-11 16-13 26-20 15-12 42-33 18-14 15-12 14-11 4-3v-2l4-2 8-10 6-10 4-12 1-6v-15l-3-12-6-10-8-9-13-8-13-4z"
              />
              <path
                transform="translate(1210,1162)"
                d="m0 0h10l10 4 8 7 5 10v14l-5 10-10 10-11 9-28 24-11 9-10 9-11 9-42 36-11 9-10 9-11 9-14 12-11 9-15 13-13 11-10 7-10 3-9-1-10-5-6-5-7-8-17-17-7-8-12-12-7-8-17-17v-2h-2l-7-8-8-8-5-8-2-7v-8l4-10 7-8 7-4 6-2h8l11 4 12 11 5 5v2h2l7 8 17 17 7 8 21 21v2l5-2 11-10 11-9 15-13 13-11 14-12 13-11 14-12 11-9 15-13 13-11 14-12 13-11 15-13 13-11 8-4z"
              />
            </svg>
          </div>
          <div class="cont_titulo_produccion">
            <p class="text_titulo_produccion">Gestion de Produccion</p>
          </div>
          <div class="cont_text_produccion">
            <p class="text_produccion">
              Permite llevar un registro detallado de los cultivos desde la siembra hasta la cosecha, con funcionalidades para cada etapa del proceso agrícola. Incluye la posibilidad de registrar fechas y detalles de siembra y cosecha, monitorear el estado fenológico de los cultivos, y gestionar tareas de riego y fertilización, controlando la cantidad de agua y las dosis de fertilizantes aplicados.
            </p>
          </div>
        </div>
        <div class="cont_control">
          <div class="cont_logo">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="80"
              height="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(1112,271)"
                d="m0 0h28l29 2 28 4 28 6 27 8 26 10 24 11 21 11 24 15 18 13 17 14 10 9 8 7 17 17 7 8 11 13 14 19 12 18 9 15 12 23 8 17 10 26 8 26 6 26 5 33 2 28v31l-2 29-5 32-6 26-9 29-13 32-12 24-8 14-12 19-14 19-8 10-11 13-14 15-9 9h-2v2l-8 7-13 11-13 10-17 12-21 13-23 12-14 7-25 10-28 9-25 6-28 5-29 3h-54l-19-2-11 1-6 1h-360l-12-4-9-7-6-7-5-11-1-3v-15l4-12 6-8 9-8 11-5 10-1 346-1 12-3 15-8 9-8 7-10 4-8 3-12v-20l-3-12-8-15-7-8-10-7-11-5-14-3-304-1-21-2-16-4-18-8-13-8-11-9-13-13-10-14-8-15-7-21-3-21v-13l3-20 5-16 6-14 10-16 9-10 1-2h2l2-4 11-9 14-9 15-7 16-5 14-2 2-16 6-29 8-28 9-24 9-21 13-25 11-18 9-14 1-4-5-2-13-10-13-8-11-5-12-4-19-3h-16l-19 3-17 6-18 11-15 10-26 17-46 30-20 13-27 18-16 10-12 8-17 11-15 10-25 16-15 10-15 9-18 8-20 6-21 4-19 2h-16v46l-1 326h74l14 3 11 7 8 9 5 11 1 4v13l-3 10-7 11-8 7-12 5-4 1-78 1-2 12-5 11-9 10-7 4-8 3-7 1h-246l-11-3-10-7-8-9-5-10v-573l6-11 9-10 14-7 7-1h245l12 3 11 7 6 7 6 12 2 11v14l22-1 16-3 16-6 14-8 15-10 75-49 23-15 118-77 17-11 21-10 15-5 16-4 13-2 12-1h23l19 2 19 4 21 7 25 12 15 10 19 14 5 4 4-1 11-10 14-11 19-14 19-12 18-10 15-8 23-10 25-9 32-9 26-5 33-4zm5 81-27 2-25 4-28 7-21 7-25 11-21 11-16 10-18 13-13 11-8 7-23 23-11 14-9 12-9 13-9 15-10 19-9 21-10 30-5 21-4 24-2 26v28l3 31 5 26 7 25 5 13h179l1-3v-15l3-12 5-9 4-5 11-7 9-3h16l11 4 9 7 7 9 4 11 2 16 1 1h62l1-1 1-9v-17l-1-38-3-1-66-1-13-2-12-4-15-8-13-11-10-13-8-16-4-15-1-7v-71l4-18 5-12 9-14 9-10 9-7 10-6 16-6 9-2 1-1 2-21 4-11 6-8 8-7 9-4 4-1h16l11 4 8 6 7 8 5 12 1 6 1 17 16 4 16 8 9 6 10 9 10 14 7 16 3 12 1 15-2 12-5 10-7 8-14 7-4 1h-16l-11-4-8-6-3-1-7-14-4-17h-64v62l65 1 16 2 15 5 14 8 13 12 9 11 8 16 4 16 1 13v59l-1 15-4 15-8 16-9 12-10 9-15 9-13 5-9 3 2 6 6 14 6 23 2 18v14l-2 17-4 17-5 16 20-4 25-7 15-5 26-11 19-10 24-15 13-10 10-8 10-9 8-7 12-12 7-8 10-12 12-17 12-19 13-25 10-25 8-26 5-21 4-30 1-15v-26l-2-25-5-30-7-26-8-23-9-20-12-23-11-17-10-14-11-13-9-11-15-15-8-7-11-9-19-14-21-13-25-13-25-10-26-8-23-5-20-3-29-2zm-1036 199-1 30v439l155 1 1-1v-469zm652 148-8 5-5 4-7 10-3 10v15l4 11 6 9 8 7 13 5 6 1 1-4-6-25-5-29-2-18z"
              />
              <path
                transform="translate(1766,995)"
                d="m0 0h246l12 3 11 7 9 11 4 8v574l-3 5-7 10-8 7-8 4-9 2h-248l-11-3-10-7-8-9-5-12-1-7v-23l-67 1-21 8-43 17-117 46-237 93-46 18-30 11-28 8-29 6-21 3-19 2h-52l-33-4-26-5-64-16-79-20-113-29-64-16-70-18-16-6-16-8-13-9-11-9-13-13-11-15-8-14-6-13-5-15-4-20-1-20 2-21 4-17 7-20 8-15 11-16 14-15 13-11 17-11 17-8 15-5 21-4h33l23 4 179 41 131 30 23 4 18 2h49l24-3 27-5 2-1-9-10-13-16-9-15-8-17-7-21-3-15-1-9v-23l2-16 5-19 8-20 9-16 13-17 6-7 8-7 17-13 16-9 33-14 128-53 75-31 37-15 40-17 15-6 7-2h256v-34l2-12 5-10 9-10 14-7zm45 81v469h156v-469zm-323 74-38 16-41 17-29 12-116 48-46 19-34 14-16 8-8 6-5 5-7 8-8 15-3 12-1 7v12l4 17 8 16 10 13 10 8 16 8 16 4h16l17-4 44-17 143-55 24-9 9-2h10l9 2 9 5 8 7 6 10 3 10v10l-4 13-6 9-8 7-18 8-21 8-44 17-39 15-91 35-81 31-24 9-27 9-30 7-30 5-21 2-21 1h-13l-32-2-28-4-34-7-293-67-10-2h-20l-12 3-14 7-12 11-7 9-6 13-3 13v18l4 14 6 12 8 10 11 9 12 6 26 7 74 19 44 11 71 18 66 17 64 16 39 10 27 5 25 3h43l30-4 23-5 21-6 30-11 38-15 94-37 102-40 97-38 41-16 48-19 47-18 12-3 77-1 1-1v-333z"
              />
              <path
                transform="translate(538,979)"
                d="m0 0h19l12 5 8 6 7 9 4 11v18l-4 10-4 6-4 5-11 7-10 3h-15l-11-4-8-6-7-8-5-11-1-3v-16l4-11 6-9h2v-2l10-7z"
              />
              <path transform="translate(2047,1599)" d="m0 0" />
            </svg>
          </div>
          <div class="cont_titulo_control">
            <p class="text_titulo_control">Control de Personal y Nómina</p>
          </div>
          <div class="cont_text_control">
            <p class="text_control">
              Optimiza el manejo del personal con herramientas para registrar y calcular la nómina, considerando tipos de trabajo, horas laboradas y producción recolectada. Permite generar tickets de pago basados en horas trabajadas o producción obtenida, y facilita la organización de turnos, el control del tiempo trabajado y el seguimiento de labores específicas en la finca, asegurando una gestión precisa y eficiente del personal.
            </p>
          </div>
        </div>
        <div class="cont_facturacion">
          <div class="cont_logo">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="80"
              height="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(561)"
                d="m0 0h883l4 2 25 5 23 6 22 8 18 8 21 11 20 13 16 12 11 9 4 3v2l4 2 18 18 9 11 10 12 8 13 2 7-1 11-6 12-8 7-11 4h-11l-8-3-6-4-9-10-10-13-12-13-9-9-11-9-19-14-21-12-14-7-21-8-20-6-20-4-18-2-18-1h-11l-25 2-22 4-21 6-21 8-19 9-21 13-16 12-10 9-8 7-10 10-7 8-9 12-9 13-12 21-9 20-7 20-5 19-3 15-2 23-1 99h51l26 3 25 6 20 7 20 9 18 10 16 11 16 13 13 12 7 7 9 11 13 17 9 15 12 23 9 24 7 28 3 22 1 19v908h268l-8-10-10-13-11-18-8-16-7-19-6-25-2-15-1-18-1-1112-2-20-1-8v-13l4-10 7-8 10-5 3-1h12l11 4 5 4 6 9 3 9 3 20 1 13 1 41v797l-1 33h302l9 2 9 6 6 7 4 10v233l-2 18-4 20-5 17-9 21-9 16-9 13-9 12h-2l-2 4-14 14-11 9-18 12-14 8-24 10-23 6-19 3-11 1h-421v212l-1 22-3 21-7 28-9 24-8 16-6 11-7 11-14 19-14 15-13 13-14 11-17 12-22 12-23 10-27 8-27 6h-1007l-1-2-27-6-27-9-25-12-21-13-17-13-13-12-15-15-11-14-10-14-11-19-10-21-10-30-5-25-2-19-1-58v-1080l1-72 3-24 5-22 8-24 8-18 9-17 12-18 10-13 2-3h2l2-4 23-23 13-10 10-7 18-11 27-13 24-8 22-5 24-3h58v-102l3-29 5-26 7-24 8-22 9-20 10-18 7-11 12-17 8-11h2l2-4 3-4h2l2-4 7-8h2v-2h2v-2l8-7 12-11 13-10 17-12 24-14 19-9 26-10 22-6 23-5zm33 60-21 1-23 3-25 6-25 9-21 10-21 13-16 12-14 12-16 16-8 10-12 16-12 20-12 25-7 20-6 23-3 16-1 10-1 23v333h746l1-6 1-348 3-25 5-26 8-27 10-25 8-17 11-19 8-12 13-18 2-4h2l9-11 15-16 8-7 12-10 7-5-1-2zm-358 392-17 2-18 4-18 6-21 10-11 7-11 8-13 11-14 14-12 16-9 15-8 16-6 16-6 24-2 20v1198l2 19 5 21 8 22 11 21 10 14 9 11 7 8h2v2l8 7 17 13 17 10 17 8 18 6 20 4 18 2h966l23-3 22-6 19-8 17-9 16-11 14-12 12-12 10-13 11-17 10-21 6-18 4-18 2-14 1-28v-1154l-1-29-3-20-6-21-5-13-8-16-8-14-11-14-11-12-7-7-14-11-17-11-16-8-18-7-19-5-23-3h-47v54l23 5 16 7 14 9 10 9 8 9 8 13 6 14 4 18v26l-4 17-7 16-8 12-9 10-9 8-13 8-14 6-17 4-10 1h-871l-16-2-16-5-15-8-9-7-10-9-10-13-8-16-5-16-2-17 1-16 4-17 7-16 8-12 11-12 9-8 16-9 14-5 25-4v-54zm48 115-11 4-9 7-6 9-3 9v13l3 9 6 9 8 6 13 5h4v-71zm874 0v70l6-1 11-6 7-8 5-12v-15l-5-12-7-8-8-5zm552 649-1 127v55l2 26 4 17 6 16 9 17 12 16 15 15 14 10 14 8 20 8 19 4 9 1h22l19-3 16-5 16-7 15-9 13-10v-2l4-2 11-12 9-13 6-10 8-20 4-16 2-18v-193z"
              />
              <path
                transform="translate(311,782)"
                d="m0 0h818l17 1 19 3 17 5 19 8 14 8 14 10 12 11 13 13 12 17 8 14 8 18 6 20 3 19 1 27v98l-1 23-4 22-8 24-8 16-9 14-8 11-13 14-8 7-15 11-16 9-10 5-21 7-12 3-24 3h-827l-20-2-22-5-16-6-16-8-13-8-13-10-7-7-4-3v-2h-2l-7-8-10-13-9-15-8-17-6-18-4-21-1-11v-134l3-22 4-16 8-20 9-17 10-14 12-14 9-9 17-13 15-9 17-8 15-5 12-3 14-2zm-1 61-18 2-16 5-16 8-11 8-12 11-9 12-10 19-5 16-2 15v127l2 15 5 16 8 16 8 11 9 10 11 9 15 9 16 6 14 3 13 1h812l18-1 17-4 17-7 14-9 10-9 5-5 8-10 9-16 6-18 2-12v-137l-3-16-6-16-8-14-8-10-5-6-14-11-10-6-13-6-14-4-7-1-39-1z"
              />
              <path
                transform="translate(1041,1282)"
                d="m0 0h31l19 3 24 8 19 10 14 10 11 9 9 9 13 17 9 15 8 19 5 18 3 22v351l-2 18-6 22-7 17-8 14-8 11-11 13-8 8-17 13-18 10-21 8-23 5-8 1h-26l-20-3-20-6-21-10-12-8-14-11-13-13-10-13-8-13-9-19-5-16-3-14-2-21v-336l2-22 4-18 6-17 8-16 9-14 9-11 16-16 18-13 17-9 19-7 19-4zm3 61-17 4-13 6-11 7-12 11-9 11-8 15-4 12-2 10-1 297 1 61 5 19 9 17 8 10 10 10 14 9 11 5 14 4 7 1h21l15-3 16-7 11-7 10-8 8-9 7-11 4-8 5-15 2-15v-345l-3-17-5-13-7-13-9-11-11-10-13-8-15-6-13-3z"
              />
              <path
                transform="translate(370,1282)"
                d="m0 0h31l19 3 24 8 19 10 13 9 11 9 11 11 10 13 8 13 8 16 7 21 4 22v30l-5 25-6 17-8 17-7 10-12 16h-2l-2 4-7 7-17 13-19 11-16 6-17 5-21 3h-22l-21-3-17-5-17-7-14-8-11-8-11-9-9-9-11-14-9-14-9-19-6-20-3-17-1-20 2-20 4-18 7-19 10-19 10-14 9-10 12-12 15-11 16-9 14-6 17-5zm4 61-15 3-12 5-11 6-13 11-9 10-6 9-8 18-3 16v22l4 17 7 16 8 11 9 10 10 8 10 6 16 6 8 2 9 1h15l17-3 17-7 15-10 7-6 9-11 8-14 5-13 3-17v-14l-2-14-5-15-8-15-9-11-11-10-13-8-15-6-13-3z"
              />
              <path
                transform="translate(705,1282)"
                d="m0 0h32l18 3 16 5 17 7 17 10 13 10 18 18 11 15 9 16 8 20 4 16 2 12 1 12v12l-2 17-4 18-6 17-8 16-10 15-5 7h-2l-2 4-13 13-16 12-16 9-17 7-22 6-17 2h-22l-21-3-17-5-16-7-13-7-10-7-10-8-7-6v-2h-2l-7-8-12-16-12-23-7-21-3-16-1-9v-23l3-20 4-15 7-17 9-17 12-16 14-15 14-11 14-9 19-9 19-6zm4 61-14 3-15 6-11 7-13 11-10 13-8 16-4 13-2 12v16l4 19 8 18 9 12 5 6 14 11 16 8 12 4 13 2h16l16-3 13-5 11-6 12-9 8-8 10-15 5-11 4-14 1-5v-25l-4-16-5-12-7-12-9-10-7-7-14-9-13-6-16-4z"
              />
              <path
                transform="translate(709,1614)"
                d="m0 0h25l20 3 20 6 21 10 15 10 13 11 13 13 12 17 8 14 6 15 4 13 4 20 1 13v11l-2 17-4 18-6 17-8 16-9 14-9 11-4 5-8 7-12 10-16 10-17 8-19 6-15 3-8 1h-27l-20-3-19-6-18-8-16-10-11-9-11-10-9-11-11-15-8-16-6-15-5-19-2-16v-23l3-20 4-15 7-17 8-15 12-17 12-13 8-7 15-11 16-9 14-6 17-5zm2 61-15 3-11 4-13 7-10 8-11 11-10 16-6 16-3 16v16l3 16 6 15 7 12 9 11 9 8 11 7 15 7 11 3 8 1h20l15-3 15-6 14-9 10-9 8-9 8-14 4-9 4-17v-25l-4-16-5-12-8-13-9-10-9-8-13-8-15-6-15-3z"
              />
              <path
                transform="translate(373,1614)"
                d="m0 0h26l20 3 16 5 17 7 14 8 16 12 13 12 10 12 10 15 8 16 6 16 4 17 2 12v30l-5 25-6 18-10 19-7 10-8 10-9 10-11 10-18 12-16 8-16 6-23 5-8 1h-27l-18-3-9-5-8-9-4-11v-7l3-10 6-9 8-6 10-3 17 1h19l15-3 13-5 14-8 7-6h2v-2l6-5 7-10 5-9 5-12 3-12 1-7v-15l-2-13-4-13-8-16-10-13-9-8-13-8-13-6-12-3-7-1h-20l-15 3-15 6-10 6-11 9-9 10-8 13-6 14-3 16v22l3 15 3 10v12l-4 10-5 6-5 4-13 4h-8l-9-3-8-6-6-8-5-14-4-17-2-19 1-22 3-18 8-24 11-21 10-14 2-3h2l2-4 14-14 18-13 12-7 20-8 19-5z"
              />
              <path
                transform="translate(470,134)"
                d="m0 0h595l10 2 9 6 6 7 4 10v11l-5 12-5 6-8 5-7 2h-602l-9-4-5-3v-2h-2l-6-10-2-6v-10l4-11 7-8 8-5z"
              />
              <path
                transform="translate(442,305)"
                d="m0 0h561l12 6 6 7 4 8 1 3v12l-4 9-4 6-6 5-10 4-11 1h-540l-12-2-10-6-6-8-4-10v-9l3-10 6-8 9-6z"
              />
              <path
                transform="translate(441,485)"
                d="m0 0h563l10 5 8 9 4 10v11l-3 8-6 9-7 5-5 2-6 1h-555l-9-3-10-9-5-9-1-5v-8l3-10 4-6 8-7z"
              />
              <path
                transform="translate(1085,855)"
                d="m0 0h9l10 3 9 7 6 10 3 10 12 5 13 9 7 8 4 11v9l-4 11-9 10-9 4-5 1h-9l-10-4-9-5-8-2h-7l-7 3-3 5 1 5 10 6 43 18 12 8 8 7 9 12 6 12 4 14 1 8v9l-2 14-4 12-7 14-8 10-9 9-14 9-7 2-1 12-5 10-7 7-9 4-4 1h-11l-10-4-8-7-5-9-3-9-15-5-16-9-10-9-4-7-2-5v-12l4-10 6-8 9-5 7-2h8l10 3 16 8 5 1h19l8-4 5-7 2-10-3-6-8-5-28-11-23-12-13-10-7-8-7-12-4-12-1-6v-15l3-14 5-13 7-11 9-10 13-9 6-3 2-11 5-8 5-5 7-5z"
              />
            </svg>
          </div>
          <div class="cont_titulo_facturacion">
            <p class="text_titulo_facturacion">Facturación</p>
          </div>
          <div class="cont_text_facturacion">
            <p class="text_facturacion">
              Permite la facturación convencional para operaciones internas, con
              una numeración independiente. La plataforma se integra con los
              modelos de compradores y producciones, lo que facilita la
              vinculación de datos sobre productos agrícolas en cada
              transacción, como el tipo de cultivo, unidades de medida y calidad
              del producto, asegurando un proceso de facturación preciso y
              adaptado a las necesidades del negocio.
            </p>
          </div>
        </div>
        <div class="cont_inventario">
          <div class="cont_logo">
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="80"
              height="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(838,31)"
                d="m0 0 11 1 27 10 110 44 33 13 36 14 88 35 55 22 31 12 103 41 41 16 27 11 119 47 88 35 14 6 8 6 6 7 4 10v322h43l12 3 8 6 6 7 4 11 1 10 157-1 53 1 16 3 15 6 14 9 10 9 7 7 9 14 5 10 5 17 1 9v1127l-2 14-5 15-8 15-8 10-5 5-11 10-17 9-16 5-13 2h-946l-14-2-15-5-14-8-10-8-10-10-9-13-7-14-4-14-1-7-1-21v-359l-2 1h-253l-12-1-7-3-7 1-3 2-18 1h-266l-15-2-12-5-9-6-9-10-6-11-3-11-1-10v-609l1-7-1-14v-290l2-13 6-10 8-7 9-4 10-1h301l19 1 10 4 9 8 5 10 1 3 1 288 1 1h241v-33l1-27 3-15 7-17 7-11 9-11h2v-2l14-11 15-8 17-5 8-1 20-1h189l3-14 4-8 4-5 11-7 8-2 113-1 8-13 9-13 10-11 5-5 10-9 16-10 14-7 19-6 17-3h24v-86l1-3h-1232v1011l-2 8-6 10-7 6-11 4-116 1-16-1-9-4-9-8-6-12-1-8v-1155l2-12 6-9 5-5 8-5 29-12 38-15 33-13 30-12 68-27 164-65 33-13 30-12 22-9 16-6 63-25 33-13 30-12 28-11 40-16 51-20 45-18 17-6zm1 68-27 11-31 12-40 16-28 11-40 16-46 18-50 20-68 27-28 11-30 12-56 22-30 12-83 33-36 14-93 37-33 13-12 5-1 1102h53l1-1013 4-11 3-4v-2h2v-2l4-2 12-5h1308l10 3 9 7 6 10 2 8v146l12 10 8 7 9 9 11 15 9 16h4v-294l-45-18-38-15-202-80-70-28-56-22-45-18-38-15-237-94zm-506 512-1 1-1 249 249 1 1-1v-249l-1-1h-38l-1 93-2 15-7 11-9 6-6 2-9 1h-106l-10-2-10-6-6-8-3-7-1-7-1-98zm104 0-1 1v63h40l1-63-1-1zm1e3 59-16 4-14 7-12 11-7 8-7 14-6 16-6 9-10 6-10 2-103 1v92l398 1 2-1v-92l-105-1-10-3-8-6-6-10-7-18-6-11-9-10-8-7-15-8-15-4zm275 114-1 7v12l18 1h141l25 1 10 4 7 6 6 11 1 4v1075l-3 9-6 9-7 5-11 3-57 1h-702l-134-1-11-4-8-7-6-12-1-5v-1069l2-9 6-10 9-7 7-3 15-1h167l2-1 1-18h-207l-9 4-6 5-5 9-1 4v1122l4 10 5 5 5 4 8 3h940l11-4 5-4 5-8 2-8v-1119l-3-9-6-8-9-5-5-1zm1 84-2 6-3 11-3 6-4 5-10 6-9 2h-474l-12-5-6-5-6-10-2-9v-6h-144v998l3 1h811l3-1v-998l-2-1zm-1382 58-1 250h250v-250h-39l-1 93-2 15-7 10v2l-4 2-9 4-13 2h-104l-12-3-8-6-5-6-4-8-1-7-1-98zm104 0v64h40v-64zm210 0v250h243l1-43v-198l-1-9h-32l-1 4-1 99-4 10-7 8-6 4-8 2-10 1h-103l-10-2-8-5-5-5-5-8-2-6-1-102zm105 0v64h40v-64zm-419 315-1 250h250v-250h-39l-1 92-2 15-6 10-7 6-7 3-5 1h-117l-10-4-9-8-5-11-1-7-1-97zm104 0v63l40 1 1-63-1-1zm210 0v249l1 1h242l1-45v-204l-1-1h-33v22l-1 81-4 10-6 7-9 5-7 2h-117l-10-4-8-7-5-8-2-7-1-101zm105 0v63l13 1h27v-64z"
              />
              <path
                transform="translate(652,260)"
                d="m0 0h375l9 2 8 4 5 5 4 5 4 10 1 14-1 95-4 10-8 9-10 5-5 1-33 1h-243l-104-1-10-4-8-7-6-9-2-9v-103l4-11 6-8 9-6zm37 65v30h303v-30z"
              />
              <path
                transform="translate(1199,983)"
                d="m0 0h56l37 1 14 3 15 8 11 9 9 12 6 13 3 17v110l-3 16-8 16-7 9-10 9-16 8-12 3-11 1h-103l-15-2-13-5-11-7-12-12-8-14-4-11-1-7v-120l4-15 6-11 8-10 10-9 16-8 6-2 7-1zm-18 66v104h103l1-7v-96l-1-1z"
              />
              <path
                transform="translate(1175,1269)"
                d="m0 0h112l14 2 12 5 10 6 10 9 9 12 6 15 2 12v112l-3 15-5 12-7 10-5 6-10 8-15 7-13 3h-120l-15-4-11-6-10-8-8-9-8-14-4-16v-121l4-14 5-10 8-10 8-8 9-6 11-5zm6 65v104h103l1-7v-95l-1-2z"
              />
              <path
                transform="translate(1173,1555)"
                d="m0 0h119l16 4 13 7 11 9 10 14 5 11 3 16v110l-3 17-4 9-6 10-11 12-11 7-12 5-9 2-10 1h-105l-14-2-11-4-9-5-11-9-9-12-6-12-3-14v-120l4-14 6-12 9-11 12-10 13-6zm8 65v104h103l1-1v-103z"
              />
              <path
                transform="translate(1495,1699)"
                d="m0 0h240l18 1 10 4 5 3v2h2l6 9 3 8v13l-4 9-6 8-9 6-7 2-19 1h-267l-12-1-9-4-8-7-4-5-3-8-1-11 4-13 9-10 10-5 4-1z"
              />
              <path
                transform="translate(1465,1293)"
                d="m0 0h270l20 1 12 6 7 8 4 8 1 3v13l-4 10-6 8-7 5-10 3-282 1-14-1-10-4-8-7-6-10-2-8 1-11 4-9 6-8 10-6 3-1z"
              />
              <path
                transform="translate(1458,1414)"
                d="m0 0h293l10 3 8 6 6 7 4 10v13l-4 10-9 10-7 4-9 2h-292l-10-3-8-6-7-10-3-10 1-11 4-10 7-8 11-6z"
              />
              <path
                transform="translate(1457,1008)"
                d="m0 0h295l9 3 6 4 7 7 4 8 1 4v13l-4 9-6 8-5 4-10 4-8 1h-286l-11-3-6-4-7-7-5-10-1-11 2-9 5-9 9-8z"
              />
              <path
                transform="translate(1457,1579)"
                d="m0 0h293l9 2 9 6 7 8 4 10v13l-4 10-9 10-8 4-11 2h-287l-12-3-9-7-7-11-2-8 1-11 4-10 6-7 10-6z"
              />
              <path
                transform="translate(1455,1129)"
                d="m0 0h299l10 4 8 7 5 9 2 6v13l-4 9-6 8-9 6-7 2-10 1h-278l-13-2-8-4-8-8-5-11-1-11 4-13 4-6h2v-2l10-6z"
              />
              <path
                transform="translate(1441,694)"
                d="m0 0h13l9 4 5 4 6 10 1 3v13l-5 10-8 7-7 3-5 1h-7l-11-4-7-7-5-10v-13l4-9 6-7 7-4z"
              />
            </svg>
          </div>
          <div class="cont_titulo_inventario">
            <p class="text_titulo_inventario">
              Inventario de Insumos y Maquinaria
            </p>
          </div>
          <div class="cont_text_inventario">
            <p class="text_inventario">
              Gestiona tus recursos físicos de manera integral, controlando su uso y mantenimiento. Monitorea las existencias de insumos, maquinaria, herramientas y recursos como semillas y fertilizantes, registrando detalles como cantidad, fecha de expiración y estado. Además, asegura la operatividad y seguridad mediante el seguimiento de mantenimiento y desinfección, promoviendo una gestión eficiente en la producción agrícola.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="gris"></div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const Login = () => {
  router.push("/login");
};
</script>
<style scoped>
.gris {
  width: 70.7%;
  height: 100%;
  background-color: #70b039;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
}

.header {
  width: 100%;
  height: 75px;
  box-shadow: 0px 0px 10px 0px #0000003f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: none;
}

.cont_titulo {
  width: 68%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo {
  font-size: 30px;
  color: #000000;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
}

.cont_login {
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iniciar_sesion {
  width: 150px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 19px;
  transition: all 0.3s;
  font-weight: bold;
}

.iniciar_sesion:hover {
  font-size: 20px;
}

.cont_descripcion {
  width: 100%;
  height: 90vh;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.cont_frase {
  width: 60%;
  height: 40vh;
  display: flex;
  align-items: center;
  padding-left: 8%;
}

.text_frase {
  font-size: 28px;
  text-transform: uppercase;
  color: #050505;
  margin: 0;
  font-weight: bold;
}

.cont_objetivo {
  width: 50%;
  height: 60vh;
  display: flex;
  align-items: start;
  margin-top: 20px;
  padding-left: 8%;
}

.text_objetivo {
  font-size: 20px;
  color: #222222;
  margin: 0;
}

.cont_img {
  position: absolute;
  top: 38%;
  right: 10%;
}

.funciones_claves {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.cont_titulo_fun {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.titulo_fun {
  font-size: 28px;
  color: #000000;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
}

.cont_funciones {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 30px;
  gap: 30px;
  padding: 0 20px;
}

.cont_logo {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont_produccion {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0px 15px #71b0399d;
  padding: 10px 1%;
  border-radius: 10px;
  cursor: default;
}

.cont_titulo_produccion {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text_titulo_produccion {
  font-size: 20px;
  color: #000000;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
}

.cont_text_produccion {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px 20px;
}

.text_produccion {
  font-size: 16px;
  color: #000000;
  margin: 0;
  text-align: center;
}

.cont_control {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0px 15px #71b0399d;
  padding: 10px 1%;
  border-radius: 10px;
  cursor: default;
}

.cont_titulo_control {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text_titulo_control {
  font-size: 20px;
  color: #000000;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

.cont_text_control {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 20px 20px;
}

.text_control {
  font-size: 16px;
  color: #000000;
  margin: 0;
  text-align: center;
}

.cont_facturacion {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0px 15px #71b0399d;
  padding: 10px 1%;
  border-radius: 10px;
  cursor: default;
}

.cont_titulo_facturacion {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text_titulo_facturacion {
  font-size: 20px;
  color: #000000;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

.cont_text_facturacion {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 20px 20px;
}

.text_facturacion {
  font-size: 16px;
  color: #000000;
  margin: 0;
  text-align: center;
}

.cont_inventario {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0px 15px #71b0399d;
  padding: 10px 1%;
  border-radius: 10px;
  cursor: default;
}

.cont_titulo_inventario {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text_titulo_inventario {
  font-size: 20px;
  color: #000000;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

.cont_text_inventario {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 20px 20px;
}

.text_inventario {
  font-size: 16px;
  color: #000000;
  margin: 0;
  text-align: center;
}
</style>