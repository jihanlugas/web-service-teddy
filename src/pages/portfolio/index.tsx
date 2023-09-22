import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from 'next/image';


type Props = {

}

const Index: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        {/* <meta name="description" content={description} /> */}
      </Head>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4 py-8 md:py-16'>
          <h2>Portofolio Pekerjaan</h2>
          <p>Kami telah melayani pekerjaan instalasi jaringan di berbagai kota di Indonesia, kami memiliki pengalaman untuk membantu mengkoneksikan berbagai wilayah di seluruh pelosok negeri.</p>
        </div>
      </div>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4 mb-8'>
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <h2 className='my-0'>
                Swasta
              </h2>
            </div>
            <div className='col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/hotel-aria.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/cusawiran.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/hotel-santika.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/pt-sim.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/smart-connect.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/asuransi-jasindo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/otsuka.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/maxindo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/global-net.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/kosayu-trans.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/kebon-agung.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/wabi-sabi.jpg'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/swasta/djarum-beasiswa.png'}
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
        <div className='max-w-6xl mx-auto p-4 mb-8'>
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <h2 className='my-0'>
                Pemerintah
              </h2>
            </div>
            <div className='col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/bpbd-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-bojonegoro.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-bondowoso.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-buton.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-mojokerto.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-pamekasan.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-pelelawan.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-probolinggo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-samarinda.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-sampang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-trenggalek.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-tuban.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/disperindag-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dpkpp-probolinggo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/khagom-mufakat.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/kominfo-lembata.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/kominfo-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/materia-medica-batu.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/pln-madiun.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/pln-probolinggo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/rs-udayana.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/samsat-denpasar.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/waingapu.png'}
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
        <div className='max-w-6xl mx-auto p-4 mb-8'>
          <div className='rounded grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <h2 className='my-0'>
                Instansi Pendidikan
              </h2>
            </div>
            <div className='col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/bpbd-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-bojonegoro.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-bondowoso.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-buton.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-mojokerto.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-pamekasan.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-pelelawan.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-probolinggo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-samarinda.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-sampang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-trenggalek.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dispenduk-tuban.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/disperindag-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/dpkpp-probolinggo.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/khagom-mufakat.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/kominfo-lembata.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/kominfo-malang.png'}
                    alt={'IT Support Background'}
                    style={{ objectFit: 'cover' }}
                    fill={true}
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='h-36 w-36 relative'>
                  <Image
                    src={'/pemerintah/materia-medica-batu.png'}
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
    </>
  )
}

(Index as PageWithLayoutType).layout = Main;

export default Index;