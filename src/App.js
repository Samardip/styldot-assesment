import react, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { UserCards } from './component/userCards/userCards';
import { useCardHooks } from './useHooks/useCardHooks/useCardHooks';

function App() {
  const {
    // paginatedPostDetials,
    userPost,
    setUserPost,
    handleLikeChange
  } = useCardHooks();

  return (
    <div className='w-[100%]'>
      <UserCards
        userPost={userPost}
        setUserPost={setUserPost}
        handleLikeChange={handleLikeChange}
      />
    </div>
  );
}

export default App;
