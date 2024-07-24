import React from 'react'
import CreatePost from './CreatePost';
import { featuredBlogProps } from '@/types/types';
import EmptyState from '@/components/shared/EmptyState';
import AllBlogs from '../../blogs/components/AllBlogs';
import LoadMoreButton from '@/components/shared/LoadMoreButton';

type postClientProps = {
  blogs: featuredBlogProps[]
}

const PostClient = ({blogs}: postClientProps) => {
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
            <React.Fragment>
              { blogs.length < 1 ?
                <EmptyState message='You have noblog posts yet, create some'/>  :
                <React.Fragment>
                  <AllBlogs blogList={blogs} useAsAllPost/>
                  <LoadMoreButton label="Load more" loadmoreFunction={() => {}}/>
                </React.Fragment>
              }
            </React.Fragment>
          </div>
        </div>
      }
    </div>
  )
}

export default PostClient;