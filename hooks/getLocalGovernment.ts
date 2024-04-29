import allLocalGovernmentAreas from '../components/data/localGovernmentAreas.json'

interface stateProps {
  state: string;
  lgas: string[];
}

export const getLocalGovernment = (value:string) => {
  const localGovernmentAreas = allLocalGovernmentAreas;
  if (value !== '') {
    const singleState = localGovernmentAreas.filter((state:stateProps) => state.state === value);
    const localGovernmentAreaList = singleState[0]?.lgas;

    return localGovernmentAreaList;
  }
}