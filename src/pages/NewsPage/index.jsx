import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import { Link } from 'react-router-dom';
import newsAPI from '../../api/newsAPI';
import HeaderNews from './components/HeaderNews';

function NewsPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const fetchNewsData = async () => {
      const listNewsData = await newsAPI.getAll();
      dispatch(GlobalActions.setIsLoading(false));
      console.log(listNewsData);
    };
    fetchNewsData();
  }, [dispatch]);

  //Fake Loading
  // useEffect(() => {
  //   dispatch(GlobalActions.setIsLoading(true));
  //   const loadingFake = setTimeout(() => {
  //     dispatch(GlobalActions.setIsLoading(false));
  //   }, 500);
  //   return () => {
  //     clearTimeout(loadingFake);
  //   };
  // });
  return (
    <div className="container">
      <HeaderNews />
      <Link to="/login">Go Login</Link>
    </div>
  );
}

export default NewsPage;
