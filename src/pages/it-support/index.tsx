import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt } from 'react-icons/fa';


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
        <div className='h-96 relative'>
          <Image
            src={'/it-support-background.jpg'}
            alt={'IT Support Background'}
            style={{ objectFit: 'cover' }}
            fill={true}
          />
          <div className='bg-gray-900 absolute w-full h-full opacity-20'></div>
          <div className='max-w-6xl mx-auto'>
            <div className='absolute h-96 w-full max-w-xl flex flex-col justify-center text-gray-50 p-4'>
              <h1 className='font-bold text-gray-50 my-4'>{'Managed IT Support'}</h1>
              <p className='mt-0 mb-4 md:mb-8'>{'Pengelolaan jaringan yang baik akan membantu pekerjaan anda menjadi lebih maksimal. Jaringan yang sudah dikelola dengan baik, akan mendukung kelancaran operasional pekerjaan dan meminimalisir potensi-potensi gangguan yang mungkin terjadi. Dengan pengalaman kami dalam mengelola jaringan intranet klien, pada layanan ini kami berfokus untuk mengelola sistem jaringan anda menjadi lebih tertata dan terstruktur'}</p>
              <div className='flex justify-start'>
                <Link href={'#'}>
                  <div className='flex items-center duration-300 bg-primary-600 hover:bg-primary-500 text-gray-200 hover:text-gray-50 px-4 py-2 rounded'>
                    <div className='mr-4'>
                      Hubungi kami sekarang
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4 py-8 md:py-16'>
          <div className='mb-16'>
            <h1 className='font-bold my-4'>{'Apa saja yang dapat kami bantu'}</h1>
            <p>Ruang lingkup pekerjaan terkait Jasa IT Support</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Monitoring</div>
              <p className={'my-2'}>Memantau perkembangan bandwidth jaringan anda.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Alokasi Bandwidth</div>
              <p className={'my-2'}>Mengelola jumlah bandwidth untuk dialokasikan ke tiap jalur jaringan internet.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Pemetaan IP Address</div>
              <p className={'my-2'}>Menentukan IP Address untuk setiap jalur jaringan internet agar lebih terstruktur.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Konfigurasi Firewall</div>
              <p className={'my-2'}>Setting firewall untuk melakukan block port virus, menambahkan rule pada jaringan anda.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Instalasi & Perapian Jaringan</div>
              <p className={'my-2'}>Membantu anda dalam memperluas jangkauan jaringan, seperti penambahan perangkat jaringan maupun perapian.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Support 24/7</div>
              <p className={'my-2'}>24 jam memberikan support untuk anda seputar jaringan.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Maintenance</div>
              <p className={'my-2'}>Perbaikan dan perawatan pada ruang lingkup jaringan.</p>
            </div>
            <div>
              <div className='flex-none flex justify-center items-center h-16 w-16 mb-4 bg-gray-800 rounded text-gray-50'>
                <FaShieldAlt className={''} size={'2rem'} />
              </div>
              <div className='font-bold text-lg mb-2 text-gray-800'>Troubleshooting</div>
              <p className={'my-2'}>Mengatasi permasalahan dalam jaringan anda.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4'>
          <div className='bg-gray-200 rounded grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
            <div className='col-span-3'>
              <h2>Anda memiliki kebutuhan khusus ?</h2>
              <p>Kami memiliki tim Research and Development yang dapat menganalisa dan memenuhi kebutuhan anda</p>
            </div>
            <div className='flex justify-start mt-auto'>
              <Link href={'#'}>
                <div className='flex items-center duration-300 bg-primary-600 hover:bg-primary-500 text-gray-200 hover:text-gray-50 px-4 py-2 rounded'>
                  <div className='mr-4'>
                    Hubungi kami sekarang
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4'>
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
            <h2 className='my-0'>
              Pertanyaan umum terkait layanan IT Support
            </h2>
            <div className='col-span-3'>
              <div>
                <div className='text-lg'>Berapa lama garansi yang diberikan setiap setelah selesai pekerjaan?</div>
                <p>Kami memberikan service terbaik kepada client , kami juga menyediakan garansi selama 1-3 bulan setelah pekerjaan selesai.</p>
              </div>
              <div>
                <div className='text-lg'>Apakah dapat belanja sendiri untuk perangkat yang akan dipasang?</div>
                <p>Anda dapat belanja sendiri untuk kebutuhan perangkat yang akan dipasang.</p>
              </div>
              <div>
                <div className='text-lg'>Saya sudah memiliki jaringan sebelumnya, apakah bisa hanya menggunakan jasa maintenance saja?</div>
                <p>Anda dapat menggunakan jasa maintenance kami sesuai dengan kebutuhan anda</p>
              </div>
              <div>
                <div className='text-lg'>Jika masih dalam masa garansi, apakah dikenakan biaya saat maintenance?</div>
                <p>Tidak, demi kepuasan client kami memberikan maintenance selama masa garansi dengan FREE.</p>
              </div>
              <div>
                <div className='text-lg'>Berapa lama idealnya jaringan perlu dicek?</div>
                <p>Pengecekan jaringan idealnya dilakukan satu bulan sekali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;