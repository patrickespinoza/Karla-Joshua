import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import LluviaDeSobres from "./componentes-encabezado/Regalos";
import SeparadorFrase from "./componentes-encabezado/Frase";

export default function Itinerario() {

  return (
    <div>


      <Novios />

      <Celebracion/>

      <LluviaDeSobres/>

      <SeparadorFrase/>

      <ConfirmacionAsistencia/>
    </div>
  );
}