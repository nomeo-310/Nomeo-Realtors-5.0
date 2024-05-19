'use client'

import React from 'react'
import CustomSelectComponent from '@/components/shared/CustomSelectComponent';
import { getLocalGovernment } from '@/hooks/getLocalGovernment';
import NumberInput from './NumberInput';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string'
import { states } from '@/components/data/constants';


const RentApartmentTab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = React.useState('');
  const localGovernmentAreas = getLocalGovernment(state)
  const [city, setCity] = React.useState('');
  
  const [minimumRent, setMinimumRent] = React.useState(0);
  const [maximumRent, setMaximumRent] = React.useState(0);

  const onChangeMini = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinimumRent(value);
  };

  const onChangeMaxi = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMaximumRent(value);
  };

  React.useEffect(() => {
    if (state) {
      setCity(localGovernmentAreas ? localGovernmentAreas[0] : '')
    }
  }, [localGovernmentAreas, state]);


  const handleSearch = () => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    const updatedQuery:any = {...currentQuery, state: state, city: city, minRent: minimumRent, maxRent: maximumRent };

    const url = qs.stringifyUrl({url: '/search', query: updatedQuery}, {skipNull: true});

    router.push(url);
  };

  return (
    <div className='bg-white/60 rounded-tr-md rounded-bl-lg rounded-br-lg'>
      <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-2.5 p-2.5 lg:p-3'>
        <CustomSelectComponent
          title='state'
          selected={state}
          setSelected={setState}
          placeholder='state'
          data={states}
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
      <div className="mt-5 p-2.5 lg:p-3 w-full flex justify-end">
        <button className='w-1/2 bg-neutral-700 p-2 lg:p-2.5 text-white lg:text-xl rounded-md hover:opacity-80' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default RentApartmentTab