import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from 'next/image';
import { LuNetwork, LuWifi } from 'react-icons/lu';
import { BiServer, BiGitBranch, BiCctv } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

type Props = {

}

const title = process.env.APP_NAME + ' - Situs Informasi';
const description = process.env.APP_NAME + ' menyediakan informasi seputar informasi, tutorial, berita terbaru'


const content = [
  {
    title: 'Cara install windows 11',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara update windows 11',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara setup nginx di ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install apache ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install mysql',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install postgress',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install apache ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install mysql',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install postgress',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install apache ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install mysql',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install postgress',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install apache ubuntu',
    createDt: '2 March 2023'
  },
]

const Index: React.FC<Props> = () => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <div className='h-96 bg-blue-500 relative'>
          <Image className='' src={'/index-background.webp'} layout='fill' objectFit='cover' objectPosition='' alt={''} />
          <div className='absolute h-96 w-full max-w-xl flex flex-col justify-center text-gray-50 p-4'>
            <h1 className='font-bold text-primary-900'>{'Infrastructure & Networking Specialist'}</h1>
            <div>{'Dengan pengalaman lebih dari 15 Tahun dibidang Jaringan & Infrastruktur Komputer, Kami siap membantu menciptakan sistem tata kelola jaringan yang baik untuk perusahaan atau instansi anda'}</div>
          </div>
        </div>
      </div>
      <div>
        <div className='relative grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-2 mx-4 md:mx-12 -mt-12'>
          <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
            <div className='h-full flex justify-center items-center p-4'>
              <LuNetwork clasName={''} size={'2rem'} />
            </div>
            <div className='h-full flex justify-center p-2'>
              {'Jasa Instalasi Jaringan LAN'}
            </div>
          </div>
          <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
            <div className='h-full flex justify-center items-center p-2'>
              <LuWifi clasName={''} size={'2rem'} />
            </div>
            <div className='h-full flex justify-center p-2'>
              {'Jasa Instalasi Wireless & Hotspot'}
            </div>
          </div>
          <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
            <div className='h-full flex justify-center items-center p-2'>
              <BiServer clasName={''} size={'2rem'} />
            </div>
            <div className='h-full flex justify-center p-2'>
              {'Jasa Instalasi Maintance Server'}
            </div>
          </div>
          <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
            <div className='h-full flex justify-center items-center p-2'>
              <BiGitBranch clasName={''} size={'2rem'} />
            </div>
            <div className='h-full flex justify-center p-2'>
              {'Jasa Instalasi Fiber Optic'}
            </div>
          </div>
          <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
            <div className='h-full flex justify-center items-center p-2'>
              <BiCctv clasName={''} size={'2rem'} />
            </div>
            <div className='h-full flex justify-center p-2'>
              {'Jasa Instalasi CCTV'}
            </div>
          </div>
          <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
            <div className='h-full flex justify-center items-center p-2'>
              <MdComputer clasName={''} size={'2rem'} />
            </div>
            <div className='h-full flex justify-center p-2'>
              {'Suplier Hardware'}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-1 my-16 p-4'>
          <div className='col-span-2 h-52 flex flex-col justify-between mb-16 md:mb-0'>
            <div className='text-2xl'>
              Tata Kelola Jaringan yang Baik akan dapat Meningkatkan Kualitas Layanan.
            </div>
            <div className='flex'>
              <Link href={'#'}>
                <div className='flex items-center bg-red-500 text-white px-4 py-2 rounded'>
                  <div className='mr-4'>
                    Tentang Kami
                  </div>
                  <div><FaArrowRightLong clasName={''} size={'1rem'} /></div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-span-3 h-80 md:h-52 flex flex-col justify-between'>
            <div className='font-bold text-lg'>
              Kualitas infrastruktur jaringan yang baik sangat diperlukan untuk meningkatkan efektivitas perusahaan.
            </div>
            <div className=''>
              Kami memiliki tim spesialis yang berdedikasi tinggi, dengan latar belakang dan keahlian di berbagai bidang siap memberikan solusi untuk kegiatan bisnis anda.
            </div>
            <div className=''>
              Kami memberikan solusi untuk kebutuhan IT Anda meliputi jasa instalasi jaringan lokal, instalasi jaringan wireless, hingga instalasi data center.
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>Section</div>
      <div className=''>
        <div className='p-4 col-span-1 md:col-span-4 bg-white shadow'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4'>
            {content.map((data, key) => {
              return (
                <div key={key} className={''}>
                  <div>{data.title}</div>
                  <div>{data.createDt}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;
