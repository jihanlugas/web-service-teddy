import React, { useState, useEffect, useRef, useContext } from 'react';
import { BsList } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
}

const Header: React.FC<Props> = () => {


  const [sidebar, setSidebar] = useState<boolean>(false);

  const onClickOverlay = (isShow?: boolean) => {
    if (isShow === undefined) {
      setSidebar(!sidebar);
    } else {
      setSidebar(isShow);
    }
  };

  const refService = useRef<HTMLDivElement>();
  const refProfile = useRef<HTMLDivElement>();
  const [showService, setShowService] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showServiceMobile, setShowServiceMobile] = useState(false);
  const [showProfileMobile, setShowProfileMobile] = useState(false);
  const [headerBar, setHeaderBar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onClickOverlay(false);
  }, [router.pathname]);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showService && refService.current && !refService.current.contains(e.target)) {
        setShowService(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showService]);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showProfile && refProfile.current && !refProfile.current.contains(e.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showProfile]);

  return (
    <>
      <header>
        <div className="fixed w-full shadow z-40 bg-white ">
          <div className='flex justify-between items-center h-16 w-full max-w-6xl mx-auto'>
            <div className="p-2 flex items-center">
              <Link href={'/'} className={'no-underline'}>
                <div className="text-2xl px-2 text-gray-800">
                  <span className=''>{process.env.APP_NAME}</span>
                </div>
              </Link>
            </div>
            <div className='block lg:hidden'>
              <div className='p-2'>
                <button className="p-2 rounded-full duration-300" onClick={() => setSidebar(!sidebar)}>
                  <BsList className="" size={'1.5em'} />
                </button>
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className="relative inline-block text-left p-2">
                <div className="flex items-center">
                  <Link href={'/'} className={''}>
                    <div className="py-2 px-4 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Home'}</div>
                  </Link>
                  <div className="relative inline-block text-left p-2" ref={refService}>
                    <div onClick={() => setShowService(!showService)}>
                      <div className="py-2 px-4 rounded duration-300 text-gray-800 hover:bg-gray-200 flex justify-between items-center">
                        <div className='mr-4 select-none'>{'On Demand Service'}</div>
                        <div className='mt-1'>
                          <MdOutlineKeyboardArrowDown className={`rotate-0 duration-300 ${showService && 'rotate-180'}`} size={'1.2em'} />
                        </div>
                      </div>
                    </div>
                    <div className={`absolute right-4 mt-2 w-56 rounded-md overflow-hidden origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none duration-300 ease-in-out ${!showService && 'scale-0 shadow-none ring-0'}`}>
                      <div className="" role="none">
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Jasa Instalasi Jaringan LAN'}</div>
                        </Link>
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Jasa Instalasi Wireless & Hotspot'}</div>
                        </Link>
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Jasa Instalasi Maintance Server'}</div>
                        </Link>
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Jasa Instalasi Fiber Optic'}</div>
                        </Link>
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Jasa Instalasi CCTV'}</div>
                        </Link>
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Suplier Hardware'}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link href={'/it-support'} className={''}>
                    <div className="py-2 px-4 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Managed IT Support'}</div>
                  </Link>
                  <div className="relative inline-block text-left p-2" ref={refProfile}>
                    <div onClick={() => setShowProfile(!showProfile)}>
                      <div className="py-2 px-4 rounded duration-300 text-gray-800 hover:bg-gray-200 flex justify-between items-center">
                        <div className='mr-4 select-none'>{'Profile'}</div>
                        <div className='mt-1'>
                          <MdOutlineKeyboardArrowDown className={`rotate-0 duration-300 ${showProfile && 'rotate-180'}`} size={'1.2em'} />
                        </div>
                      </div>
                    </div>
                    <div className={`absolute right-4 mt-2 w-56 rounded-md overflow-hidden origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none duration-300 ease-in-out ${!showProfile && 'scale-0 shadow-none ring-0'}`}>
                      <div className="" role="none">
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Tentang Kami'}</div>
                        </Link>
                        <Link href={'#'}>
                          <div className={'block px-4 py-3 text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'}>{'Company Legal'}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link href={'/about'} className={''}>
                    <div className="py-2 px-4 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Portfolio'}</div>
                  </Link>
                  <Link href={'/about'} className={''}>
                    <div className="py-2 px-4 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Kontak'}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <>
        <nav>
          <div className='block z-20 fixed'>
            <div className={`fixed ${sidebar && 'inset-0'}`} onClick={() => onClickOverlay()} aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className={`fixed bg-gray-50 h-screen flex w-80 duration-300 ${sidebar ? 'left-0' : '-left-80'}`}>
              <div className='w-full overflow-scroll'>
                <div className='py-2 mt-16'>
                  <div className={'h-full p-2'}>
                    <Link href={'#'} className={''}>
                      <div className="p-2 mb-2 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Home'}</div>
                    </Link>
                    <div className={''}>
                      <div className="mb-2  text-gray-800 ">
                        <div className='p-2 rounded flex justify-between hover:bg-gray-200' onClick={() => setShowServiceMobile(!showServiceMobile)}>
                          <div>{'On Demand Service'}</div>
                          <MdOutlineKeyboardArrowRight className={`rotate-0 duration-300 ${showServiceMobile && 'rotate-90'}`} size={'1.2em'} />
                        </div>
                        <div className={` duration-300 overflow-hidden ${showServiceMobile ? 'h-60' : 'h-0'} `}>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Jasa Instalasi Jaringan LAN'}</div>
                          </Link>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Jasa Instalasi Wireless & Hotspot'}</div>
                          </Link>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Jasa Instalasi Maintance Server'}</div>
                          </Link>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Jasa Instalasi Fiber Optic'}</div>
                          </Link>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Jasa Instalasi CCTV'}</div>
                          </Link>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Suplier Hardware'}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link href={'/it-support'} className={''}>
                      <div className="p-2 mb-2 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Managed IT Support'}</div>
                    </Link>
                    <div className={''}>
                      <div className="mb-2  text-gray-800 ">
                        <div className='p-2 rounded flex justify-between hover:bg-gray-200' onClick={() => setShowProfileMobile(!showProfileMobile)}>
                          <div>{'Profile'}</div>
                          <MdOutlineKeyboardArrowRight className={`rotate-0 duration-300 ${showProfileMobile && 'rotate-90'}`} size={'1.2em'} />
                        </div>
                        <div className={`duration-300 overflow-hidden ${showProfileMobile ? 'h-20' : 'h-0'} `}>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Tentang Kami'}</div>
                          </Link>
                          <Link href={'#'} className={''}>
                            <div className='pl-6 pr-2 h-10 flex items-center rounded text-gray-600 text-sm capitalize duration-300 hover:bg-gray-200 hover:text-gray-700'>{'Company Legal'}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link href={'#'} className={''}>
                      <div className="p-2 mb-2 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Portfolio'}</div>
                    </Link>
                    <Link href={'#'} className={''}>
                      <div className="p-2 mb-2 rounded duration-300 text-gray-800 hover:bg-gray-200">{'Kontak'}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default Header;
