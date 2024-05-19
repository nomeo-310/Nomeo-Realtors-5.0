"use client";

import React from "react";
import Box from "@/components/shared/Box";
import AllRentProperties from "./AllRentProperties";
import { propertyList, states } from "@/components/data/constants";
import CustomSelectComponent from "@/components/shared/CustomSelectComponent";
import { getLocalGovernment } from "@/hooks/getLocalGovernment";
import NumberInput from "../../components/home/NumberInput";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string'

const RentClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = false;
  const allRents = propertyList.filter((item) => item.propertTag === 'rent');

  const [state, setState] = React.useState("");
  const localGovernmentAreas = getLocalGovernment(state)
  const [city, setCity] = React.useState('');

  const [minimumRent, setMinimumRent] = React.useState(0);
  const [maximumRent, setMaximumRent] = React.useState(0);
  const [numberOfBeds, setNumberOfBeds] = React.useState(0);
  const [numberOfBaths, setNumberOfBaths] = React.useState(0);

  const onChangeMini = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinimumRent(value);
  };

  const onChangeMaxi = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMaximumRent(value);
  };

  const onChangeBaths = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setNumberOfBaths(value);
  };

  const onChangeBeds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setNumberOfBeds(value);
  };

  const nairaSign:string = String.fromCodePoint(8358);

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

    const updatedQuery:any = {...currentQuery, state: state, city: city, minRent: minimumRent, maxRent: maximumRent, numberOfBaths: numberOfBaths, numberOfBeds: numberOfBeds };

    const url = qs.stringifyUrl({url: '/rent', query: updatedQuery}, {skipNull: true});

    router.push(url);
  };

  return (
    <Box className="pt-24 lg:pt-28 flex gap-5 lg:gap-6 flex-col md:flex-row">
      <div className="lg:w-[22%] md:w-[32%] flex flex-col gap-2 md:sticky md:top-[78px] h-full">
        <CustomSelectComponent
          selected={state}
          setSelected={setState}
          placeholder='state'
          data={states}
          flowTop={false}
        />
        <CustomSelectComponent
          selected={city}
          setSelected={setCity}
          placeholder='city'
          data={localGovernmentAreas}
          flowTop={false}
        />
        <NumberInput
          id='minimumRent'
          placeholder={`minimum rent (${nairaSign})`}
          value={minimumRent || ''}
          onChange={onChangeMini}
        />
        <NumberInput
          id='maximumRent'
          placeholder={`maximum rent (${nairaSign})`}
          value={maximumRent || ''}
          onChange={onChangeMaxi}
        />
        <NumberInput
          id='numberOfBaths'
          placeholder='number of bathrooms'
          value={numberOfBaths || ''}
          onChange={onChangeBaths}
        />
        <NumberInput
          id='numberOfBeds'
          placeholder='number of bedrooms'
          value={numberOfBeds || ''}
          onChange={onChangeBeds}
        />
        <div className="mt-4 w-full">
          <button className="text-lg lg:text-xl capitalize py-2 px-6 rounded-md bg-neutral-700 text-white w-full" onClick={handleSearch}>
            search
          </button>
        </div>
      </div>
      <hr className="my-6 md:hidden"/>
      <div className="lg:w-[78%] md:w-[68%] pt-1">
        {search && <h2 className="mb-3 lg:text-xl text-lg">search result for lagos</h2>}
        <div className="">
          <AllRentProperties propertyList={allRents}/>
        </div>
      </div>
    </Box>
  );
};

export default RentClient;
