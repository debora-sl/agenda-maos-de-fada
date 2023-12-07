import styled from "styled-components";

export const FormularioTitulo = styled.h2`
  color: ${({ theme }) => theme.colors.DarkMagenta};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-top: 40px;

`

export const FormularioTextoInformativo = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-top: 10px;
`


export const Formulario = styled.form`
  border: thin solid #FFFFFF;
`

