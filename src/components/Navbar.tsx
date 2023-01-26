import { Fragment, useContext, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import './Navbar.css';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import ALN_LOGO_3_47 from '../assets/ALN_LOGO-3-47.png';
import AvatarTemp from '../assets/avatar-temp.png';
import { LoginForm } from './LoginForm';
import Switcher from './ThemeSwitcher';
import LandingFooter from './LandingFooter';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { AuthContext } from '../providers/AuthProvider';
import Footer from './Footer';

const navigation = [
  { name: 'Home Roots', href: '/home' },
  { name: 'Baobab Community', href: '/home/network' },
  { name: 'Documentaries', href: '/home/videos' },
  { name: 'Categories', href: '/home/Category' },
  { name: 'Login', href: '/home/LoginForm' },
  { name: 'Upload Video', href: '/home/uploadvideo' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ landing = false }: { landing?: boolean }) {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const logout = authContext.logout;

  return (
    <div className=''>
      <div className=''>
        <Disclosure
          as='nav'
          className='bg-base-200 text-base-content bg-opacity-90 fixed w-full z-10'
        >
          {({ open }) => (
            <>
              <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between text-base-content'>
                  <div className='absolute inset-y-0  text-base-content left-0 flex items-center sm:hidden'>
                    {/* Mobile menu button*/}
                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-base-content hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      ) : (
                        <Bars3Icon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start cursor-pointer'>
                    <div className='flex flex-shrink-0 items-center'>
                      <img
                        onClick={() => (window.location.href = '/')}
                        className='block h-8 w-auto lg:hidden'
                        src={ALN_LOGO_3_47}
                        alt='ALN LOGO'
                      />
                      <img
                        className='hidden h-8 w-auto lg:block'
                        onClick={() => (window.location.href = '/')}
                        src={ALN_LOGO_3_47}
                        alt='ALN LOGO'
                      />
                    </div>
                    <div className='hidden sm:ml-6 sm:block'>
                      <div className='flex space-x-4'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-base-200 text-base-content'
                                : 'text-base-content hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                    <button
                      type='button'
                      className='rounded-full bg-accent p-1 text-base-content hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    >
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                          <span className='sr-only'>Open user menu</span>
                          <img
                            className='h-8 w-8 rounded-full'
                            src={AvatarTemp}
                            alt=''
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm base-content'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-base-content'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-base-content'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <div className='mt-7 ml-2'>
                      <Switcher />
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='sm:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-base-content'
                          : 'text-base-content hover:bwhite',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {!landing && (
        <>
          <div className='min-h-screen'>
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
