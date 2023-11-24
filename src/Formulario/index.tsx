import { Form } from "react-router-dom";
import { FormularioTitulo, FormularioTextoInformativo } from "./styles";



export function Formulario() {
  return (
    <>
    <FormularioTitulo>Agende já seu Horário</FormularioTitulo>
    <FormularioTextoInformativo>Informe seu nome e Telefone</FormularioTextoInformativo>

    <form id="formulario">
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" />

      <label htmlFor="telefone">Telefone</label>
      <input type="text" name="telefone" id="telefone" placeholder="(xx) xxxxx-xxxx"/>

      <input type="submit" value="Enviar" />
    </form>
    </>
  );
}
