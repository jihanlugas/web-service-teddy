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
        <title>{process.env.APP_NAME + ' - Managed IT Support'}</title>
        <meta name="description" content={'Pengelolaan jaringan yang baik akan membantu pekerjaan anda menjadi lebih maksimal. Jaringan yang sudah dikelola dengan baik, akan mendukung kelancaran operasional pekerjaan dan meminimalisir potensi-potensi gangguan yang mungkin terjadi. Dengan pengalaman kami dalam mengelola jaringan intranet klien, pada layanan ini kami berfokus untuk mengelola sistem jaringan anda menjadi lebih tertata dan terstruktur'} />
      </Head>
      <div className='bg-neutral-800'>
        <div className='h-96 relative'>
          <Image
            src={'/background/it-support.jpg'}
            alt={'IT Support Background'}
            style={{ objectFit: 'cover' }}
            fill={true}
          />
          <div className='bg-gray-900 absolute w-full h-full opacity-20'></div>
          <div className='max-w-6xl mx-auto'>
            <div className='absolute h-96 w-full max-w-xl flex flex-col justify-center text-gray-50 p-4'>
              <h1 className='font-bold text-gray-50 my-4'>{'Managed IT Support'}</h1>
              <p className='mt-0 mb-4 md:mb-8 text-justify'>{'Pengelolaan jaringan yang baik akan membantu pekerjaan anda menjadi lebih maksimal. Jaringan yang sudah dikelola dengan baik, akan mendukung kelancaran operasional pekerjaan dan meminimalisir potensi-potensi gangguan yang mungkin terjadi. Dengan pengalaman kami dalam mengelola jaringan intranet klien, pada layanan ini kami berfokus untuk mengelola sistem jaringan anda menjadi lebih tertata dan terstruktur'}</p>
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
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4'>
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
              <p className=''>Kami memiliki tim Research and Development yang dapat menganalisa dan memenuhi kebutuhan anda</p>
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
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4'>
            <h2 className='my-0'>
              Pertanyaan umum terkait layanan jasa instalasi fiber optik
            </h2>
            <div className='col-span-3'>
              <div className='mb-4 border-b-2'>
                <button className='w-full flex justify-between py-4 px-0 md:px-4 rounded items-center' onClick={() => setAccordion1(!accordion1)}>
                  <div className='font-bold text-lg text-left'>
                    Berapa lama garansi yang diberikan setiap setelah selesai pekerjaan?
                  </div>
                  <div className='p-2'>
                    <MdOutlineKeyboardArrowRight className={`rotate-0 duration-500 ${accordion1 && 'rotate-90'}`} size={'1.2em'} />
                  </div>
                </button>
                <div className={`duration-500 overflow-hidden ${accordion1 ? 'max-h-40 ' : 'max-h-0 '}`}>
                  <div className='py-4 px-0 md:px-4'>
                    <p>Kami memberikan service terbaik kepada client , kami juga menyediakan garansi selama 1-3 bulan setelah pekerjaan selesai.</p>
                  </div>
                </div>
              </div>
              <div className='mb-4 border-b-2'>
                <button className='w-full flex justify-between py-4 px-0 md:px-4 rounded items-center' onClick={() => setAccordion2(!accordion2)}>
                  <div className='font-bold text-lg text-left'>
                    Apakah dapat belanja sendiri untuk perangkat yang akan dipasang?
                  </div>
                  <div className='p-2'>
                    <MdOutlineKeyboardArrowRight className={`rotate-0 duration-500 ${accordion2 && 'rotate-90'}`} size={'1.2em'} />
                  </div>
                </button>
                <div className={`duration-500 overflow-hidden ${accordion2 ? 'max-h-40 ' : 'max-h-0 '}`}>
                  <div className='py-4 px-0 md:px-4'>
                    <p>Anda dapat belanja sendiri untuk kebutuhan perangkat yang akan dipasang.</p>
                  </div>
                </div>
              </div>
              <div className='mb-4 border-b-2'>
                <button className='w-full flex justify-between py-4 px-0 md:px-4 rounded items-center' onClick={() => setAccordion3(!accordion3)}>
                  <div className='font-bold text-lg text-left'>
                    Saya sudah memiliki jaringan sebelumnya, apakah bisa hanya menggunakan jasa maintenance saja?
                  </div>
                  <div className='p-2'>
                    <MdOutlineKeyboardArrowRight className={`rotate-0 duration-500 ${accordion3 && 'rotate-90'}`} size={'1.2em'} />
                  </div>
                </button>
                <div className={`duration-500 overflow-hidden ${accordion3 ? 'max-h-40 ' : 'max-h-0 '}`}>
                  <div className='py-4 px-0 md:px-4'>
                    <p>Anda dapat menggunakan jasa maintenance kami sesuai dengan kebutuhan anda</p>
                  </div>
                </div>
              </div>
              <div className='mb-4 border-b-2'>
                <button className='w-full flex justify-between py-4 px-0 md:px-4 rounded items-center' onClick={() => setAccordion4(!accordion4)}>
                  <div className='font-bold text-lg text-left'>
                    Jika masih dalam masa garansi, apakah dikenakan biaya saat maintenance?
                  </div>
                  <div className='p-2'>
                    <MdOutlineKeyboardArrowRight className={`rotate-0 duration-500 ${accordion4 && 'rotate-90'}`} size={'1.2em'} />
                  </div>
                </button>
                <div className={`duration-500 overflow-hidden ${accordion4 ? 'max-h-40 ' : 'max-h-0 '}`}>
                  <div className='py-4 px-0 md:px-4'>
                    <p>Tidak, demi kepuasan client kami memberikan maintenance selama masa garansi dengan FREE.</p>
                  </div>
                </div>
              </div>
              <div className='mb-4 border-b-2'>
                <button className='w-full flex justify-between py-4 px-0 md:px-4 rounded items-center' onClick={() => setAccordion5(!accordion5)}>
                  <div className='font-bold text-lg text-left'>
                    Berapa lama idealnya jaringan perlu dicek?
                  </div>
                  <div className='p-2'>
                    <MdOutlineKeyboardArrowRight className={`rotate-0 duration-500 ${accordion5 && 'rotate-90'}`} size={'1.2em'} />
                  </div>
                </button>
                <div className={`duration-500 overflow-hidden ${accordion5 ? 'max-h-40 ' : 'max-h-0 '}`}>
                  <div className='py-4 px-0 md:px-4'>
                    <p>Pengecekan jaringan idealnya dilakukan satu bulan sekali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4'>
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <h2 className='my-0'>
                Klien
              </h2>
              <p className=''>Berkomitmen untuk terus memberikan pelayanan terbaik untuk setiap customer</p>
            </div>
            <div className='col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/client-ub-fisip.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/client-ub-fia.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/client-sma-kosayu.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/clinet-kominfo-kab-lembata.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/client-ub-fkh.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/clinet-bpbd-kota-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/clinet-kominfo-kota-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/client/clinet-koyasu.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4'>
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <h2 className='my-0'>
                Layanan Lainnya
              </h2>
            </div>
            <div className='col-span-3 relative grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <LuNetwork className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi Jaringan LAN'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <LuWifi className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi Wireless & Hotspot'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <BiServer className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi Maintance Server'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <BiGitBranch className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi Fiber Optic'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <BiCctv className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi CCTV'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <MdComputer className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Supplier Hardware'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <MdComputer className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi Data Center'}
                </div>
              </div>
              <div className='flex flex-col text-center h-40 bg-gray-800 text-gray-100 rounded'>
                <div className='h-full flex justify-center items-center p-2'>
                  <MdComputer className={''} size={'2rem'} />
                </div>
                <div className='h-full flex justify-center p-2'>
                  {'Jasa Instalasi PABX'}
                </div>
              </div>
            </div>
            <div>
            </div>
            <div className='col-span-3'>
              <div>
                <h3>Managed IT Support</h3>
                <p className='text-justify'>Kami memiliki tim IT yang sangat berpengalaman dalam bidangnya , kami siap memberikan layanan untuk anda seputar IT. Dengan layanan managed IT support, maka anda dapat meningkatkan kenyamanan dan keamanan perusahaan anda.</p>
              </div>
              <div>
                <h3>Jasa IT Support</h3>
                <p className='text-justify'>Perawatan jaringan sangat diperlukan setiap 1 bulan sekali maupun 3 bulan sekali, demi keamanan dan kelancaran komunikasi. Kami menyediakan jasa it support dan memudahkan perawatan jaringan di perusahaan anda.</p>
              </div>
              <div>
                <h3>IT Support Services</h3>
                <p className='text-justify'>Dengan jasa it support services anda bisa fokus dengan bisnis anda, biarkan kami saja yang menangani perihal jaringan & IT pada perusahaan anda. Harga yang kami berikan cukup kompetitif dan terjangkau, dengan harga yang terjangkau tentu saja kami juga memiliki tim support yang siap memberikan pelayanan yang terbaik.</p>
              </div>
              <div>
                <h3>Konsultan IT</h3>
                <p className='text-justify'>Peran jasa konsultan IT sangatlah penting dalam perusahaan, mengapa demikian? Di era modern seperti ini hampir semua kegiatan pasti berhubungan dengan IT, apalagi di perusahaan modern pasti semua pekerjaan selalu menggunakan IT. Kami siap memberikan bantuan kepada anda dengan menggunakan jasa konsultan IT dan tingkatkan efektifitas perusahaan anda.</p>
              </div>
              <div>
                <h3>Perusahaan Konsultan IT</h3>
                <p className='text-justify'>Dengan menggunakan jasa para konsultan IT akan membuat perusahaan berkembang dapat meningkatkan kegiatan produksinya dengan baik. Sehingga mereka dapat melakukan kegiatan pemasaran lebih aktif dan maksimal.</p>
              </div>
              <div>
                <h3>Perusahaan Konsultan IT di Indonesia</h3>
                <p className='text-justify'>Kehadiran jasa konsultan IT Indonesia membuat proses produksi para perusahaan berkembang semakin cepat. Karena mereka akan mendapatkan software desain produk langsung dari konsultan IT.</p>
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