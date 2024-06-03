import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import TextArea from '@/components/shared/TextArea'
import { uploadImage } from '@/hooks/uploadImages'
import { deleteCloudinaryImages } from '@/libs/actions/deleteCloudinaryImage'
import Image from 'next/image'
import React from 'react'
import { HiOutlineBriefcase, HiOutlineCloudArrowUp, HiOutlineCreditCard, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone, HiOutlineSparkles, HiOutlineUser, HiXMark} from 'react-icons/hi2'
import { LuImagePlus } from 'react-icons/lu'
import { toast } from 'sonner'

type currentUserProps = {
  image: string
  name: string
  email:string
  mobileNumber: string
  city: string
  state: string
  agencyName: string
  officeAddress: string
  officeNumber: string
  inspectionFee: number
  bio: string
  isAgent: boolean
}

type profileProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  user: currentUserProps
}

const EditProfile = ({setActiveTab, user}:profileProps) => {
  const isAgentLoggedIn = true;

  const nairaSign:string = String.fromCodePoint(8358);

  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [newProfileImage, setNewProfileImage] = React.useState({public_id: '', secure_url: ''});
  const [imageUploaded, setImageUploaded] = React.useState(false);


  const [mobileNum, setMobileNum] = React.useState(user.mobileNumber);
  const [officeNum, setOfficeNum] = React.useState(user.officeNumber);

  const [currentState, setCurrentState] = React.useState(user.state);
  const [currentCity, setCurrentCity] = React.useState(user.city);

  const [agencyName, setAgencyName] = React.useState(user.agencyName);
  const [agencyAddress, setAgencyAddress] = React.useState(user.officeAddress);

  const [agentFee, setAgentFee] = React.useState(user.inspectionFee);

  const [bio, setBio] = React.useState(user.bio);

  const onChangeAgentFee = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setAgentFee(value);
  };

  const onChangeImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfileImage({...newProfileImage, secure_url: reader.result as string});
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadProfileImage = async() => {
    let loadingImageToast = toast.loading("...Uploading");
    const data = {image: imageFile, uploadPreset: 'profileImages'}
    try {
      const imageData = await uploadImage(data)
      const imageUrls = {public_id: imageData?.public_id, secure_url: imageData?.secure_url};
      setNewProfileImage(imageUrls);
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
    setNewProfileImage({...newProfileImage, secure_url: ''})
  };

  const deleteImageFile = () => {
    if (newProfileImage.public_id !== '') {
      deleteCloudinaryImages(newProfileImage.public_id)
      setImageFile(null)
      setNewProfileImage({...newProfileImage, secure_url: ''})
    }
  };


  return (
    <div className='w-full h-full flex slide-in-left'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full lg:w-[80%] xl:w-[70%]">
        <div className='flex w-full mb-8 lg:gap-6 gap-4 cursor-pointer'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Edit Profile</h2>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('profile')}>Profile</h2>
        </div>
        <div className="flex lg:gap-4 gap-3 items-center">
          <div className='w-fit'>
            <label htmlFor="profileImage" className='w-fit'>
              <div className="aspect-square md:w-40 w-[7.5rem] rounded overflow-hidden group bg-gray-200 flex items-center justify-center relative">
                { newProfileImage.secure_url ?
                  <Image src={newProfileImage.secure_url} priority fill alt='profile_photo' className='object-cover'/> :
                  <Image src={user.image ? user.image : '/images/default_user.png'} priority fill alt='profile_photo' className='object-cover'/>
                }
                <div className="z-[200] cursor-pointer w-full h-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-active:opacity-100 absolute left-0 top-0">
                { newProfileImage.secure_url && !imageUploaded ? 
                  <div className='flex items-center gap-5 w-full justify-between p-3'>
                    <button className='md:p-2.5 p-2 rounded-full bg-green-600 text-white' onClick={uploadProfileImage}>
                      <HiOutlineCloudArrowUp size={25} className='hidden md:block'/>
                      <HiOutlineCloudArrowUp size={22} className='md:hidden'/>
                    </button>
                    <button className='md:p-2.5 p-2 rounded-full bg-red-400' onClick={resetImageFile}>
                      <HiXMark size={25} className='hidden md:block'/>
                      <HiXMark size={22} className='md:hidden'/>
                    </button>
                  </div> :
                  newProfileImage.secure_url && imageUploaded ?
                  <button className='md:p-2.5 p-2 rounded-full bg-red-400' onClick={deleteImageFile}>
                    <HiXMark size={25} className='hidden md:block'/>
                    <HiXMark size={22} className='md:hidden'/>
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
              type='text'
              icon={HiOutlineUser}
              disabled
              value={user.name}
            />
            <Input
              type='email'
              icon={HiOutlineEnvelope}
              disabled
              value={user.email}
            />
          </div>
        </div>
        <hr/>
        <React.Fragment>
          <h2 className='text-xl lg:text-2xl mb-4'>Personal Details</h2>
          <Input
            type='text'
            icon={HiOutlinePhone}
            value={mobileNum}
            placeholder='your mobile number'
            onChange={(event) => setMobileNum(event.target.value)}
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <Input
              type='text'
              icon={HiOutlineMapPin}
              value={currentCity}
              placeholder='your current city'
              onChange={(event) => setCurrentCity(event.target.value)}
            />
            <Input
              type='text'
              icon={HiOutlineMapPin}
              value={currentState}
              placeholder='your current state'
              onChange={(event) => setCurrentState(event.target.value)}
            />
          </div>
        </React.Fragment>
        {user.isAgent &&
          <React.Fragment>
            <hr/>
            <h2 className='text-xl lg:text-2xl mb-4'>Agent & Agency Details</h2>
            <Input
              type='text'
              icon={HiOutlineBriefcase}
              value={agencyName}
              placeholder='name of your agency'
              onChange={(event) => setAgencyName(event.target.value)}
            />
            <Input
              type='text'
              icon={HiOutlineMapPin}
              value={agencyAddress}
              placeholder='address of your agency'
              onChange={(event) => setAgencyAddress(event.target.value)}
            />
            <Input
              type='text'
              icon={HiOutlinePhone}
              value={officeNum}
              placeholder='your office number'
              onChange={(event) => setOfficeNum(event.target.value)}
            />
            <Input
              type='number'
              icon={HiOutlineCreditCard}
              value={agentFee || ''}
              placeholder={`your inspection fee (${nairaSign} per hour)`}
              onChange={onChangeAgentFee}
            />
          </React.Fragment>
        }
        <hr/>
        <React.Fragment>
          <h2 className='text-xl lg:text-2xl mb-4'>Personal Bio</h2>
          <TextArea
            icon={HiOutlineSparkles}
            placeholder='Tell us about yourself'
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </React.Fragment>
        <div className='mt-8 flex items-center'>
          <Button type='button' onClick={()=> console.log('update profile')}>
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;