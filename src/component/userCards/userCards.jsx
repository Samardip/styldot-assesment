import React, { useEffect, useState } from 'react'
import CardVariant from '../../common/cardVariant/cardVariant'
import ModalVariant from '../../common/modalVariant/modalVariant';
import { useShowCardHooks } from '../../useHooks/useShowCardHooks/useShowCardHooks';
import { ShowPostModal } from '../modal/showPostModal';

export const UserCards = ({ userPost, setUserPost, handleLikeChange }) => {
    const {
        paginatedPostDetials,
        userPostDetails,
        handleCardCliked,
        open,
        setOpen,
        userModalDetails,
        loadedData,
        moreData,
        loading
    } = useShowCardHooks(userPost);
    // console.log(paginatedPostDetials);
    
// console.log(loadedData);
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%]'>
                {
                    loadedData?.map((userItem, index) => {
                        return <div className='w-[100%] cursor-pointer' onClick={() => { handleCardCliked(userItem) }}>
                            <CardVariant

                                userKey={userItem?.id}
                                title={userItem?.title}
                                imgSrc={userItem?.thumbnailUrl}
                                isLiked={userItem?.isLiked}
                                handleLikeChange={(event) => { handleLikeChange(event,userItem?.id) }}
                            />
                        </div>
                    })
                }

            </div>
            {
                loading &&
                <div>Loading...</div>
            }
            {
                !loading &&
                !moreData &&
                <div>
                    No more data
                </div>
            }
            <ModalVariant
                open={open}
                setOpen={setOpen}
            >
                <ShowPostModal userModalDetails={userModalDetails} />
            </ModalVariant>
        </>
    )
}
