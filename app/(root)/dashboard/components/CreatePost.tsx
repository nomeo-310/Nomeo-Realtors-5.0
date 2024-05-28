'use client'

import Input from '@/components/shared/Input'
import React from 'react'
import { HiAtSymbol } from 'react-icons/hi2'
import { LuImagePlus } from 'react-icons/lu'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import Button from '@/components/shared/Button'

const ReactQuill = dynamic(() => {
  return import ('react-quill')
}, {ssr: false});


const CreatePost = () => {
  const [title, setTitle] = React.useState('');
  const [editorContent, setEditorContent] = React.useState('');

  console.log(editorContent);

  const modules = {
    toolbar: [
      [{header: '1'}, {header: '2'}, {font: []}],
      [{size: []}],
      [{color: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link', 'image', 'video', 'direction'],
      ['clean'],
      [
        {list: 'ordered'},
        {list: 'bullet'},
        {indent: '+1'},
        {indent: '-1'},
        {script: 'sub'},
        {script: 'super'}
      ],
    ],
    clipboard: {
      matchVisual: false
    }
  }

  return (
    <div className='w-full h-full flex items-center'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full lg:w-[80%] xl:w-[70%]">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 w-full'>Create Post</h2>
        <div className="flex flex-col gap-3">
          <Input
            type='text'
            icon={HiAtSymbol}
            value={title}
            onChange={(event) =>setTitle(event.target.value)}
            placeholder='add title of blog post'
          />
          <div className="w-full aspect-video bg-gray-200 rounded flex items-center justify-center flex-col text-neutral-600 lg:text-lg cursor-pointer">
            <LuImagePlus size={100} className='lg:block hidden'/>
            <LuImagePlus size={80} className='hidden md:block lg:hidden'/>
            <LuImagePlus size={60} className='md:hidden'/>
            <span className='text-gray-400'>Add post banner</span>
          </div>
          <div className='w-full flex flex-col'>
            <ReactQuill
              theme='snow'
              value={editorContent}
              onChange={(value) => setEditorContent(value)}
              modules={modules}
              placeholder='Create blog post...'
              className='bg-gray-200'
            />
          </div>
          <div className='mt-8 flex items-center'>
            <Button onClick={() => {}} type='button'>
              Create Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost