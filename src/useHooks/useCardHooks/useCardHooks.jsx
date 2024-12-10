import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../context/app-slice';

export const useCardHooks = () => {
    const [userPost, setUserPost] = useState([]);
    const userPostDetails = useSelector((state) => state.app.userPostDetails) || []

    const paginatedPostDetials = useSelector((state) => state.app.paginatedPostDetails) || []
    const dispatch = useDispatch();
    const handleLikeChange = useCallback((event,id) => {
        event.stopPropagation();
        let newUSerPostArray = [];
        newUSerPostArray = userPost?.map((userItem) => {
            if (userItem?.id === id) {
                return {
                    ...userItem,
                    isLiked: !userItem?.isLiked
                }
            }
            else {
                return userItem;
            }
        });
        setUserPost(newUSerPostArray);
        dispatch(appActions.updateUserPostDetails(newUSerPostArray));
        dispatch(appActions.updatePaginatedPostDetails(newUSerPostArray));

    },[dispatch, userPost]);
    const fetchImageData = useCallback(async (url) => {
        await fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((res) => {
                console.log(res);
                let newUserPostArray = [];
                newUserPostArray = res?.map((userItem) => {
                    return {
                        ...userItem,
                        'isLiked': false
                    }
                })
                setUserPost(newUserPostArray.slice(0, 10));
                dispatch(appActions.updateUserPostDetails(newUserPostArray));
                dispatch(appActions.updatePaginatedPostDetails(newUserPostArray.slice(0, 10)));
            })
            .catch((err) => {

            })
    }, [dispatch])
    useEffect(() => {
        fetchImageData(`${process.env.REACT_APP_API_URL}/`);
    }, []);
    return {
        paginatedPostDetials,
        userPost,
        setUserPost,
        handleLikeChange
    }
}
