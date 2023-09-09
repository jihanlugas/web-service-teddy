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
        <div className='max-w-6xl mx-auto p-4 text-gray-50'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-1 p-4'>
            <div className='col-span-3'>
              <h2>Mau Konsultasi?</h2>
              <div>Kami telah melayani berbagai jenis pekerjaan di berbagai kota di Indonesia, tim kami siap untuk membantu memberikan solusi setiap permasalahan IT anda.</div>
            </div>
            <div className='col-span-2 my-auto'>
              <div className='flex justify-start md:justify-end'>
                <Link href={'#'}>
                  <div className='flex items-center bg-red-500 text-white px-4 py-2 rounded'>
                    <div className='mr-4'>
                      Hubungi kami sekarang
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <div className='grid grid-cols-1 md:grid-cols-4 gap-1 p-4'>
            <div className="mb-8">
              <div>
                <strong>Kantor</strong>
              </div>
              <div>Jl. Sedapmalam No 12, Lowokwaru, Kota Malang 65141</div>
              <div>0823 3146 8207</div>
              <div>info@peta-network.com</div>
            </div>
            <div className="mb-8">
              <div>
                <strong>Layanan</strong>
              </div>
              <div>Managed IT Support</div>
              <div>Jasa Instalasi Fiber Optik</div>
              <div>Jasa Instalasi Wireless</div>
              <div>Jasa Instalasi Data Center</div>
              <div>Jasa Instalasi Server</div>
              <div>Jasa Instalasi dan Hardware Supplier</div>
              <div>Jasa Instalasi CCTV</div>
              <div>Jasa Instalasi Jaringan LAN Kantor</div>
              <div>Jasa Instalasi Tower atau Menara Triangle</div>
            </div>
            <div className="mb-8">
              <div>
                <strong>Perusahaan</strong>
              </div>
              <div>Profil</div>
              <div>Portfolio</div>
              <div>Kontak</div>
            </div>
            <div className="mb-8">
              <div>
                <strong>Informasi</strong>
              </div>
              <div>Informasi Magang</div>
              <div>Partnership</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="mt-8 mb-4 text-center text-sm">{'Copy Right ©' + getYear() + ' Developer Team'}</div>
        </div>
      </div>
    </>
  )
}

export default Footer;