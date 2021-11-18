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
    </Head>
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/logo.jpeg" />
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
  </>
)

export default Layout
