import React from 'react'
import Modal from '@/components/shared/Modal'
import useLogin from '@/hooks/useLogin'
import useSignUp from '@/hooks/useSignUp'
import Input from '@/components/shared/Input'
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi2'
import { BsGoogle } from 'react-icons/bs'
import Button from '@/components/shared/Button'
import { toast } from 'sonner'
import { isValidEmail } from '@/libs/validations/validations'

const UserSignupModal = () => {
  const signUpUser = useSignUp();
  const loginUser = useLogin();

  const [surname, setSurname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const noValue = email === '' && password === '' && surname === '' && password === '';
  const [disableSubmit, setDisableSubmi] = React.useState(noValue);

  React.useEffect(() => {
    if (email !== '' && password !== '' && surname !== '' && password !== '') {
      setDisableSubmi(false)
    }
  }, [email, password, surname]);

  const handleSubmission = (event:React.FormEvent) => {
    event.preventDefault();

    const validEmail = isValidEmail(email);

    if (email && !validEmail) {
      toast.error('Invalid email address');

      return;
    }

    if (surname && !Number.isNaN(Number(surname))) {
      toast.error('Type a valid surname please');
      
      return;
    }

    if (lastname && !Number.isNaN(Number(lastname))) {
      toast.error('Type a valid lastname please');
      
      return;
    }


    
    console.log(email, password, surname, lastname);
  }

  return (
    <Modal isOpen={signUpUser.isOpen} title={'User Registration'} onClose={signUpUser.onClose}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmission}>
        <Input
          placeholder='enter your surname'
          icon={HiOutlineUser}
          type='text'
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <Input
          placeholder='enter your lastname'
          icon={HiOutlineUser}
          type='text'
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
        <Input
          placeholder='enter your email address'
          icon={HiOutlineEnvelope}
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder='enter your password'
          icon={HiOutlineLockClosed}
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="mt-6 md:mt-8">
          <Button type='submit' className='text-lg disabled:bg-neutral-500' disabled={disableSubmit}>
            Register
          </Button>
        </div>
        <hr/>
        <Button type='button' onClick={() => console.log('hello')} >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="border-r pr-3">
              <BsGoogle size={28}/>
            </div>
            <p className='text-lg'>Continue with Google</p>
          </div>
        </Button>
        <div className="mt-6 md:mt-8 flex flex-col gap-2">
          <p className='md:text-lg'>
            Already have an account?
            <button onClick={() => {loginUser.onOpen(), signUpUser.onClose()}} className='ml-1 underline'>
              Login
            </button>
          </p>
        </div>
      </form>
    </Modal>
  )
}

export default UserSignupModal