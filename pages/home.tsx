import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utils/get-stripejs'

import Layout from '../components/Layout'
import ElementsForm from '../components/ElementsForm'

const ImageDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  height: 250px;
`;

const Image = styled.img`
  height: 100%;
`;

const HomePage: NextPage = () => {
  const IMG_HEIGHT = 250;

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="page-container">
          <h2>Header</h2>
          <h1>Amor de 4 Patas</h1>
          <img src='/erda-estremera-xfdVC5osEj4-unsplash.jpeg' alt='dog in shelter' height={500}/>
          <h2>Tabuleiro Shelter Project</h2>
          <h3>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            <br />
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </h3>
          <br />
          <h2>About Us</h2>
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </h4>
          <h1>Donate with Elements</h1>
          <p>Donate to our project 💖</p>
          <Elements stripe={getStripe()}>
            <ElementsForm />
          </Elements>
          <h2>Pictures</h2>
          <ImageDiv>
              <Image src='/sasha-sashina-Xcscr_sNSEY-unsplash.jpeg' alt='dog in shelter' />
              <Image src='/thomas-park-On6bRQRn5lY-unsplash.jpeg' alt='cat in shelter' />
              <Image src='/chetan-hireholi-IEMJO7CvK7I-unsplash.jpeg' alt='shelter' />
              <Image src='/nrd-MTHt9XoDzrg-unsplash.jpeg' alt='cat in cage' />
          </ImageDiv>
          <h2>Footer</h2>
      </div>
    </Layout>
  )
}

export default HomePage
