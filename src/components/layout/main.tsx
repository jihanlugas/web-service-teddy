import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/header';
import { useRouter } from 'next/router';
import Footer from '@/components/layout/footer';

type Props = {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(true);

  const router = useRouter();

  const onClickOverlay = (isShow: boolean) => {
    if (isShow === undefined) {
      setSidebar(!sidebar);
    } else {
      setSidebar(isShow);
    }
  };


  return (
    <>
      <Head>
        <meta name="theme-color" content={'currentColor'} />
      </Head>
      <main className={''}>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
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