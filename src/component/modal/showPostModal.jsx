import React from 'react'

export const ShowPostModal = ({userModalDetails}) => {
  return (
    <div className='bg-white text-balck'>
    <img src={userModalDetails?.thumbnailUrl} alt="postImg" />
    {userModalDetails?.title}
</div>
  )
}
