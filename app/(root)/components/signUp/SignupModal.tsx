import Modal from '@/components/shared/Modal'
import useLogin from '@/hooks/useLogin'
import useSignUp from '@/hooks/useSignUp'
import React from 'react'

const SignupModal = () => {
  const signUpUser = useSignUp();
  const loginUser = useLogin();

  return (
    <Modal isOpen={signUpUser.isOpen} title={'Sign Up'} onClose={signUpUser.onClose}>
      <p>Hello  signUp</p>
      <p onClick={() => {signUpUser.onClose(), loginUser.onOpen()}}>
        Go to login page and open modal
      </p>
    </Modal>
  )
}

export default SignupModal