import Link from "next/link";

interface Props {
}

const Footer: React.FC<Props> = () => {
  const getYear = () => {
    const date = new Date();

    return date.getFullYear();
  }
  return (
    <>
      <div className='bg-neutral-800'>
        <div className='max-w-6xl mx-auto p-4'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-1 p-4 text-gray-200'>
            <div className='col-span-3'>
              <h2 className="text-gray-50">Mau Konsultasi?</h2>
              <div>Kami telah melayani berbagai jenis pekerjaan di berbagai kota di Indonesia, tim kami siap untuk membantu memberikan solusi setiap permasalahan IT anda.</div>
            </div>
            <div className='col-span-2 my-auto'>
              <div className='flex justify-start md:justify-end'>
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
          <hr className="my-8" />
          <div className='grid grid-cols-1 md:grid-cols-4 gap-1 p-4 text-gray-200'>
            <div className="mb-8">
              <div className="my-4 text-lg">
                <strong>Kantor</strong>
              </div>
              <div className="mb-2">
                <div className="">Jl. Sedapmalam No 12, Lowokwaru, Kota Malang 65141</div>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">0823 3146 8207</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">info@peta-network.com</div>
                </Link>
              </div>
            </div>
            <div className="mb-8">
              <div className="my-4 text-lg">
                <strong>Layanan</strong>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Managed IT Support</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi Fiber Optik</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi Wireless</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi Data Center</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi Server</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi dan Hardware Supplier</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi CCTV</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi Jaringan LAN Kantor</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Jasa Instalasi Tower atau Menara Triangle</div>
                </Link>
              </div>
            </div>
            <div className="mb-8">
              <div className="my-4 text-lg">
                <strong>Perusahaan</strong>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Profil</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Portfolio</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Kontak</div>
                </Link>
              </div>
            </div>
            <div className="mb-8">
              <div className="my-4 text-lg">
                <strong>Informasi</strong>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Informasi Magang</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Partnership</div>
                </Link>
              </div>
              <div className="mb-2">
                <Link href={'#'}>
                  <div className="duration-300 text-gray-400 hover:text-gray-50">Blog</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-4 text-center text-sm text-gray-200">{'Copy Right ©' + getYear() + ' Developer Team'}</div>
        </div>
      </div>
    </>
  )
}

export default Footer;