import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { photoCrop } from '../utils/photoCrop';
import { uploadFileStorage, deleteFileURL } from '../utils/fireStorageAPI';
import { VideoParams } from '../utils/fireStoreAPI';
import { countryList } from '../utils/countyOptions';

export interface UserProfileProps {
  about: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  country: string;
  streetAddress: string;
  city: string;
  stateProvince: string;
  zipPostal: string;
  interests: string;
  photo: string;
  coverPhoto: string;
  introVideo: string;
  DOC_ID: string;
  roles?: { admin: boolean; creator?: boolean };
}

export default function userInfo() {
  const fbContext = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const db = fbContext.db;
  const store = fbContext.store;

  const [userProfile, setUserProfile] = useState<UserProfileProps>({
    about: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    country: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    zipPostal: '',
    interests: '',
    photo: '',
    coverPhoto: '',
    introVideo: '',
    DOC_ID: '',
  });

  useEffect(() => {
    if (!user) return;
    console.log('loading information from doc', user.uid);

    const docRef = doc(db, 'userInfo', user.uid);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const userData = {
          ...docSnap.data(),
          DOC_ID: docSnap.id,
        } as UserProfileProps;
        setUserProfile(userData);
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    });

    return unsubscribe;
  }, [user]);
  ``;

  const onChangeAvatar = async (e: any) => {
    let file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const { imageUrl, imageFile } = await photoCrop(
      url,
      `avatar_${user.uid}`,
      300,
      300,
      'crop'
    );
    console.log('the avatar cropped', imageUrl);

    if (userProfile.photo) {
      deleteFileURL(store, userProfile.photo);
    }
    const downloadUrl = await uploadFileStorage(
      store,
      user.uid,
      imageFile,
      'user',
      'profile'
    );
    setUserProfile({ ...userProfile, photo: downloadUrl });
    const docRef = doc(db, 'userInfo', user.uid);
    await updateDoc(docRef, { photo: downloadUrl });
  };

  const onChangeCover = async (e: any) => {
    let file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const { imageUrl, imageFile } = await photoCrop(
      url,
      `cover_${user.uid}`,
      820,
      360,
      'crop'
    );
    console.log('the cover cropped', imageUrl);
    if (userProfile.coverPhoto) {
      deleteFileURL(store, userProfile.coverPhoto);
    }
    const downloadUrl = await uploadFileStorage(
      store,
      user.uid,
      imageFile,
      'user',
      'profile'
    );
    setUserProfile({ ...userProfile, coverPhoto: downloadUrl });
    const docRef = doc(db, 'userInfo', user.uid);
    await updateDoc(docRef, { coverPhoto: downloadUrl });
  };

  const onChangeVideo = async (e: any) => {
    let file = e.target.files[0];

    const downloadUrl = await uploadFileStorage(
      store,
      user.uid,
      file,
      'user',
      'profile'
    );
    setUserProfile({ ...userProfile, introVideo: downloadUrl });
    const docRef = doc(db, 'userInfo', user.uid);
    await updateDoc(docRef, { introVideo: downloadUrl });
  };

  const onChangeHandle = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserProfile({ ...userProfile, [name]: value });
  };

  const onClickSaveHandle = async (e: any) => {
    e.preventDefault();
    const docRef = doc(db, 'userInfo', user.uid);
    await updateDoc(docRef, { ...userProfile });
  };

  return (
    <div className='px-2 pt-20 mx-auto lg:max-w-7xl shadow-md'>
      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-base-content'>
                Profile
              </h3>
              <p className='mt-1 text-sm text-base-content'>
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form action='#' method='POST'>
              <div className='shadow sm:overflow-hidden sm:rounded-md'>
                <div className='space-y-6 bg-primary-focus rounded-lg px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-3 gap-6'>
                    <div className='col-span-3 sm:col-span-2'></div>
                  </div>

                  <div>
                    <label
                      htmlFor='about'
                      className='block text-sm font-medium text-base-content'
                    >
                      About
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='about'
                        name='about'
                        rows={3}
                        className='mt-1 block w-full rounded-md border-accent placeholder-primary-content bg-slate-300 shadow-sm focus:border-neutral focus:ring-neutral sm:text-sm'
                        placeholder='Tell us about yourself'
                        defaultValue={''}
                        onChange={onChangeHandle}
                        value={userProfile.about}
                      />
                    </div>
                    <p className='mt-2 text-sm text-base-content'>
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-base-content'>
                      Photo
                    </label>

                    <div className='avatar mt-1'>
                      {userProfile.photo ? (
                        <div className=' avatar'>
                          <div className=' w-14 rounded-full'>
                            <img src={userProfile.photo}></img>
                          </div>
                        </div>
                      ) : (
                        <span className='inline-block h-12 w-12 overflow-hidden rounded-full bg-primary'>
                          <svg
                            className='h-full w-full text-base-content'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                          </svg>
                        </span>
                      )}

                      <label htmlFor='avatarUpload' className='btn mx-3'>
                        <span>Change</span>
                        <input
                          id='avatarUpload'
                          name='avatar'
                          type='file'
                          accept='image/*'
                          className='sr-only'
                          onChange={onChangeAvatar}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-base-content'>
                      Cover photo
                    </label>
                    <div className=' group relative mt-1 aspect-[2/1] sm:aspect-[3/1] md:aspect-[4/1] w-full rounded-md border-2 border-dashed border-neutral-content overflow-hidden'>
                      <img
                        className=' absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 rounded-md z-10'
                        src={userProfile.coverPhoto}
                      />
                      <div className=' absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center z-0 group-hover:z-[11] bg-slate-100 w-40 h-28 rounded-lg drop-shadow-md opacity-60'></div>
                      <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center z-0  group-hover:z-[11]'>
                        <svg
                          className='mx-auto h-12 w-12 text-base-content opacity-100'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <div className='flex text-sm text-base-content'>
                          <label
                            htmlFor='file-upload'
                            className='badge cursor-pointer text-center'
                          >
                            <span className='mx-auto'>Upload a file</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              onChange={onChangeCover}
                            />
                          </label>
                        </div>
                        <p className='text-xs text-base-content'>
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-base-content'>
                      Profile Video
                    </label>
                    <div className=' group relative mt-1 aspect-video w-full rounded-md border-2 border-dashed border-neutral-content overflow-hidden'>
                      <video
                        className=' absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 rounded-md z-10'
                        src={userProfile.introVideo}
                        controls
                      />
                      <div className=' absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center z-0 group-hover:z-[11] bg-slate-100 w-40 h-28 rounded-lg drop-shadow-md opacity-60'></div>
                      <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center z-0  group-hover:z-[11]'>
                        <svg
                          className='mx-auto h-12 w-12 text-base-content opacity-100'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <div className='flex text-sm text-base-content'>
                          <label
                            htmlFor='vidFileUpload'
                            className='badge cursor-pointer text-center'
                          >
                            <span className='mx-auto'>Upload a file</span>
                            <input
                              id='vidFileUpload'
                              name='vidFileUpload'
                              type='file'
                              className='sr-only'
                              onChange={onChangeVideo}
                            />
                          </label>
                        </div>
                        <p className='text-xs text-base-content'>
                          mp4,avi,etc up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-base-content'>
                Personal Information
              </h3>
              <p className='mt-1 text-sm text-base-content'>
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form action='#' method='POST'>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-primary-focus rounded-lg px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-base-content'
                      >
                        First name
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        id='first-name'
                        autoComplete='given-name'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                        onChange={onChangeHandle}
                        value={userProfile.firstName}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-base-content'
                      >
                        Last name
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        onChange={onChangeHandle}
                        id='last-name'
                        autoComplete='family-name'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                        value={userProfile.lastName}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium text-base-content'
                      >
                        Email address
                      </label>
                      <input
                        type='text'
                        name='emailAddress'
                        onChange={onChangeHandle}
                        id='email-address'
                        autoComplete='email'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                        value={userProfile.emailAddress}
                      />
                    </div>

                    <div className='col-span-3'>
                      <label
                        htmlFor='country'
                        className='block text-sm font-medium text-base-content'
                      >
                        Country
                      </label>
                      <select
                        id='country'
                        name='country'
                        onChange={onChangeHandle}
                        autoComplete='country-name'
                        value={userProfile.country}
                        className='mt-1 block w-full border border-gray-300 bg-slate-300 text-secondary rounded-lg py-2 px-3 shadow-sm'
                      >
                        <option>Choose</option>
                        {countryList.map((country) => (
                          <option>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='street-address'
                        className='block text-sm font-medium text-base-content'
                      >
                        Street address
                      </label>
                      <input
                        type='text'
                        name='street-address'
                        onChange={onChangeHandle}
                        id='street-address'
                        autoComplete='street-address'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                        value={userProfile.streetAddress}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label
                        htmlFor='city'
                        className='block text-sm font-medium text-base-content'
                      >
                        City
                      </label>
                      <input
                        type='text'
                        name='city'
                        onChange={onChangeHandle}
                        id='city'
                        autoComplete='address-level2'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                        value={userProfile.city}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                      <label
                        htmlFor='region'
                        className='block text-sm font-medium text-base-content'
                      >
                        State / Province
                      </label>
                      <input
                        type='text'
                        name='stateProvince'
                        onChange={onChangeHandle}
                        value={userProfile.stateProvince}
                        id='stateProvince'
                        autoComplete='address-level1'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                      <label
                        htmlFor='postal-code'
                        className='block text-sm font-medium text-base-content'
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        value={userProfile.zipPostal}
                        onChange={onChangeHandle}
                        autoComplete='postal-code'
                        className='input input-bordered input-sm w-full max-w-xs mt-1 bg-slate-300'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-base-content'>
                Interests
              </h3>
              <p className='mt-1 text-sm text-base-content'>
                Decide which topics interest you.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='space-y-6 bg-primary-focus rounded-lg px-4 py-5 sm:p-6'>
                  <fieldset>
                    <legend className='contents text-base font-medium text-base-content'>
                      Interests
                    </legend>
                    <p className='text-sm text-base-content'>
                      Choose your top 3
                    </p>
                    <div className='mt-4 space-y-4'>
                      <div className='flex items-center'>
                        <input
                          id='travel'
                          name='travel-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='travel'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Travel
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='music'
                          name='music-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='music'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Music
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='current-events'
                          name='current-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='current-events'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Current Events
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='investment'
                          name='investment-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='investment'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Investment Opportunities
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='fullLength'
                          name='fullLength-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='fullLength'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Full-Length Movies
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='documentaries'
                          name='documentaries-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='documentaries'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Documentaries
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='short-films'
                          name='short-films-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='short-films'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Short Films
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='networking'
                          name='networking-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='networking'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Networking
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='podcasts'
                          name='podcasts-interests'
                          onChange={onChangeHandle}
                          type='checkbox'
                          className='checkbox checkbox-secondary checkbox-sm'
                        />
                        <label
                          htmlFor='podcasts'
                          className='ml-3 block text-sm font-medium text-base-content'
                        >
                          Podcasts
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className=' px-4 py-3 text-right sm:px-6'>
                  <button
                    className='block btn btn-sm lg:btn-md lg:btn-wide lg:-ml-3'
                    onClick={(e) => onClickSaveHandle(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
