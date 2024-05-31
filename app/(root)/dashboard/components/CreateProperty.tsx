'use client'


import React from 'react'
import Input from '@/components/shared/Input'
import { HiAtSymbol, HiOutlineCreditCard, HiOutlineMapPin, HiOutlineSparkles, HiOutlineSquaresPlus, HiOutlineXCircle, HiPlus, HiXMark } from 'react-icons/hi2'
import CustomSelectComponent from '@/components/shared/CustomSelectComponent'
import { getLocalGovernment } from '@/hooks/getLocalGovernment'
import { furnitureTags, propertyTags, states } from '@/components/data/constants'
import TextArea from '@/components/shared/TextArea'
import { toast } from 'sonner'
import Button from '@/components/shared/Button'
import { LuImagePlus } from 'react-icons/lu'
import { PiBathtub, PiBed, PiMapPinArea, PiToilet } from 'react-icons/pi'
import Image from 'next/image'
import { CldUploadWidget } from 'next-cloudinary'
import { deleteCloudinaryImages } from '@/libs/actions/deleteCloudinaryImage'

type propertyImageProps = {
  public_id:string,
  secure_url:string
}

const CreateProperty = ({setActiveTab}:{setActiveTab: React.Dispatch<React.SetStateAction<string>>}) => {

  const maxLimit = 450;
  const maxAmenities = 10;

  const [title, setTitle] = React.useState('');
  const [address, setAddress] = React.useState('');

  const [state, setState] = React.useState('');
  const localGovernmentAreas = getLocalGovernment(state);
  const [city, setCity] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [furnitureStatus, setFurnitureStatus] = React.useState('');
  const [propertyTag, setPropertyTag] = React.useState('');
  const [annualMortgage, setAnnualMortgage] = React.useState(0);
  const [fullPropertyPrice, setFullPropertyPrice] = React.useState(0);
  const [annualRent, setAnnualRent] = React.useState(0);
  const [monthlyRent, setMonthlyRent] = React.useState(0);

  const [amenities, setAmenities] = React.useState('');
  const [verifiableAmenities, setVerfiableAmenities] = React.useState<string[]>([]);

  const [mainFeeName, setMainFeeName] = React.useState('');
  const [mainFeeAmount, setMainFeeAmount] = React.useState(0);
  const [mainFee, setMainFee] = React.useState([{mainFeeName: '', mainFeeAmount: 0}].filter((item) => item.mainFeeAmount !== 0));


  const [optFeeName, setOptFeeName] = React.useState('');
  const [optFeeAmount, setOptFeeAmount] = React.useState(0);
  const [optFee, setOptFee] = React.useState([{optFeeName: '', optFeeAmount: 0}].filter((item) => item.optFeeAmount !== 0));

  const [landmarkName, setLandmarkName] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [closestLandmark, setClosestLandmark] = React.useState([{landmarkName: '', distance: ''}].filter((item) => item.landmarkName !== ''));

  const [bedNumber, setBedNumber] = React.useState(0);
  const [bathNumber, setBathNumber] = React.useState(0);
  const [toiletNumber, setToiletNumber] = React.useState(0);
  const [apartmentArea, setApartmentArea] = React.useState(0);

  const [uploadedImages, setUploadedImages] = React.useState<propertyImageProps[]>([])

  const uploadOptions = {
    cloudName:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
    multiple:true,
    maxFiles:16,
    uploadPreset: 'apartmentImages',
  };

  const handleUploadPropertyImages = (result:{info?: any}) => {
    const images = Array.isArray(result.info) ? result.info : [result.info];

    const newImage = images.map((image) => ({
      public_id: image.public_id as string,
      secure_url: image.secure_url as string,
    }));
    setUploadedImages((prevImages) => [...prevImages, ...newImage]);
  };

  const nairaSign:string = String.fromCodePoint(8358);
  const imageList = true;

  React.useEffect(() => {
    if (state) {
      setCity(localGovernmentAreas ? localGovernmentAreas[0] : '')
    }
  }, [localGovernmentAreas, state]);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const createAmenities = (event:React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target;
    setAmenities(input.value)
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();

      if (verifiableAmenities.length < maxAmenities) {
        if (!verifiableAmenities.includes(amenities) && amenities.length > 0) {
          setVerfiableAmenities([...verifiableAmenities, amenities])
        }
  
        setAmenities('');
      } else {
        toast.error(`maximum number is ${maxAmenities} amenities!!`)
        return;
      };
    };

  };

  const removeAmenities = (value:string) => {
    const renderedAmenities = verifiableAmenities.filter((item) => item !== value);
    setVerfiableAmenities(renderedAmenities)
  };

  const onChangeFeeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMainFeeAmount(value);
  };

  const onChangeOptFeeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setOptFeeAmount(value);
  };

  const createMainFee = React.useCallback(() => {
    const singleMainFee = {mainFeeName, mainFeeAmount};

    if (mainFeeName && mainFeeAmount || mainFeeName !== '' && mainFeeAmount !== 0) {
      setMainFee([...mainFee, singleMainFee].filter((item) => item.mainFeeAmount !== 0));
      setMainFeeName('')
      setMainFeeAmount(0);
    }
    return;
  },[mainFee, mainFeeAmount, mainFeeName]);

  const createOptionalFee = React.useCallback(() => {
    const singleOptFee = {optFeeName, optFeeAmount}

    if (optFeeName && optFeeAmount || optFeeName !== '' && optFeeAmount !== 0) {
      setOptFee([...optFee, singleOptFee].filter((item) => item.optFeeAmount !== 0));
      setOptFeeName('')
      setOptFeeAmount(0);
    }
    return;
  }, [optFee, optFeeAmount, optFeeName]);

  const createClosestLandmark = React.useCallback(() => {
    const singleClosestLandmark = {landmarkName, distance}

    if (landmarkName && distance || landmarkName !== '' && distance !== '') {
      setClosestLandmark([...closestLandmark, singleClosestLandmark].filter((item) => item.landmarkName !== ''));
      setLandmarkName('')
      setDistance('');
    }
    return;
  },[closestLandmark, distance, landmarkName])

  const removeSingleMainFee = (value:string) => {
    const renderedAmenities = mainFee.filter((item) => item.mainFeeName !== value);
    setMainFee(renderedAmenities)
  };

  const removeSingleOptionalFee = (value:string) => {
    const renderedAmenities = optFee.filter((item) => item.optFeeName !== value);
    setOptFee(renderedAmenities)
  };

  const removeSingleClosestLandmark = (value:string) => {
    const renderedAmenities = closestLandmark.filter((item) => item.landmarkName !== value);
    setClosestLandmark(renderedAmenities)
  };

  const onChangeAnnualRent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setAnnualRent(value);
  };

  const onChangeMonthlyRent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMonthlyRent(value);
  };

  const onChangeFullPropertyPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setFullPropertyPrice(value);
  };

  const onChangeAnnualMortgage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setAnnualMortgage(value);
  };

  const onChangeBedNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setBedNumber(value);
  };

  const onChangeBathNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setBathNumber(value);
  };

  const onChangeToiletNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setToiletNumber(value);
  };

  const onChangeApartmentArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setApartmentArea(value);
  };

  const handleDeleteUploadedImages = async(publicId:string) => {
    try {
      deleteCloudinaryImages(publicId);
      const newImages = uploadedImages.filter((item) => item.public_id !== publicId);
      setUploadedImages(newImages);
    } catch (error) {
      return;
    }
  };

  const ImageHolder = ({public_id, secure_url}:{public_id:string, secure_url:string}) => {
    return (
      <div className="rounded bg-gray-200 overflow-hidden flex items-center justify-center aspect-square relative cursor-pointer group">
        <Image src={secure_url} fill priority alt='imag_2'/>
        <div className="bg-black/40 absolute left-0 w-full h-full z-10 text-white flex flex-col items-end justify-end p-2 opacity-0 group-hover:opacity-100">
          <HiOutlineXCircle size={32} onClick={() => handleDeleteUploadedImages(public_id)}/>
        </div>
      </div>
    )
  };

  return (
    <div className='w-full h-full flex slide-in-left'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full lg:w-[80%] xl:w-[70%]">
        <div className='flex gap-4 mb-8 lg:gap-6 cursor-pointer'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Create Property</h2>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400' onClick={() =>setActiveTab('all-properties')}>All Properties</h2>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-xl lg:text-2xl mb-4'>Property Description</h2>
          <Input
            placeholder='title of property description'
            icon={HiAtSymbol}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            placeholder='full address of the property'
            icon={HiOutlineMapPin}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <CustomSelectComponent 
              data={propertyTags} 
              selected={propertyTag} 
              placeholder={'property tag'} 
              setSelected={setPropertyTag}
              flowBottomHeight='-bottom-[90px]'
            />
            <CustomSelectComponent 
              data={furnitureTags} 
              selected={furnitureStatus} 
              placeholder={'furniture status'} 
              setSelected={setFurnitureStatus}
              flowBottomHeight='-bottom-[90px]'
            />
          </div>
          <React.Fragment>
            <TextArea
              icon={HiOutlineSparkles}
              placeholder='describe the property (keep it simple and short)'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className='h-[15rem]'
              maxLength={maxLimit}
              onKeyDown={handleOnKeyDown}
            />
            <p className='text-right text-sm md:text-base'>{maxLimit - description.length} characters left.</p>
          </React.Fragment>
          <hr/>
          <h2 className='text-xl lg:text-2xl mb-4'>Property Images</h2>
          <div className="flex flex-col gap-2 w-full h-full">
            <CldUploadWidget options={uploadOptions} onSuccess={handleUploadPropertyImages}>
              {({ open }) => {
                return (
                  <div onClick={() => open?.()} className="w-full h-[12rem] md:h-[15rem] bg-gray-200 rounded flex items-center justify-center flex-col text-neutral-600 lg:text-lg cursor-pointer p-4">
                    <LuImagePlus size={100} className='lg:block hidden'/>
                    <LuImagePlus size={80} className='hidden md:block lg:hidden'/>
                    <LuImagePlus size={60} className='md:hidden'/>
                    <span className='text-gray-400'>Add images of the property, not more than 16.</span>
                  </div>
                )
              }}
            </CldUploadWidget>
            { uploadedImages.length > 0 &&
              <React.Fragment>
                <div className="w-full grid grid-cols-4 md:grid-cols-5 gap-2 lg:grid-cols-6">
                  { uploadedImages.map((item) => (
                    <ImageHolder key={item.public_id} secure_url={item.secure_url} public_id={item.public_id}/>
                  ))}
                </div>
              </React.Fragment> 
            }
          </div>
          <hr/>
          <h2 className='text-xl lg:text-2xl mb-4'>Property Details</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <CustomSelectComponent 
              data={states} 
              selected={state} 
              placeholder={'state'} 
              setSelected={setState}
            /> 
            <CustomSelectComponent 
              data={localGovernmentAreas} 
              selected={city} 
              placeholder={'city'} 
              setSelected={setCity}
            />
          </div>
          { propertyTag !== '' &&
            <React.Fragment>
              { propertyTag === 'rent' ?
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <Input
                    placeholder={`enter annual rent (${nairaSign})`}
                    icon={HiOutlineCreditCard}
                    value={annualRent || ''}
                    onChange={onChangeAnnualRent}
                  />
                  <Input
                    placeholder={`enter monthly rent (${nairaSign})`}
                    icon={HiOutlineCreditCard}
                    value={monthlyRent || ''}
                    onChange={onChangeMonthlyRent}
                  />
                </div> :
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <Input
                    placeholder={`enter full property price (${nairaSign})`}
                    icon={HiOutlineCreditCard}
                    value={fullPropertyPrice || ''}
                    onChange={onChangeFullPropertyPrice}
                  />
                  <Input
                    placeholder={`enter annual mortgage (${nairaSign})`}
                    icon={HiOutlineCreditCard}
                    value={annualMortgage || ''}
                    onChange={onChangeAnnualMortgage}
                  />
                </div>
              }
            </React.Fragment> 
          }
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <Input
              placeholder={'number of rooms'}
              icon={PiBed}
              value={bedNumber || ''}
              onChange={onChangeBedNumber}
            />
            <Input
              placeholder={'number of bathroom'}
              icon={PiBathtub}
              value={bathNumber || ''}
              onChange={onChangeBathNumber}
            />
            <Input
              placeholder={'number of toilets'}
              icon={PiToilet}
              value={toiletNumber || ''}
              onChange={onChangeToiletNumber}
            />
            <Input
              placeholder={'size of property'}
              icon={PiMapPinArea}
              value={apartmentArea || ''}
              onChange={onChangeApartmentArea}
            />
          </div>
          <hr/>
          <React.Fragment>
            <h2 className='text-xl lg:text-2xl mb-4'>Verifiable Amenities</h2>
            <Input
              placeholder='enter names of amenities availables'
              value={amenities}
              icon={HiOutlineSquaresPlus}
              onChange={createAmenities}
              onKeyDown={handleInputKeyDown}
            />
            <div className='flex flex-wrap gap-1 md:gap-2 mt-1'>
              {verifiableAmenities.length > 0 && verifiableAmenities.map((item:string, index:number) => (
                <div key={index} className='capitalize bg-gray-200 lg:text-lg lg:py-2.5 py-2 px-4 rounded-full flex items-center md:gap-3 gap-2'>
                  {item}
                  <HiXMark size={24} onClick={() =>removeAmenities(item)} className='cursor-pointer hidden lg:block'/>
                  <HiXMark size={22} onClick={() =>removeAmenities(item)} className='cursor-pointer lg:hidden'/>
                </div>
              ))}
            </div>
          </React.Fragment>
          <hr/>
          <React.Fragment>
            <h2 className='text-xl lg:text-2xl mb-4'>Main Fees</h2>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-1 lg:gap-4 gap-3 md:grid-cols-2">
                <Input
                  type='text'
                  placeholder='enter fee name'
                  value={mainFeeName}
                  icon={HiAtSymbol}
                  onChange={(event) => setMainFeeName(event.target.value)}
                />
                <Input
                  type='number'
                  placeholder='enter fee amount'
                  value={mainFeeAmount || ''}
                  icon={HiOutlineCreditCard}
                  onChange={onChangeFeeAmount}
                />
              </div>
              <div className='flex items-center justify-end'>
                <Button className='lg:text-lg py-2 px-4 md:px-6 flex items-center gap-2 mt-1 justify-end' type='button' onClick={createMainFee}>
                  <HiPlus size={24}/>
                  { mainFee.length === 0 ? 'Add fee': 'Add more'}
                </Button>
              </div>
            </div>
            <div className='flex flex-wrap gap-1 md:gap-2 mt-1'>
              {mainFee.length > 0 && mainFee.filter((item) => item.mainFeeAmount !== 0).map((item:{mainFeeName:string, mainFeeAmount: number}, index:number) => (
                <div key={index} className='capitalize bg-gray-200 lg:text-lg lg:py-2.5 py-2 px-4 rounded-full flex items-center md:gap-3 gap-2'>
                  {item.mainFeeName}: {nairaSign}{item.mainFeeAmount.toLocaleString()}.00
                  <HiXMark size={24} onClick={() =>removeSingleMainFee(item.mainFeeName)} className='cursor-pointer hidden lg:block'/>
                  <HiXMark size={22} onClick={() =>removeSingleMainFee(item.mainFeeName)} className='cursor-pointer lg:hidden'/>
                </div>
              ))}
            </div>
          </React.Fragment>
          <hr/>
          <React.Fragment>
            <h2 className='text-xl lg:text-2xl mb-4'>Optional Fees</h2>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-1 lg:gap-4 gap-3 md:grid-cols-2">
                <Input
                  type='text'
                  placeholder='enter fee name'
                  value={optFeeName}
                  icon={HiAtSymbol}
                  onChange={(event) => setOptFeeName(event.target.value)}
                />
                <Input
                  type='number'
                  placeholder='enter fee amount'
                  value={optFeeAmount || ''}
                  icon={HiOutlineCreditCard}
                  onChange={onChangeOptFeeAmount}
                />
              </div>
              <div className='flex items-center justify-end'>
                <Button className='lg:text-lg py-2 px-4 md:px-6 flex items-center gap-2 mt-1 justify-end' type='button' onClick={createOptionalFee}>
                  <HiPlus size={24}/>
                  {optFee.length === 0 ? 'Add fee' : 'Add more'}
                </Button>
              </div>
            </div>
            <div className='flex flex-wrap gap-1 md:gap-2 mt-1'>
              {optFee.length > 0 && optFee.filter((item) => item.optFeeAmount !== 0).map((item:{optFeeName:string, optFeeAmount: number}, index:number) => (
                <div key={index} className='capitalize bg-gray-200 lg:text-lg lg:py-2.5 py-2 px-4 rounded-full flex items-center md:gap-3 gap-2'>
                  {item.optFeeName}: {nairaSign}{item.optFeeAmount.toLocaleString()}.00
                  <HiXMark size={24} onClick={() =>removeSingleOptionalFee(item.optFeeName)} className='cursor-pointer hidden lg:block'/>
                  <HiXMark size={22} onClick={() =>removeSingleOptionalFee(item.optFeeName)} className='cursor-pointer lg:hidden'/>
                </div>
              ))}
            </div>
          </React.Fragment>
          <hr/>
          <React.Fragment>
            <h2 className='text-xl lg:text-2xl mb-4'>Nearby Places</h2>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-1 lg:gap-4 gap-3 md:grid-cols-2">
                <Input
                  type='text'
                  placeholder='enter name of nearby place'
                  value={landmarkName}
                  icon={HiAtSymbol}
                  onChange={(event) => setLandmarkName(event.target.value)}
                />
                <Input
                  type='text'
                  placeholder='enter distance away (km)'
                  value={distance}
                  icon={HiAtSymbol}
                  onChange={(event)=> setDistance(event.target.value)}
                />
              </div>
              <div className='flex items-center justify-end'>
                <Button className='lg:text-lg py-2 px-4 md:px-6 flex items-center gap-2 mt-1 justify-end' type='button' onClick={createClosestLandmark}>
                  <HiPlus size={24}/>
                  {closestLandmark.length === 0 ? 'Add nearby place' : 'Add more nearby place'}
                </Button>
              </div>
            </div>
            <div className='flex flex-wrap gap-1 md:gap-2 mt-1'>
              {closestLandmark.length > 0 && closestLandmark.filter((item) => item.distance !== '').map((item:{landmarkName:string, distance: string}, index:number) => (
                <div key={index} className='capitalize bg-gray-200 lg:text-lg lg:py-2.5 py-2 px-4 rounded-full flex items-center md:gap-3 gap-2'>
                  {item.landmarkName}: <span className='lowercase'>{item.distance}km away</span>
                  <HiXMark size={24} onClick={() =>removeSingleClosestLandmark(item.landmarkName)} className='cursor-pointer hidden lg:block'/>
                  <HiXMark size={22} onClick={() =>removeSingleClosestLandmark(item.landmarkName)} className='cursor-pointer lg:hidden'/>
                </div>
              ))}
            </div>
          </React.Fragment>
          <hr/>
          <div className='mt-8 flex items-center'>
            <Button onClick={() => {}} type='button'>
              Create Property
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProperty