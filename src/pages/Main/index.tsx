import { Cabecalho } from '../../components/Cabecalho'
import { Destaque } from '../../Destaque'
import { Formulario } from '../../Formulario'
import { Container } from './styles'



export default function Main() {
  return (
    <Container>
      <Cabecalho/>

      <Destaque />

      <Formulario />
    </Container>

  )
}
