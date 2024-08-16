import React from 'react'
import CreatePost from './CreatePost';
import { currentUserProps } from '@/types/types';
import AllAgentBlogs from '../../profile/components/AllAgentBlogs';

type postClientProps = {
  currentUser:currentUserProps
}

const PostClient = ({currentUser}: postClientProps) => {
  const [activeTab, setActiveTab] = React.useState('create-post');

  return (
    <div className='w-full h-full'>
      { activeTab === 'create-post' && <CreatePost setActiveTab={setActiveTab} /> }
      { activeTab === 'all-posts' && 
        <div className='w-full min-h-[73.5vh] flex slide-in-left'>
          <div className="flex flex-col lg:gap-4 gap-3 w-full">
            <div className='flex w-full lg:gap-6 gap-4 cursor-pointer'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>All Posts</h2>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('create-post')}>Create Post</h2>
            </div>
            <AllAgentBlogs user={currentUser} useAsAllPost useAgent/>
          </div>
        </div>
      }
    </div>
  )
}

export default PostClient;