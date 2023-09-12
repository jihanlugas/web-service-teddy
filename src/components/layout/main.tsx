import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/header';
import { useRouter } from 'next/router';
import Footer from '@/components/layout/footer';

type Props = {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {

  return (
    <>
      <Head>
        <meta name="theme-color" content={'currentColor'} />
      </Head>
      <main className={''}>
        <Header />
        <div className={'pt-16 overflow-y-auto'}>
          <div className="w-full">
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Main;