import React from 'react'
import Modal from '@/components/shared/Modal'
import useLogin from '@/hooks/useLogin'
import useSignUp from '@/hooks/useSignUp'
import Input from '@/components/shared/Input'
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi2'
import { BsGoogle } from 'react-icons/bs'
import Button from '@/components/shared/Button'
import { toast } from 'sonner'

const UserSignupModal = () => {
  const signUpUser = useSignUp();
  const loginUser = useLogin();

  const [surname, setSurname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmission = () => {
    if (email === '' || password === '' || surname === '' || password === '') {
      toast.error('You cannot submit empty field(s)!! Fill them please');

      return;
    }
    
    console.log(email, password, surname, lastname);
  }

  return (
    <Modal isOpen={signUpUser.isOpen} title={'User Registration'} onClose={signUpUser.onClose}>
      <div className="flex flex-col gap-3">
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
          <Button type='submit' onClick={handleSubmission} className='text-lg'>
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
      </div>
    </Modal>
  )
}

export default UserSignupModal