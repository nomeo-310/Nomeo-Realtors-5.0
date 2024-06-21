"use client";

import React from "react";
import Box from "@/components/shared/Box";
import AllBuyingProperties from "./AllBuyingProperties";
import { propertyList, states } from "@/components/data/constants";
import { getLocalGovernment } from "@/hooks/getLocalGovernment";
import CustomSelectComponent from "@/components/shared/CustomSelectComponent";
import NumberInput from "../../components/home/NumberInput";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string'

const BuyPropertiesClient = () => {
  const search = false;
  const allRents = propertyList.filter((item) => item.propertTag === 'sale');

  const searchParams = useSearchParams();
  const router = useRouter();

  const [state, setState] = React.useState("");
  const localGovernmentAreas = getLocalGovernment(state)
  const [city, setCity] = React.useState('');

  const [minimumCost, setMinimumCost] = React.useState(0);
  const [maximumCost, setMaximumCost] = React.useState(0);
  const [numberOfBeds, setNumberOfBeds] = React.useState(0);
  const [numberOfBaths, setNumberOfBaths] = React.useState(0);

  const onChangeMini = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinimumCost(value);
  };

  const onChangeMaxi = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMaximumCost(value);
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

    const updatedQuery:any = {...currentQuery, state: state, city: city, minCost: minimumCost, maxCost: maximumCost, numberOfBaths: numberOfBaths, numberOfBeds: numberOfBeds };

    const url = qs.stringifyUrl({url: '/buy', query: updatedQuery}, {skipNull: true});

    router.push(url);
  };

  return (
    <Box className="pt-24 lg:pt-28">
      <h2 className="lg:text-2xl text-xl text-center mb-8">Properties for Sale</h2>
      <div className="flex gap-4 lg:gap-6 flex-col md:flex-row">
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
            placeholder={`minimum cost (${nairaSign})`}
            value={minimumCost || ''}
            onChange={onChangeMini}
          />
          <NumberInput
            id='maximumRent'
            placeholder={`maximum cost (${nairaSign})`}
            value={maximumCost|| ''}
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
            <AllBuyingProperties propertyList={allRents}/>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BuyPropertiesClient;
