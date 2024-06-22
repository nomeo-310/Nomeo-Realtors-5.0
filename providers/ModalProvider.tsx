'use client'

import LoginModal from '@/app/(root)/components/Login/LoginModal'
import SignupModal from '@/app/(root)/components/signUp/SignupModal'
import React from 'react'

type Props = {}

const ModalProvider = (props: Props) => {
  return (
    <React.Fragment>
      <LoginModal/>
      <SignupModal/>
    </React.Fragment>
  )
}

export default ModalProvider