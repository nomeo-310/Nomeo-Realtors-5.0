import React from 'react'
import Modal from '@/components/shared/Modal'
import useCookies from '@/hooks/useCookies'

type Props = {}

const CookiesModal = () => {
  const cookies = useCookies();
  return (
    <Modal isOpen={cookies.isOpen} title='Cookies Settings' onClose={cookies.onClose}>
      <p className='-mt-6 text-[0.95rem] leading-[1.45rem] md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius optio quasi assumenda non dolorem numquam in laborum sed maiores, soluta officia doloremque nihil nisi odio, corporis sint culpa ratione accusamus, ipsum itaque. Quibusdam, ut dicta eveniet quos harum optio corrupti placeat impedit facere aperiam distinctio incidunt tenetur minima. Iusto quidem dignissimos sunt quisquam voluptas, qui eligendi debitis rerum error eius atque rem? Tenetur fugit incidunt inventore expedita obcaecati odit, aliquam ad facere quisquam est doloremque necessitatibus error accusamus officiis mollitia voluptas dolor. Officia facilis deserunt, autem cupiditate soluta quasi, amet optio quis hic cumque fugit et tempore pariatur repudiandae dolorum ducimus veritatis blanditiis delectus illum facere, sequi sit nulla! Autem praesentium magnam aspernatur dolore natus necessitatibus, aliquid dolorem voluptatem quisquam eius! Maxime, nemo dignissimos? Eveniet dolore nisi laborum ipsam voluptas. Rem saepe iusto dolorem tenetur inventore veniam provident, ad quaerat quasi consequuntur dolorum voluptas nobis quisquam at neque minus delectus!</p>
      <div className="mt-6 lg:mt-8 flex items-center justify-between">
        <button className='hover:bg-neutral-500 active:bg-neutral-500 lg:px-6 lg:py-3 px-4 py-2 bg-neutral-700 text-white rounded-full lg:text-lg'>Allow cookies always</button>
        <button className='hover:bg-neutral-500 active:bg-neutral-500 lg:px-6 lg:py-3 px-4 py-2 bg-neutral-700 text-white rounded-full lg:text-lg'>Allow cookies for now</button>
      </div>
    </Modal>
  )
}

export default CookiesModal