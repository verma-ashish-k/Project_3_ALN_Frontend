import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FirebaseContext } from '../providers/FirebaseProvider';
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { UserProfileProps } from './EditProfile';
import { TfiVideoClapper, TfiEmail, TfiLocationPin } from 'react-icons/tfi';
import { CgOrganisation } from 'react-icons/cg';
import Documentaries from './Documentaries';
import { Link } from 'react-router-dom';
import imgPlaceHolder from '../assets/coverTemp.jpg';
import tempAvatar from '../assets/avatar-temp.png';

export default function profileData() {
  const fbContext = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const db = fbContext.db;
  const store = fbContext.store;
  const [profileData, setProfileData] = useState<UserProfileProps>();
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  useEffect(() => {
    setIsCurrentUser(user.uid === user.currentUser?.uid);
    console.log('loading infomation from doc', user.uid);

    const docRef = doc(db, 'userInfo', user.uid);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const userInfoData = {
          ...docSnap.data(),
          DOC_ID: docSnap.id,
        } as UserProfileProps;
        setProfileData(userInfoData);
      } else {
        console.log('No such document!');
      }
    });

    return unsubscribe;
  }, [user]);

  return (
    <>
      <div className='pt-16'>
        <main className='profile-page'>
          <section className='relative block h-[500px]'>
            <div
              className='absolute top-0 w-full h-full bg-center bg-cover'
              style={{
                backgroundImage: `url("${
                  profileData?.coverPhoto
                    ? profileData.coverPhoto
                    : imgPlaceHolder
                }")`,
              }}
            >
              <span
                id='blackOverlay'
                className='w-full h-full absolute opacity-50 bg-black'
              />
            </div>
            {/* <div
              className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]'
              style={{ transform: 'translateZ(0px)' }}
            >
              <svg
                className='absolute bottom-0 overflow-hidden'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x={0}
                y={0}
              >
                <polygon
                  className='text-blueGray-200 fill-current'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div> */}
          </section>
          <section className='relative py-16 bg-blueGray-200'>
            <div className='container mx-auto px-4'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
                <div className='px-6'>
                  <div className='flex flex-wrap justify-center lg:flex-row'>
                    <div className='lg:w-3/12 px-4 lg:order-1 flex justify-center lg:mr-96'>
                      <img
                        alt='...'
                        src={
                          profileData?.photo ? profileData.photo : tempAvatar
                        }
                        className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-24 max-w-[150px]  md:max-w-[200px] md:-mt-32 items-center justify-center content-center'
                      />
                    </div>
                    <div className='w-full mt-16 lg:w-4/12 px-4 lg:order-2 lg:mt-1 transition-all'>
                      <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                        <div className='mr-4 p-3 text-center'>
                          <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                            22
                          </span>
                          <span className='text-sm text-blueGray-400'>
                            Friends
                          </span>
                        </div>
                        <div className='mr-4 p-3 text-center'>
                          <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                            10
                          </span>
                          <span className='text-sm text-blueGray-400'>
                            Videos
                          </span>
                        </div>
                        <div className='lg:mr-4 p-3 text-center'>
                          <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                            89
                          </span>
                          <span className='text-sm text-blueGray-400'>
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 lg:order-3 lg:ml-[55%]'>
                      <iframe
                        src={profileData?.introVideo}
                        width='320'
                        height=''
                        frameBorder='0'
                        allow='autoplay; fullscreen; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className='flex justify-center lg:justify-start lg:content-center lg:items-start space-x-2'>
                    {isCurrentUser ? (
                      <div>
                        <button className='btn btn-sm btn-primary-content hover:btn-primary-focus rounded-md'>
                          Connect
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Link to='/home/editprofile'>
                          <button className='btn btn-sm btn-primary-content ml-5 hover:btn-primary-focus rounded-md'>
                            Edit Profile
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className='text-center mt-8 lg:text-start lg:ml-5 transition-all'>
                    <h3 className='text-4xl font-semibold leading-normal text-blueGray-700 mb-2'>
                      {profileData?.firstName + ' ' + profileData?.lastName}
                    </h3>
                    <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                      {/* <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400' /> */}
                      <TfiLocationPin size={'20px'} className='inline mr-2' />
                      {profileData?.country +
                        ', ' +
                        profileData?.stateProvince +
                        ', ' +
                        profileData?.city}
                    </div>
                    <div className='mb-2 text-blueGray-600 mt-2'>
                      {/* <i className='fas fa-briefcase mr-2 text-lg text-blueGray-400' /> */}
                      <TfiVideoClapper
                        size={'20px'}
                        className='inline py-auto mr-2'
                      />
                      Content Creator
                    </div>
                    <div className='mb-2 text-blueGray-600'>
                      <TfiEmail size={'20px'} className='inline mr-2' />
                      {/* <i className='fas fa-university mr-2 text-lg text-blueGray-400' /> */}
                      {/* <CgOrganisation size={'20px'} className='inline  mr-2' /> */}
                      {profileData?.emailAddress}
                    </div>
                  </div>
                  <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
                    <div className='flex flex-wrap justify-center'>
                      <div className='w-full lg:w-9/12 px-4'>
                        <h1 className='text-xl font-semibold text-primary-content mb-5'>
                          About Me
                        </h1>
                        <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                          {profileData?.about}
                        </p>
                        {/* <a href='#pablo' className='font-normal text-pink-500'>
                          Show more
                        </a> */}
                      </div>
                    </div>
                    <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
                      <div className='flex flex-wrap justify-center'>
                        <div className='w-full lg:w-9/12 px-4 text-xl font-semibold'>
                          <h1>{profileData?.firstName}'s Videos</h1>
                          <Documentaries />
                          {/* <a
                            href='#pablo'
                            className='font-normal text-pink-500'
                          >
                            Show more
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
