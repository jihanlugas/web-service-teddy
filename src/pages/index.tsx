import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from 'next/image';
import { LuNetwork, LuWifi } from 'react-icons/lu';
import { BiServer, BiGitBranch, BiCctv } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';
import { FaShieldAlt, FaHammer, FaUser } from 'react-icons/fa';
import { FaArrowRightLong, FaHandshake } from 'react-icons/fa6';
import Link from 'next/link';

type Props = {

}

const Index: React.FC<Props> = () => {

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        {/* <meta name="description" content={description} /> */}
      </Head>
      <div className='bg-neutral-800'>
        <div className='max-w-6xl mx-auto'>
          <div className='h-96 bg-blue-500 relative'>
            <Image className='' src={'/index-background.webp'} layout='fill' objectFit='cover' objectPosition='' alt={''} />
            <div className='absolute h-96 w-full max-w-xl flex flex-col justify-center text-gray-50 p-4'>
              <h1 className='font-bold text-primary-900'>{'Infrastructure & Networking Specialist'}</h1>
              <div>{'Dengan pengalaman lebih dari 15 Tahun dibidang Jaringan & Infrastruktur Komputer, Kami siap membantu menciptakan sistem tata kelola jaringan yang baik untuk perusahaan atau instansi anda'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full bg-neutral-200'>
        <div className='max-w-6xl mx-auto'>
          <div className='relative grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-2 mx-4 md:mx-12 -mt-12'>
            <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
              <div className='h-full flex justify-center items-center p-2'>
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
          <div className='grid grid-cols-1 md:grid-cols-5 gap-1 p-4'>
            <div className='col-span-2 h-52 flex flex-col justify-between my-16'>
              <h2 className='my-0'>
                Tata Kelola Jaringan yang Baik akan dapat Meningkatkan Kualitas Layanan.
              </h2>
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
            <div className='col-span-3 h-80 md:h-52 flex flex-col justify-between my-16'>
              <div className='font-bold text-lg'>
                Kualitas infrastruktur jaringan yang baik sangat diperlukan untuk meningkatkan efektivitas perusahaan.
              </div>
              <p className=''>
                Kami memiliki tim spesialis yang berdedikasi tinggi, dengan latar belakang dan keahlian di berbagai bidang siap memberikan solusi untuk kegiatan bisnis anda.
              </p>
              <p className=''>
                Kami memberikan solusi untuk kebutuhan IT Anda meliputi jasa instalasi jaringan lokal, instalasi jaringan wireless, hingga instalasi data center.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='h-full bg-neutral-50'>
        <div className='max-w-6xl mx-auto py-8 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-1 p-4'>
            <div className='col-span-2'>
              <div className='font-bold text-lg'>
                Jangkauan Layanan
              </div>
            </div>
            <div className='col-span-3'>
              <p className='my-0'>
                Kami telah melayani pekerjaan instalasi jaringan di berbagai kota di Indonesia, kami
                memiliki pengalaman untuk membantu mengkoneksikan berbagai wilayah di seluruh pelosok negeri.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className='h-full bg-neutral-50'>
        <div className='max-w-6xl mx-auto py-8 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-4'>
            <div className='col-span-2'>
              <div className='font-bold text-lg'>
                Partner tepat untuk hasil yang tepat
              </div>
              <p>Berkomitmen untuk terus memberikan pelayanan terbaik untuk setiap customer</p>
            </div>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex'>
                <div className='flex-none flex justify-center items-center h-16 w-16 mr-4 bg-neutral-600 rounded text-neutral-50'>
                  <FaShieldAlt clasName={''} size={'2rem'} />
                </div>
                <div className='grow'>
                  <div className='font-bold text-lg mb-2'>
                    Garansi 100%
                  </div>
                  <div className=''>
                    Kami menggaransi keberhasilan setiap pekerjaan
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-none flex justify-center items-center h-16 w-16 mr-4 bg-neutral-600 rounded text-neutral-50'>
                  <FaUser clasName={''} size={'2rem'} />
                </div>
                <div className='grow'>
                  <div className='font-bold text-lg mb-2'>
                    Tim Expert
                  </div>
                  <div className=''>
                    Kami memiliki tim spesialis yang memiliki dedikasi tinggi
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-none flex justify-center items-center h-16 w-16 mr-4 bg-neutral-600 rounded text-neutral-50'>
                  <FaHammer clasName={''} size={'2rem'} />
                </div>
                <div className='grow'>
                  <div className='font-bold text-lg mb-2'>
                    Berpengalaman
                  </div>
                  <div className=''>
                    Kami telah melayani pekerjaan instalasi jaringan di berbagai kota di Indonesia selama lebih dari 15 tahun
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-none flex justify-center items-center h-16 w-16 mr-4 bg-neutral-600 rounded text-neutral-50'>
                  <FaHandshake clasName={''} size={'2rem'} />
                </div>
                <div className='grow'>
                  <div className='font-bold text-lg mb-2'>
                    Dukungan Aftersales
                  </div>
                  <div className=''>
                    kami memberikan garansi maintenance & konsultasi secara gratis setelah selesai pekerjaan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=''>
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
      </div> */}
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;
