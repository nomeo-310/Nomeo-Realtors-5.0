import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Modal from '@/components/shared/Modal'
import useAgentSignUp from '@/hooks/useAgentSignUp';
import useLogin from '@/hooks/useLogin';
import useSignUp from '@/hooks/useSignUp';
import React from 'react'
import { BsGoogle } from 'react-icons/bs';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';
import { toast } from 'sonner';

const LoginModal = () => {
  const loginUser = useLogin();
  const signUpUser = useSignUp();
  const signUpAgent = useAgentSignUp();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmission = () => {
    if (email === '' || password === '') {
      toast.error('You cannot submit empty field(s)!! Fill them please');

      return;
    }
    console.log(email, password)
  }
  
  return (
    <Modal isOpen={loginUser.isOpen} title={'Log In'} onClose={loginUser.onClose}>
      <div className="flex flex-col gap-3">
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
            Login
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
            Don&apos;t have an account yet?
            <button onClick={() => {loginUser.onClose(), signUpUser.onOpen()}} className='ml-1 underline'>
              Create one
            </button>
          </p>
          <p className='md:text-lg'>
            Interested in being an agent? 
            <button onClick={() => {loginUser.onClose(), signUpAgent.onOpen()}} className='ml-1 underline'>
              Register here
            </button>
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal