import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray500};
  height: 15rem;
  margin-top: 1rem;
  padding-top: 1rem;
`
export const DestaqueImagem = styled.img`
    border: medium solid white;
    border-radius: 5px;
    margin-top: 2rem;
    height: 300px;
    opacity: 70%;
    width: 350px;
`

export const DestaqueTituloDoProcedimento = styled.h2`
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 1px 380px;

  width: 300px;
`
