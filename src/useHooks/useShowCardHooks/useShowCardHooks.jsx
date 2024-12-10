import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../context/app-slice';

export const useShowCardHooks = () => {
    // const paginatedPostDetials = useSelector((state) => state.app.paginatedPostDetials) || []
    const [open, setOpen] = React.useState(false);
    const [userModalDetails, setUserModalDetails] = useState({});
    const handleCardCliked = async (item) => {
        await fetch(`${process.env.REACT_APP_API_URL}/${item?.id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((res) => {
                console.log(res);

                setUserModalDetails(item);
                setOpen(true);
            })
            .catch((err) => {

            })

    }
    const dispatch = useDispatch();
    const [loadedData, setLoadedData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const pageSize = 10;
    const [moreData, setMoreData] = useState(true);
    const userPostDetails = useSelector((state) => state.app.userPostDetails) || [];
    const paginatedPostDetials = userPostDetails.slice(0, 10);
    const handleScroll = useCallback(() => {
        if (
            window.innerHeight +
            document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setPage(prevPage => prevPage + 1);
        }
    }, []);
    useEffect(() => {
        const loadMoreData = async () => {
            try {
                setLoading(true);
                // const newData = userPostDetails?.slice(((page-1)*10),((page)*10));
                let newData = userPostDetails.slice(0,10);

                if (Array.isArray(newData)
                    && newData.length > 0) {
                    let newLodadedData = [...loadedData, ...newData]
                    setLoadedData(
                        prevData =>
                            [...prevData, ...newData]
                    );
                    // dispatch(appActions.updatePaginatedPostDetails(newLodadedData));
                    setPage(prevPage => prevPage + 1);
                }
                else {
                    setMoreData(false);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setMoreData(false);
            } finally {
                setLoading(false);
            }
        };

        if (moreData && !loading) {
            loadMoreData();
        }
    }, [dispatch, loadedData, loading, moreData, page, userPostDetails]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () =>
            window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    console.log(paginatedPostDetials);
    return {
        paginatedPostDetials,
        handleCardCliked,
        open,
        setOpen,
        userModalDetails,
        loadedData,
        userPostDetails
    }
}
