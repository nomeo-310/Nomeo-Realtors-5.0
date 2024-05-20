'use client'

import Box from '@/components/shared/Box'
import React from 'react'
import DashBoardLayout from './DashBoardLayout';


type Props = {}

const DashBoardClient = (props: Props) => {
  const agentLoggedIn = true;
  const [activeTab, setActiveTab] = React.useState(agentLoggedIn ? 'property': 'notifications');


  return (
    <DashBoardLayout agentLoggedIn={agentLoggedIn} activeTab={activeTab} setActiveTab={setActiveTab}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea itaque tempore ducimus dicta perspiciatis ut sed nobis vitae facilis pariatur illum eum cum, nulla ipsam consequuntur ipsa consectetur enim. Excepturi, consequuntur corporis. Dolorum nihil cum perspiciatis similique distinctio repellendus. Perferendis quibusdam quaerat mollitia possimus laboriosam accusantium architecto illum! Possimus repellat nulla velit optio ipsum inventore libero explicabo. Sapiente, consequatur corrupti rem earum nam est voluptatibus fugit voluptas laborum iure distinctio, soluta officiis vel perspiciatis sequi qui? Placeat ipsa qui dicta mollitia quis quos officiis sit cupiditate inventore nemo quas, dolore reprehenderit. Doloribus possimus accusamus aut recusandae culpa nemo quo commodi corrupti facilis quibusdam ullam totam aspernatur maiores rerum assumenda odio consequuntur necessitatibus earum sunt harum aliquam, eum saepe. Quo quisquam omnis magni eligendi enim dicta impedit laborum, magnam inventore, reiciendis labore blanditiis! Cupiditate error voluptatem eos maxime similique mollitia doloribus quos ipsam sed, explicabo, aut, dolorem dicta vero! Consequatur aliquid illum fugit. Ipsum maiores asperiores quasi. Aliquid, nam sit! Molestias, recusandae voluptas consectetur est, ipsam sint unde ab similique saepe tempora corrupti quos incidunt ducimus dolores debitis vero nesciunt consequuntur earum dolor ipsum? Eum modi exercitationem voluptatibus excepturi fugit, consequuntur quis non eveniet a illo maiores possimus assumenda aliquid aut quam, rem cupiditate iure at sequi culpa. Impedit, autem. Error voluptate tempore optio commodi recusandae ut facilis reiciendis molestiae sequi rem tempora accusantium quis, non cum, natus, id saepe consequatur. Ratione, rem! Enim optio iste similique error saepe repellat molestias? Dolorem aut a iste eligendi, vero perferendis eius, architecto dolor totam debitis soluta atque laudantium beatae aliquid? Maxime ut ex eveniet voluptates excepturi quae vitae reprehenderit impedit ratione in modi, quia optio architecto doloremque nulla illum maiores nemo soluta voluptatem iste. Suscipit laboriosam voluptas, itaque nemo modi consectetur vitae harum veniam voluptatibus asperiores possimus ex sapiente quos totam deserunt.
    </DashBoardLayout>
  )
};

export default DashBoardClient;