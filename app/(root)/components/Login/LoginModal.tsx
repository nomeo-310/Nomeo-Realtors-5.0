import Modal from '@/components/shared/Modal'
import useLogin from '@/hooks/useLogin';
import useSignUp from '@/hooks/useSignUp';
import React from 'react'

const LoginModal = () => {
  const loginUser = useLogin();
  const signUpUser = useSignUp();
  
  return (
    <Modal isOpen={loginUser.isOpen} title={'Log In'} onClose={loginUser.onClose}>
      <p>Hello  Login</p>
      <p onClick={() => {loginUser.onClose(), signUpUser.onOpen()}}>
        Go to sign up page and open modal
      </p>
    </Modal>
  )
}

export default LoginModal