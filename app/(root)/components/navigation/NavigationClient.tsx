'use client'

import { navBarList, navbarItem } from '@/components/data/constants'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { HiBars3, HiOutlineHomeModern, HiOutlineUser } from 'react-icons/hi2'


const NavigationClient = () => {

  const router = useRouter();
  const path = usePathname();

  const [navbarTextColor, setNavbarTextColor] = React.useState('text-white');
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [showLoggedInMenu, setShowLoggedInMenu] = React.useState(false);

  const loggedIn = true;
  const userSurname = 'Salomi';


  const navbarAbsolute = `pt-4 absolute left-0 top-0 w-full lg:h-[75px] md:h-[70px] z-[200] h-[60px] ${navbarTextColor} z-[40000]`;
  const navbarFixed = 'pt-4 z-[4000] fixed w-full lg:h-[75px] md:h-[70px] h-[60px] lg:-top-[75px] md:-top-[70px] -top-[60px] bg-gray-50 text-black transform lg:translate-y-[65px] md:translate-y-[60px] translate-y-[50px] transition ease-in-out duration-600 shadow shadow-[4px_4px_4px_0_rgba(0, 0, 0, 0.3)]';
  const [navbarState, setNavbarState] = React.useState(navbarAbsolute);


  const toggleNavbarState = React.useCallback(() => {
    if (window.scrollY >= 120) {
      setNavbarState(navbarFixed);
    } else {
      setNavbarState(navbarAbsolute);
    }

  }, [navbarAbsolute]);

  React.useEffect(() => {
    const selectedRoutes = path === '/';

    if (!selectedRoutes) {
      setNavbarTextColor('text-black')
    }

  }, [path]);

  React.useEffect(() => {
    toggleNavbarState();
    
    window.addEventListener('scroll', toggleNavbarState)
  }, [toggleNavbarState]);

  return (
    <div className={navbarState}>
      <div className="w-full h-full flex lg:px-[4%] md:px-[3%] px-[5%] py-3 items-center md:justify-between gap-4">
        {/* hamburger menu for mobile query*/}
        <div className='md:hidden cursor-pointer'>
          <HiBars3 size={30} onClick={() => setShowMobileNav((prevState) => !prevState)}/>
        </div>

        {/* main navbar header */}
        <div className='lg:min-w-[30%] md:min-w-[35%] w-full flex justify-between items-center h-[40px]'>
          <div>
            <Link href={'/'} className='flex items-center gap-4'>
              <HiOutlineHomeModern size={26}/>
              <p className='lg:text-2xl md:text-xl text-lg'>Nomeo Suites</p>
            </Link>
          </div>
        </div>
        <div className='hidden md:flex lg:gap-8 gap-6 lg:min-w-[70%] md:min-w-[65%] justify-end h-full items-center'>
          {/* desktop navlinks*/}
          <div className="flex items-center">
            { navBarList.map((item:navbarItem,index:number) => (
              <Link key={index} href={item.path} className='capitalize lg:text-lg py-1.5 lg:px-4 px-3 rounded-full hover:bg-gray-300 hover:text-black'>{item.label}</Link>
            ))}
          </div>

          {/* user logged in indicator for desktop & login link */}
          <div>
            { loggedIn ? 
              <button onClick={() => setShowLoggedInMenu((prevState) => !prevState)} className='flex lg:px-5 px-3 py-2 rounded-full bg-neutral-700 text-white items-center'>
                <HiOutlineUser size={20} className='lg:mr-3 mr-2' />
                <div className='border-l lg:text-lg lg:pl-3 pl-2'>{userSurname}</div>
              </button> :
              <button onClick={() => router.push('/login')} className='flex lg:px-5 px-3 py-2 rounded-full bg-neutral-700 text-white items-center'>
                <HiOutlineUser size={20} className='lg:mr-3 mr-2' />
                <div className='border-l lg:text-lg lg:pl-3 pl-2'>Login</div>
              </button>
            }
          </div>
        </div>

        {/* user logged in indicator for mobile & login link */}
        <div className='md:hidden'>
          { loggedIn ? 
            <div className='flex lg:px-5 px-3 py-2 rounded-full bg-neutral-700 text-white items-center'>
              <HiOutlineUser size={18} className='lg:mr-3 mr-2' />
              <div className='border-l lg:text-lg lg:pl-3 pl-2'>{userSurname}</div>
            </div> :
            <button onClick={() => router.push('/login')} className='flex lg:px-5 px-3 py-2 rounded-full bg-neutral-700 text-white items-center'>
              <HiOutlineUser size={18} className='lg:mr-3 mr-2' />
              <div className='border-l lg:text-lg lg:pl-3 pl-2' >Login</div>
            </button>
          }
        </div>
      </div>

      {/* mobile interface menu */}
      { showMobileNav &&
        <div className="slide-in-left md:hidden absolute left-[4%] min-w-[180px] top-[70px] bg-white text-black rounded-md drop-shadow-md overflow-hidden">
          <div className="flex flex-col">
            {navBarList.map((item:navbarItem ,index:number) => (
              <Link key={index} href={item.path} className='capitalize py-2 pl-4 hover:bg-neutral-700 hover:text-white active:bg-neutral-700 active:text-white'>{item.label}</Link>
            ))}
          </div>
          {loggedIn && 
            <React.Fragment>
              <hr/>
              <Link className='px-3 py-2 lg:text-lg block hover:bg-neutral-700 hover:text-white active:bg-neutral-700 active:text-white' href={'/dashboard'}>
                Dashboard
              </Link>
              <button className='px-3 py-2 lg:text-lg capitalize hover:bg-neutral-700 hover:text-white w-full text-left active:bg-neutral-700 active:text-white'>
                sign out
              </button>
            </React.Fragment>
          }
        </div>
      }

      {/* sign out & link to dashboard */}
      { showLoggedInMenu &&
        <div className='slide-in-left absolute right-[3%] bg-white text-black rounded-md top-[75px] lg:top-[80px] min-w-[140px] overflow-hidden hidden md:block drop-shadow-md'>
          <Link className='px-3 py-2 block hover:bg-gray-300' href={'/dashboard'}>
            Dashboard
          </Link>
          <hr/>
          <button className='px-3 py-2 capitalize hover:bg-gray-300 w-full text-left'>
            sign out
          </button>
        </div>
      }
    </div>
  )
}

export default NavigationClient;