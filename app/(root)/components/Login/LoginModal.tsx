import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import Modal from '@/components/shared/Modal'
import useAgentSignUp from '@/hooks/useAgentSignUp';
import useLogin from '@/hooks/useLogin';
import useSignUp from '@/hooks/useSignUp';
import { isValidEmail } from '@/libs/validations/validations';
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

  const validEmail = isValidEmail(email);

  const noValue = email === '' && password === '';
  const [disableSubmit, setDisableSubmi] = React.useState(noValue);

  React.useEffect(() => {
    if (email !== '' && password !== '') {
      setDisableSubmi(false)
    }
  }, [email, password]);

  const handleSubmission = (event:React.FormEvent) => {
    event.preventDefault();

    if (email === '' && password === '') {
      toast.error('Fields are emplty, please fill them');

      return;
    };

    if (email && !validEmail) {
      toast.error('Invalid email address');

      return;
    };

    if (email && password === '') {
      toast.error('Add your password');

      return;
    }

    if (password && email === '') {
      toast.error('Add your email address');

      return;
    }

    console.log(email, password)
  }


  
  return (
    <Modal isOpen={loginUser.isOpen} title={'Log In'} onClose={loginUser.onClose}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmission} autoComplete='off'>
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
            <button onClick={() => {loginUser.onClose(), signUpUser.onOpen()}} className='ml-1 underline' type='button'>
              Create one
            </button>
          </p>
          <p className='md:text-lg'>
            Interested in being an agent? 
            <button onClick={() => {loginUser.onClose(), signUpAgent.onOpen()}} className='ml-1 underline' type='button'>
              Register here
            </button>
          </p>
        </div>
      </form>
    </Modal>
  )
}

export default LoginModal