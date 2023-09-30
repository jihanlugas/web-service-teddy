import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LuNetwork, LuWifi } from 'react-icons/lu';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BiServer, BiGitBranch, BiCctv } from 'react-icons/bi';
import { FaShieldAlt } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';


type Props = {

}

const Index: React.FC<Props> = () => {

  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        {/* <meta name="description" content={description} /> */}
      </Head>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4 py-8 md:py-16'>
          <div className='max-w-xl'>
            <div className='mb-16'>
              <h1 className='font-bold my-4'>{'Hubungi Kami Kapan Saja!'}</h1>
              <p>Dengan pengalaman lebih dari 15 Tahun dibidang Jaringan & Infrastruktur Komputer, Kami siap membantu menciptakan sistem tata kelola jaringan yang baik untuk perusahaan atau instansi anda.</p>
            </div>
            <div className='mb-16'>
              <h2 className='font-bold my-4'>{'Kantor Pusat'}</h2>
              <p>Jl. Sedapmalam No 12, Lowokwaru, Kota Malang 65141</p>
            </div>
            <div className='mb-16'>
              <h2 className='font-bold my-4'>{'Kontak'}</h2>
              <p>Yusuf Mahdita Saputra</p>
              <p>Marketing Officer</p>
              <p>0821-3286-6207</p>
            </div>
            <div className='mb-16'>
              <h2 className='font-bold my-4'>{'Email'}</h2>
              <p>info@peta-network.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;