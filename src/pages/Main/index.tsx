import { Cabecalho } from '../../components/Cabecalho'
import { Logo } from '../../components/Cabecalho/styles'
import { Destaque } from '../../Destaque'
import { Container } from './styles'



export default function Main() {
  return (
    <Container>
      <Cabecalho/>

      <Destaque />

    </Container>

  )
}
