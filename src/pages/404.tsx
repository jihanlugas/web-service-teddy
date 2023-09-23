import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';

type Props = {

}

const Index: React.FC<Props> = () => {
  return (
    <>
      <div className='h-full bg-gray-50'>
        <div className='max-w-6xl mx-auto p-4 my-20 md:my-40 flex flex-col justify-center items-center h-96'>
          <h1 className='font-bold text-4xl md:text-8xl'>404</h1>
          <h3 className='text-xl md:text-3xl'>Page Not Found</h3>
        </div>
      </div>
    </>
  )
}

(Index as PageWithLayoutType).layout = Main;

export default Index;