'use client'


import React from 'react'
import Image from 'next/image'
import { formDataType } from './AgentSignupModal';
import { HiOutlineBriefcase, HiOutlineCloudArrowUp, HiOutlineMapPin, HiOutlinePhone, HiXMark } from 'react-icons/hi2';
import { LuImagePlus } from 'react-icons/lu';
import Input from '@/components/shared/Input';
import { toast } from 'sonner';
import { uploadImage } from '@/hooks/uploadImages';
import { deleteCloudinaryImages } from '@/libs/actions/deleteCloudinaryImage';
import Button from '@/components/shared/Button';
import { isValidPhoneNumber } from '@/libs/validations/validations';
import { AiFillAlipaySquare } from 'react-icons/ai';

type pageProps = {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
  formData: formDataType
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>
};

const PageTwo = ({pageNumber, setPageNumber, formData, setFormData}:pageProps) => {

  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [imageUploaded, setImageUploaded] = React.useState(false);

  const { profileImage, agencyName, officeAddress, officeNumber, mobileNumber, image, city, state } = formData;
  const noValue = agencyName === '' && officeAddress === '' && mobileNumber === '' && image === '' && officeNumber === '' ;

  const [disableNext, setDisAbleNext] = React.useState(noValue);

  const onChangeImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({...formData, profileImage:{...profileImage, secure_url: reader.result as string}});
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImageFile = (event:React.MouseEvent) => {
    event.stopPropagation();
    setImageFile(null)
    setFormData({...formData, profileImage: {...profileImage, secure_url: ''}})
  };

  const deleteImageFile = () => {
    if (formData.profileImage.public_id !== '') {
      deleteCloudinaryImages(formData.profileImage.public_id)
      setImageFile(null);
      setImageUploaded(false)
      setFormData({...formData, profileImage: {...profileImage, secure_url: '', public_id: ''}, image: ''})
    }
  };

  const uploadProfileImage = async() => {
    let loadingImageToast = toast.loading("...Uploading");
    const data = {image: imageFile, uploadPreset: 'profileImages'}
    try {
      const imageData = await uploadImage(data)
      const imageUrls = {public_id: imageData?.public_id, secure_url: imageData?.secure_url};
      setFormData({...formData, profileImage:imageUrls, image: imageUrls.secure_url});
      toast.dismiss(loadingImageToast);
      toast.success("Image successfully uploaded");
      setImageUploaded(true);
    } catch (error) {
      toast.dismiss(loadingImageToast);
      toast.error("Error uploading image");
    }
  };

  React.useEffect(() => {
    if (profileImage.secure_url !== '' && agencyName !== '' && officeAddress !== '' && officeNumber !== '' && mobileNumber !== '') {
      setDisAbleNext(false);
    };
    
  },[agencyName, image, mobileNumber, officeAddress, officeNumber, profileImage.public_id, profileImage.secure_url]);

  const onPrevious = () => {
    setPageNumber(pageNumber - 1);
  }

  const onNext = (event:React.FormEvent) => {
    event.preventDefault();

    const testMobileNumber = isValidPhoneNumber(mobileNumber);
    const testOfficeNumber = isValidPhoneNumber(officeNumber);

    if (!profileImage.secure_url) {
      toast.error('As an agent profile Image is required');

      return;
    } else if (!profileImage.public_id && imageFile) {
      toast.error('Upload the selected profile Image');

      return;
    }else if (officeAddress && officeAddress.length < 10) {
      toast.error('Add a valid office address');

      return;
    }else if (agencyName && agencyName.length < 8) {
      toast.error('Agency name should be minimum of 8 characters');

      return;
    } else if (testMobileNumber?.response === 'isNotEleventDigits') {
      toast.error('Check your mobile number, it is not 11 digits!!!');

      return;
    } else if (testMobileNumber?.response === 'isNotAValidPhoneNumber') {
      toast.error(`Your mobile number is invalid, because it starts with ${testMobileNumber.phoneNumberStartValue}`);

      return;
    } else if (testOfficeNumber?.response === 'isNotEleventDigits') {
      toast.error('Check your office number, it is not 11 digits!!!');

      return;
    } else if (testOfficeNumber?.response === 'isNotAValidPhoneNumber') {
      toast.error(`Your office number is invalid, because it starts with ${testOfficeNumber.phoneNumberStartValue}`);

      return;
    }
    else {
      setPageNumber(pageNumber + 1);
    }
  };
  
  return (
    <form className='flex flex-col gap-3' onSubmit={onNext}>
      <h2 className='text-lg lg:text-2xl'>Profile Image & Agency Details</h2>
      <div className="flex items-center gap-3">
        <div className='w-fit'>
          <label htmlFor="profileImage" className='w-fit'>
            <div className="aspect-square md:w-[8.5rem] w-[7rem] rounded overflow-hidden group bg-gray-200 flex items-center justify-center relative">
              { profileImage.secure_url ?
                <Image src={profileImage.secure_url} priority fill alt='profile_photo' className='object-cover'/> :
                <Image src={'/images/default_user.png'} priority fill alt='profile_photo' className='object-cover'/>
              }
              <div className="z-[200] cursor-pointer w-full h-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-active:opacity-100 absolute left-0 top-0">
              { profileImage.secure_url && !profileImage.public_id && !imageUploaded ? 
                <div className='flex items-center gap-5 w-full justify-between p-2'>
                  <button className='p-2 rounded-full bg-green-600 text-white' onClick={uploadProfileImage} type='button'>
                    <HiOutlineCloudArrowUp size={22} className='hidden md:block'/>
                    <HiOutlineCloudArrowUp size={18} className='md:hidden'/>
                  </button>
                  <button className='p-2 rounded-full bg-red-400' onClick={resetImageFile} type='button'>
                    <HiXMark size={22} className='hidden md:block'/>
                    <HiXMark size={18} className='md:hidden'/>
                  </button>
                </div> :
                profileImage.secure_url && profileImage.public_id ?
                <button className='p-2 rounded-full bg-red-400' onClick={deleteImageFile} type='button'>
                  <HiXMark size={22} className='hidden md:block'/>
                  <HiXMark size={18} className='md:hidden'/>
                </button> :
                <LuImagePlus size={60} className='cursor-pointer'/>
              }
              </div>
              <Input type='file' id='profileImage' hidden accept=".png, .jpg, .jpeg" className="cursor-pointer" onChange={onChangeImageFile}/>
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-3 grow">
          <Input
            icon={HiOutlineBriefcase}
            placeholder='enter name of agency'
            value={agencyName}
            onChange={(event) => setFormData({...formData, agencyName: event.target.value})}
          />
          <Input
            icon={HiOutlinePhone}
            placeholder='enter office number'
            value={officeNumber}
            onChange={(event) => setFormData({...formData, officeNumber: event.target.value})}
          />
        </div>
      </div>
      <Input
        icon={HiOutlinePhone}
        placeholder='enter mobile number'
        value={mobileNumber}
        onChange={(event) => setFormData({...formData, mobileNumber: event.target.value})}
      />
      <Input
        icon={HiOutlineMapPin}
        placeholder='enter office address'
        value={officeAddress}
        onChange={(event) => setFormData({...formData, officeAddress: event.target.value})}
      />
      <Input
        icon={HiOutlineMapPin}
        placeholder='enter city of location'
        value={city}
        onChange={(event) => setFormData({...formData, city: event.target.value})}
      />
      <Input
        icon={HiOutlineMapPin}
        placeholder='enter state of location'
        value={state}
        onChange={(event) => setFormData({...formData, state: event.target.value})}
      />
      <div className="mt-6 flex items-center justify-between">
        <Button type='button' onClick={onPrevious} className='text-lg'>
          Previous
        </Button>
        <Button type='submit' className='text-lg disabled:bg-neutral-500' disabled={disableNext}>
          Next
        </Button>
      </div>
    </form>
  )
}

export default PageTwo;