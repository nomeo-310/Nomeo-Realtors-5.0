'use client'

import React from 'react'
import usePrivacyPolicy from '@/hooks/usePrivacyPolicy';
import Modal from '@/components/shared/Modal';


const PrivacyPolicy = () => {
  const privacyPolicy = usePrivacyPolicy();

  return (
    <Modal isOpen={privacyPolicy.isOpen} onClose={privacyPolicy.onClose} title='Privacy Policy'>
      <p className='-mt-6 text-[0.95rem] leading-[1.45rem] md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, animi! Id praesentium consequatur ducimus. Possimus cumque illum aliquam nostrum exercitationem nulla fugiat, quis provident harum! Consectetur vero odio officia expedita amet beatae iusto et voluptatum. Similique at eligendi distinctio nesciunt eius eveniet soluta nemo pariatur sed numquam, qui adipisci quos accusamus maiores dolorem illo et ratione velit eos omnis culpa enim cum dolor officia. Doloremque et provident at eveniet, ab voluptatum quidem sequi. Saepe odit reprehenderit sapiente corrupti praesentium accusamus provident nesciunt ullam, possimus inventore deleniti aut vel. Deserunt omnis animi non, autem alias consequuntur velit dolore atque quaerat doloremque natus eveniet ipsam incidunt eaque, nemo similique corrupti reprehenderit nam et explicabo veniam, nulla assumenda. Ipsum dolores temporibus expedita cupiditate aspernatur animi corrupti tempore amet quasi, voluptas minus quaerat magnam voluptate ea sequi similique quas aperiam error, dolorem aliquid eaque, assumenda placeat. Labore, voluptatibus. Praesentium vitae temporibus, odio culpa quidem labore ut maiores ex quo sapiente explicabo suscipit, unde harum ratione doloribus amet nesciunt dolorum. Provident corporis distinctio fugit numquam! Facere at sed pariatur tempore ipsum, autem aspernatur explicabo inventore quae, eum reiciendis atque impedit itaque maiores rem earum nostrum quam praesentium placeat est excepturi provident eligendi. Aperiam, facere!</p>
    </Modal>
  )
}

export default PrivacyPolicy