import React from 'react'
import Modal from '@/components/shared/Modal'
import useAgentSignUp from '@/hooks/useAgentSignUp'
import PageOne from './PageOne';
import PageTwo from './PageTwo';


export type formDataType = {
  surname: string;
  lastname: string;
  email: string;
  password: string;
  profileImage: {public_id:string, secure_url:string};
  image: string;
  city: string;
  state: string;
  agencyName: string;
  officeAddress: string;
  mobileNumber: string;
  officeNumber: string;
  inspectionFee: number;
  bio?: string;
  agencyWebsite?: string;
};

const AgentSignupModal = () => {
  const initialValues = {
    surname: '',
    lastname: '',
    password: '',
    email: '',
    profileImage: {public_id: '', secure_url: ''},
    image: '',
    city: '',
    state: '',
    agencyName: '',
    officeAddress: '',
    mobileNumber: '',
    officeNumber: '',
    inspectionFee: 0,
    bio: '',
    agencyWebsite: ''
  };

  const [formData, setFormData] = React.useState<formDataType>(initialValues);
  const signUpAgent = useAgentSignUp();

  const [pageNumber, setPageNumber] = React.useState(0);

  return (
    <Modal isOpen={signUpAgent.isOpen} title={'Agent Registration'} onClose={signUpAgent.onClose}>
      { pageNumber === 0 && 
        <PageOne pageNumber={pageNumber} setPageNumber={setPageNumber} formData={formData} setFormData={setFormData} />
      }
      { pageNumber === 1 && 
        <PageTwo pageNumber={pageNumber} setPageNumber={setPageNumber} formData={formData} setFormData={setFormData} />
      }
    </Modal>
  )
}

export default AgentSignupModal