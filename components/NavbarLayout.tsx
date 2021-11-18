import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Footer from './Footer'

type Props = {
  children: ReactNode
  title?: string
}

const NavbarLayout = ({
  children,
  title = 'Amor de 4 Patas',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Essential META Tags --> */}
      <meta property="og:title" content="ONG Amor de 4 Patas" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.amorde4patas.org" />
      <meta property="og:url" content="https://www.amorde4patas.org" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* <!-- Non-Essential, But Recommended --> */}
      <meta property="og:description" content="Nonprofit Organization for Animals Shelters based in Tabuleiro do Norte, CE, Brazil" />
      <meta property="og:site_name" content="ONG Amor de 4 Patas" />
      <meta name="twitter:image:alt" content="Alt text for image" />

      {/* <!-- Non-Essential, But Required for Analytics --> */}
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content="ONG Amor de 4 Patas" />
      <meta
        name="twitter:description"
        content="Nonprofit Organization for Animals Shelters based in Tabuleiro do Norte, CE, Brazil"
      />
      <meta
        name="twitter:image"
        content=""
      />
    </Head>
    <div className="global-layout">
        <div className="navbar">
            <div className="navbar-content">
            <Link href='#'>
                <a>
                    Test
                </a>
            </Link>
            <Link href="/">
                <a className="logo">
                <img src="/logo.jpeg" />
                </a>
            </Link>
            <Link href='#'>
                <a>
                    Test 2
                </a>
            </Link>
            </div>
        </div>
        <section>
        {children}
        </section>
        <Footer />
    </div>
  </>
)

export default NavbarLayout
