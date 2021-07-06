import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import { Link } from 'react-router-dom';

function NewsPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });
  return (
    <div>
      News Page
      <Link to="/login">Go Login</Link>
    </div>
  );
}

export default NewsPage;
