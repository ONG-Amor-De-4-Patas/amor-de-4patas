import { NextPage } from 'next'

import Layout from '../components/Layout'
import DonateModal from '../components/DonateModal';
import ImageSlideShow from '../components/ImageSlideShow';
import NavbarLayout from '../components/NavbarLayout';

const AboutUsPage: NextPage = () => {
  const title = "ONG Amor de 4 Patas About Us"

  return (
    <NavbarLayout title={title}>
      <Layout title={title}>
        <div className="page-container">
            <img src='/resgate-lion.jpeg' alt='about us: we rescue animals' style={{'width': '100%'}}/>
            <h2>Amor De 4 Patas Project</h2>

            <h3>The Many Things We Do</h3>
            <p>
              <ul>
                <li>1. Resgatar, cuidar e proteger animais de rua.</li> 
                <li>2. Prestar assistência aos animais de rua, em urgências e emergências. </li>
                <li>3. Promover a castração, inicialmente, dos machos e, posteriormente, de fêmeas em situações de abandono (cães e gatos). </li>
                <li>4. Manter parcerias com médicos veterinários, a fim de receber suporte clínico e cirúrgico. </li>
                <li>5. Trabalhar a adoção responsável dos animais. </li>
                <li>6. Vacinar, anualmente, os animais resgatados para raiva e para as viroses.</li>
                <li>7. Fazer teste rápido de calazar, anualmente. </li>
                <li>9. Promover a alimentação diária.</li>
                <li>10. Colher hemogramas de controle anual. </li>
              </ul>
            </p>

            <h1>Help Support Our Efforts</h1>
            <p>Donate to our project 💖</p>
            <DonateModal />
        </div>
      </Layout>
    </NavbarLayout>
  )
}

export default AboutUsPage
