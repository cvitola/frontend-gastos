
import { Container, ContainerFirst, CoverPage, H1, H2 } from '../../components/BasicStyles/BasicStyles';
import { ImgHome } from './HomeStyles';
import imgLogo from '../../assets/img/MisGastos.png'


const Home = () => {

  return (
    <ContainerFirst>
        <H1>Gestiona todos tus gastos</H1>
        <ImgHome src={imgLogo} />
    </ContainerFirst>

  )
}

export default Home