'use client'

import Input from '@/components/shared/Input'
import React from 'react'
import { HiAtSymbol, HiOutlineCloudArrowUp, HiXMark } from 'react-icons/hi2'
import { LuImagePlus } from 'react-icons/lu'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import Button from '@/components/shared/Button'
import Image from 'next/image'
import { toast } from 'sonner'
import { uploadImage } from '@/hooks/uploadImages'
import { deleteCloudinaryImages } from '@/libs/actions/deleteCloudinaryImage'

const ReactQuill = dynamic(() => {
  return import ('react-quill')
}, {ssr: false});


const CreatePost = () => {
  const [title, setTitle] = React.useState('');
  const [editorContent, setEditorContent] = React.useState('');

  const [imageFile, setImageFile] = React.useState<File| null>(null);
  const [postBanner, setPostBanner] = React.useState({secure_url: '', public_id: ''});
  const [imageUploaded, setImageUploaded] = React.useState(false);

  const onChangeImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostBanner({...postBanner, secure_url: reader.result as string});
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadBannerImage = async() => {
    let loadingImageToast = toast.loading("...Uploading");
    const data = {image: imageFile, uploadPreset: 'postImages'}
    try {
      const imageData = await uploadImage(data)
      const imageUrls = {public_id: imageData?.public_id, secure_url: imageData?.secure_url};
      setPostBanner(imageUrls);
      toast.dismiss(loadingImageToast);
      toast.success("Image successfully uploaded");
      setImageUploaded(true);
    } catch (error) {
      toast.dismiss(loadingImageToast);
      toast.error("Error uploading image");
    }
  };

  const resetImageFile = () => {
    setImageFile(null)
    setPostBanner({...postBanner, secure_url: ''})
  };

  const deleteImageFile = () => {
    if (postBanner.public_id !== '') {
      deleteCloudinaryImages(postBanner.public_id)
      setImageFile(null)
      setPostBanner({...postBanner, secure_url: ''})
    }
  };

  console.log(postBanner);

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
          <div className="w-full">
            <label htmlFor="postBannerImage" className='w-full'>
              <div className="overflow-hidden relative w-full aspect-video bg-gray-200 rounded flex items-center justify-center flex-col text-neutral-600 lg:text-lg cursor-pointer group">
                {postBanner.secure_url ? 
                  <Image src={postBanner.secure_url} priority fill alt='imageBanner' className='object-cover'/> : 
                  <Image src={'/images/default_banner.png'} priority fill alt='imageBanner' className='object-contain'/>
                }
                <div className="z-[200] absolute left-0 top-0 w-full h-full flex flex-col bg-black/40 text-white opacity-0 group-hover:opacity-100 justify-center items-center">
                  { postBanner.secure_url && !imageUploaded ?
                    <div className='flex items-center gap-5 p-3'>
                      <button className='md:p-2.5 p-2 rounded-full bg-green-600 text-white' onClick={uploadBannerImage}>
                        <HiOutlineCloudArrowUp size={25} className='hidden md:block'/>
                        <HiOutlineCloudArrowUp size={22} className='md:hidden'/>
                      </button>
                      <button className='md:p-2.5 p-2 rounded-full bg-red-400' onClick={resetImageFile}>
                        <HiXMark size={25} className='hidden md:block'/>
                        <HiXMark size={22} className='md:hidden'/>
                      </button>
                    </div> :
                    imageUploaded && postBanner.secure_url ?
                    <button className='md:p-2.5 p-2 rounded-full bg-red-400' onClick={deleteImageFile}>
                      <HiXMark size={25} className='hidden md:block'/>
                      <HiXMark size={22} className='md:hidden'/>
                    </button> :
                    <>
                      <LuImagePlus size={100} className='lg:block hidden'/>
                      <LuImagePlus size={80} className='hidden md:block lg:hidden'/>
                      <LuImagePlus size={60} className='md:hidden'/>
                      <span>Add post banner</span>
                    </>
                  }
                </div>
                <Input type='file' id='postBannerImage'  hidden  accept=".png, .jpg, .jpeg" className='cursor-pointer' onChange={onChangeImageFile} />
              </div>
            </label>
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