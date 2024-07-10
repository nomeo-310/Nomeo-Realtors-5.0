import React from 'react'
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';
import { currentUserProps } from '@/types/types';

type postClientProps = {
  currentUser: currentUserProps
}

const PostClient = ({currentUser}: postClientProps) => {
  const [activeTab, setActiveTab] = React.useState('create-post');

  return (
    <div className='w-full h-full'>
      { activeTab === 'create-post' && <CreatePost setActiveTab={setActiveTab} /> }
      { activeTab === 'all-posts' && <AllPosts setActiveTab={setActiveTab} currentUser={currentUser}/> }
    </div>
  )
}

export default PostClient;