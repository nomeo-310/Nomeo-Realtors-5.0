import React from 'react'
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';

type Props = {}

const PostClient = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState('create-post');

  return (
    <div className='w-full h-full'>
      { activeTab === 'create-post' && <CreatePost setActiveTab={setActiveTab} /> }
      { activeTab === 'all-posts' && <AllPosts setActiveTab={setActiveTab} /> }
    </div>
  )
}

export default PostClient