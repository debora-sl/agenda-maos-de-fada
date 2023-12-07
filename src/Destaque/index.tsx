import { DestaqueImagem} from "./styles"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import maos from "../assets/maos.svg";
import pes from "../assets/spa.svg";
import spaMaosPes from "../assets/nails-designer.svg";


export function Destaque(){
  return (
    <Carousel>
    <Carousel.Item>
      <DestaqueImagem src={maos} alt="Foto de mão" />
    </Carousel.Item>

    <Carousel.Item>
      <DestaqueImagem src={pes} alt="Foto de pés" />
    </Carousel.Item>

    <Carousel.Item>
      <DestaqueImagem src={spaMaosPes} alt="Foto de mãos e pés com pétalas de rosas" />
    </Carousel.Item>
  </Carousel>
  );
}
