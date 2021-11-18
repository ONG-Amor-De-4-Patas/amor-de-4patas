import { NextPage } from 'next'

import Layout from '../components/Layout'
import DonateModal from '../components/DonateModal';
import ImageSlideShow from '../components/ImageSlideShow';
import NavbarLayout from '../components/NavbarLayout';

const IndexPage: NextPage = () => {
  const title = "ONG Amor de 4 Patas Home Page"

  return (
    <NavbarLayout title={title}>
      <Layout title={title}>
        <div className="page-container">
            <h1>Amor de 4 Patas</h1>
            <img src='/amor-de-4-patas-organization.jpg' alt='organization in front of church' style={{'width': '100%'}}/>
            <h2>Tabuleiro Shelter Project</h2>
            <h3>
              Our Mission: 
            </h3>
            <h4>To support stray animals to live a better life and bring the community together with animals</h4>
    
            <h2>Our Animals up for Adoption</h2>
            <ImageSlideShow />

            <h1>Help Support Our Efforts</h1>
            <p>Donate to our project 💖</p>
            <DonateModal />
        </div>
      </Layout>
    </NavbarLayout>
  )
}

export default IndexPage
