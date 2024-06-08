import { useEffect, useState } from 'react';
import FavoritePets from '../../components/FavoritePets/FavoritePets';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { ProfileContainer } from './Profile.styled';
import { getCurrentUser, safeToken } from '../../redux/operation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [favoritsPetsArray, setFavoritsPetsArray] = useState([]);
  const [viewedPetsArray, setViewedPetsArray] = useState([]);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');

      if (storedUserData) {
        const user = JSON.parse(storedUserData);

        safeToken(user.token);
        const res = await dispatch(getCurrentUser());

        if (res.error?.message === 'Rejected') {
          toast(res.payload);
        }
        setUserData(res.payload);
        setFavoritsPetsArray(res.payload.noticesFavorites);
        setViewedPetsArray(res.payload.noticesViewed);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);
  // const toAddFavoritePetsArray = (array) => {
  //   setFavoritsPetsArray(array);
  // };
  return (
    <ProfileContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <ProfileForm userData={userData} />
      <FavoritePets favoritsPets={favoritsPetsArray} viewed={viewedPetsArray} />
    </ProfileContainer>
  );
};
export default Profile;
