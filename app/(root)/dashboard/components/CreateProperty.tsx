'use client'


import React from 'react'
import Input from '@/components/shared/Input'
import { HiAtSymbol, HiOutlineMapPin, HiOutlineSparkles, HiOutlineSquaresPlus, HiXMark } from 'react-icons/hi2'
import CustomSelectComponent from '@/components/shared/CustomSelectComponent'
import { getLocalGovernment } from '@/hooks/getLocalGovernment'
import { states } from '@/components/data/constants'
import TextArea from '@/components/shared/TextArea'
import { toast } from 'sonner'

type Props = {}

const CreateProperty = (props: Props) => {

  const maxLimit = 450;
  const maxAmenities = 10;

  const [title, setTitle] = React.useState('');
  const [address, setAddress] = React.useState('');

  const [state, setState] = React.useState('');
  const localGovernmentAreas = getLocalGovernment(state);
  const [city, setCity] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [amenities, setAmenities] = React.useState('');
  const [verifiableAmenities, setVerfiableAmenities] = React.useState<string[]>([]);

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
  }

  return (
    <div className='w-full h-full flex items-center'>
      <div className="flex flex-col lg:gap-4 gap-3 w-full lg:w-[80%] xl:w-[70%]">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 w-full'>Create Property</h2>
        <div className='flex flex-col gap-3'>
          <h2 className='text-xl lg:text-2xl mb-4'>Property Details</h2>
          <Input
            placeholder='title of property description'
            icon={HiAtSymbol}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
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
          <Input
            placeholder='full address of the property'
            icon={HiOutlineMapPin}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
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
            <p className='text-right text-sm md:text-base'>{maxLimit - description.length} characters left</p>
          </React.Fragment>
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
            <div className='flex flex-wrap gap-1 md:gap-2'>
              {verifiableAmenities.length > 0 && verifiableAmenities.map((item:string, index:number) => (
                <div key={index} className='capitalize bg-gray-200 lg:text-lg lg:py-2.5 py-2 px-4 rounded-full flex items-center md:gap-3 gap-2'>
                  {item}
                  <HiXMark size={24} onClick={() =>removeAmenities(item)} className='hidden lg:block'/>
                  <HiXMark size={22} onClick={() =>removeAmenities(item)} className='lg:hidden'/>
                </div>
              ))}
            </div>
          </React.Fragment>
          <hr/>
          <React.Fragment>
            <h2 className='text-xl lg:text-2xl mb-4'>Main Fees</h2>
            
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default CreateProperty