'use client'

import React from 'react'
import CustomSelectComponent from '@/components/shared/CustomSelectComponent'
import { getLocalGovernment } from '@/hooks/getLocalGovernment';

type NumberInputProps = {
  id: string
  label: string
  placeholder: string
  value: string | number
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const data = ['Edo', 'Federal Capital Territory', 'Kano', 'Kwara', 'Lagos', 'Ondo', 'Osun', 'Oyo'];

const HomePageSearchBar = () => {

  const [activeTab, setActiveTab] = React.useState('rent')

  const [state, setState] = React.useState('');
  const localGovernmentAreas = getLocalGovernment(state)
  const [city, setCity] = React.useState('');

  const handleSelectTab = (tabItem:string) => {
    setActiveTab(tabItem)
  };


  const NumberInput = ({id, label, placeholder, value, onChange}:NumberInputProps) => {
    const nairaSign:string = String.fromCodePoint(8358);
    return (
      <div className='w-full'>
        <label htmlFor={id} className='uppercase ml-2 mb-1 text-sm block'>{label} ({nairaSign})</label>
        <input id={id} type="number" className='w-full rounded-md bg-white p-2 lg:p-2.5 outline-none placeholder:text-gray-400' placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    )
  }

  React.useEffect(() => {
    if (state) {
      setCity(localGovernmentAreas ? localGovernmentAreas[0] : '')
    }
  }, [localGovernmentAreas, state]);

  const TabSelectButton = () => {
    return (
      <div className="flex">
        <button className={`text-sm uppercase py-3 px-10 lg:px-14 rounded-tl-md ${activeTab === 'rent' ? 'bg-white/60' : 'bg-white'}`} onClick={() => handleSelectTab('rent')}>
          rent
        </button>
        <button className={`text-sm uppercase py-3 px-10 lg:px-14 rounded-tr-md ${activeTab === 'buy' ? 'bg-white/60' : 'bg-white'}`} onClick={() => handleSelectTab('buy')}>
          buy
        </button>
      </div>
    )
  };

  const RentTab = () => {
    const [minimumRent, setMinimumRent] = React.useState(0);
    const [maximumRent, setMaximumRent] = React.useState(0)

    const onChangeMini = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMinimumRent(value);
    };

    const onChangeMaxi = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMaximumRent(value);
    };

    return (
      <div className='bg-white/60 rounded-tr-md rounded-bl-[30px] rounded-br-[30px]'>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-2.5 p-2.5 lg:p-3'>
          <CustomSelectComponent
            title='state'
            selected={state}
            setSelected={setState}
            placeholder='state'
            data={data}
            flowTop
            useSearch
          />
          <CustomSelectComponent
            title='city'
            selected={city}
            setSelected={setCity}
            placeholder='city'
            data={localGovernmentAreas}
            flowTop
            useSearch
          />
          <NumberInput
            id='minimumRent'
            label='min. rent'
            placeholder='minimum rent'
            value={minimumRent || ''}
            onChange={onChangeMini}
          />
          <NumberInput
            id='maximumRent'
            label='max. rent'
            placeholder='maximum rent'
            value={maximumRent || ''}
            onChange={onChangeMaxi}
          />
        </div>
        <div className="mt-5 p-2.5 lg:p-3 w-[50%] ml-auto">
          <button className='w-full bg-neutral-700 p-2 lg:p-2.5 text-white lg:text-xl rounded-full'>
            Search
          </button>
        </div>
      </div>
    )
  }

  const BuyTab = () => {
    const [minimumCost, setMinimumCost] = React.useState(0);
    const [maximumCost, setMaximumCost] = React.useState(0)

    const onChangeMini = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMinimumCost(value);
    };

    const onChangeMaxi = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMaximumCost(value);
    };

    return (
      <div className='bg-white/60 rounded-tr-md rounded-bl-[30px] rounded-br-[30px]'>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-2.5 p-2.5 lg:p-3'>
          <CustomSelectComponent
            title='state'
            selected={state}
            setSelected={setState}
            placeholder='state'
            data={data}
            flowTop
            useSearch
          />
          <CustomSelectComponent
            title='city'
            selected={city}
            setSelected={setCity}
            placeholder='city'
            data={localGovernmentAreas}
            flowTop
            useSearch
          />
          <NumberInput
            id='minimumCost'
            label='min. cost'
            placeholder='minimum rent'
            value={minimumCost || ''}
            onChange={onChangeMini}
          />
          <NumberInput
            id='maximumCost'
            label='max. cost'
            placeholder='maximum cost'
            value={maximumCost || ''}
            onChange={onChangeMaxi}
          />
        </div>
        <div className="mt-5 p-2.5 lg:p-3 ml-auto md:w-full">
          <button className='w-full bg-neutral-700 p-2 lg:p-2.5 text-white lg:text-xl rounded-full'>
            Search
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full'>
      <TabSelectButton />
      { activeTab === 'rent' ? <RentTab/> : <BuyTab/> }
    </div>
  )
}

export default HomePageSearchBar;