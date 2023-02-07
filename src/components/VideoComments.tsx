import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { UserDBContext } from '../providers/UserDBProvider';
import { updateMovie, updateMovieComments } from '../utils/fireStoreAPI';
import tempAvatar from '../assets/avatar-temp.png';

interface VideoCommentsProp {
  videoId: string;
  comments: {
    avatar: string;
    name: string;
    content: string;
    commentTime: string;
  }[];
}

function VideoComments({ videoId, comments }: VideoCommentsProp) {
  const fbContext = useContext(FirebaseContext);
  const { user, userRoles } = useContext(AuthContext);
  const { userProfile } = useContext(UserDBContext);
  const db = fbContext.db;
  const [currentComment, setCurrentComment] = useState('');

  const onClickHandleComment = async () => {
    await updateMovieComments(
      db,
      videoId,
      user.uid,
      userProfile.photo,
      `${user.firstName} ${user.lastName}`,
      currentComment
    );
  };
  console.log('comments', comments);

  return (
    <>
      <div className='antialiased mx-auto max-w-screen-sm'>
        <h3 className='mb-4 text-lg font-semibold text-primary-content'>
          Comments
        </h3>

        {comments?.map((comment) => {
          let avatar = '';
          if (!comment.avatar || comment.avatar === '') {
            avatar = tempAvatar;
          } else {
            avatar = comment.avatar;
          }
          return (
            <>
              <div className='space-y-4'>
                <div className='flex'>
                  <div className='flex-shrink-0 mr-3'>
                    <img
                      className='mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10'
                      src={avatar}
                      alt=''
                    />
                  </div>
                  <div className='flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed'>
                    <strong>{comment.name}</strong>{' '}
                    <span className='text-xs text-gray-400'>
                      {new Date(
                        comment?.commentTime?.seconds * 1000
                      ).toLocaleTimeString()}
                    </span>
                    <p className='text-sm'>{comment.content}</p>
                    {/* <div className='mt-4 flex items-center'>
                      <div className='flex -space-x-2 mr-2'>
                        <img
                          className='rounded-full w-6 h-6 border border-white'
                          src={avatar}
                          alt=''
                        />
                        <img
                          className='rounded-full w-6 h-6 border border-white'
                          src={avatar}
                          alt=''
                        />
                      </div>
                      <div className='text-sm text-gray-500 font-semibold'>
                        5 Replies
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <textarea
          className='textarea w-full mt-2'
          placeholder='comment'
          onChange={(e) => setCurrentComment(e.target.value)}
        ></textarea>
        <button className='btn btn-primary' onClick={onClickHandleComment}>
          Submit
        </button>
      </div>
    </>
  );
}

export default VideoComments;