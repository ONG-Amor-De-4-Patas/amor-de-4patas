import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import DonateModal from '../components/DonateModal'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
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
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/logo.png" />
            </a>
          </Link>
          <h1>
            <span className="light">Support the Animals at</span>
            <br />
            the Nonprofit Organization Amor de 4 Patas
          </h1>
          <DonateModal />
        </div>
      </header>
      {children}
    </div>
    <div className="banner">
      <span>
        This is a{' '}
        <a
          href="https://github.com/stripe-samples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe Sample
        </a>
        .{' View code on '}
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </span>
    </div>
  </>
)

export default Layout
