import { useEffect, useState } from 'react';
import React from 'react';
import {
  AnimalInformation,
  AnimalInformationAbout,
  AnimalInformationAboutDiv,
  AnimalInformationHeader,
  Buttons,
  Information,
  KindOfAnimal,
  KindOfAnimalStar,
  LearnMore,
  LikeButton,
  NoticesImg,
  NoticesItemContainer,
  NoticesItemImg,
  NoticesItemList,
  NoticesPDiv,
} from './NoticesItem.styled';
import LearnMoreModal from '../Modals/LearnMoreModal';
import sprite from '../../img/sprite.svg';
import {
  getCurrentUser,
  safeToken,
  toFavoriteAdd,
  toFavoriteRemove,
} from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AttentionModal from '../Modals/AttentionModal';
import { Loader } from '../Loader/Loader';

const NoticesItem = ({ array, del }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [pet, setPet] = useState([]);
  const [heartClick, setHeartClick] = useState([]);
  const [isToken, setIsToken] = useState('');
  const [isAttentionModal, setIsAttentionModal] = useState(false);
  const isLoad = useSelector(state => state.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');

      if (storedUserData && storedUserData !== '[]') {
        const user = JSON.parse(storedUserData);

        if (user?.token) {
          safeToken(user.token);
          setIsToken(user.token);

          const res = await dispatch(getCurrentUser());
          if (res.payload.noticesFavorites?.length > 0) {
            const favoriteIds = res.payload.noticesFavorites.map(
              item => item._id
            );
            setHeartClick(favoriteIds);
          }
        } else {
          return;
        }
      } else {
        return;
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const showModal = item => {
    setIsShowModal(true);
    setPet(item);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  const closeModalAttention = () => {
    setIsAttentionModal(false);
  };

  const toggleHeartClick = async id => {
    if (!isToken) {
      setIsAttentionModal(true);
      return;
    }

    try {
      let updatedFavorites;
      if (heartClick.includes(id)) {
        await dispatch(toFavoriteRemove(id));
        updatedFavorites = heartClick.filter(itemId => itemId !== id);
      } else {
        await dispatch(toFavoriteAdd(id));
        updatedFavorites = [...heartClick, id];
      }
      setHeartClick(updatedFavorites);
    } catch (error) {}
  };

  const deleteClick = async id => {
    await dispatch(toFavoriteRemove(id));
    window.location.reload();
  };

  return (
    <NoticesItemContainer>
      {isLoad ? (
        <Loader />
      ) : (
        array?.map(item => (
          <NoticesItemList key={item._id}>
            <NoticesItemImg>
              <NoticesImg src={item.imgURL} alt={item.title}></NoticesImg>
            </NoticesItemImg>
            <KindOfAnimal>
              <NoticesPDiv data-full-text={item.title}>
                <p>{item.title}</p>
              </NoticesPDiv>
              <KindOfAnimalStar>
                <svg width="20" height="20">
                  <use href={`${sprite}#star`}></use>
                </svg>
                <p>{item.popularity}</p>
              </KindOfAnimalStar>
            </KindOfAnimal>
            <AnimalInformation>
              <div>
                <AnimalInformationHeader>Name</AnimalInformationHeader>
                <p>{item.name}</p>
              </div>
              <div>
                <AnimalInformationHeader>Birthday</AnimalInformationHeader>
                <p>{item.birthday}</p>
              </div>
              <div>
                <AnimalInformationHeader>Sex</AnimalInformationHeader>
                <Information>{item.sex}</Information>
              </div>
              <div>
                <AnimalInformationHeader>Species</AnimalInformationHeader>
                <Information>{item.species}</Information>
              </div>
              <div>
                <AnimalInformationHeader>Category</AnimalInformationHeader>
                <Information>{item.category}</Information>
              </div>
            </AnimalInformation>
            <AnimalInformationAboutDiv>
              <AnimalInformationAbout>{item.comment}</AnimalInformationAbout>
            </AnimalInformationAboutDiv>
            <Buttons>
              <LearnMore onClick={() => showModal(item)}>Learn more</LearnMore>

              {del ? (
                <LikeButton onClick={() => deleteClick(item._id)}>
                  <svg width="20" height="20">
                    <use href={`${sprite}#trash-2`}></use>
                  </svg>
                </LikeButton>
              ) : (
                <LikeButton onClick={() => toggleHeartClick(item._id)}>
                  {heartClick?.includes(item._id) ? (
                    <svg width="20" height="20">
                      <use href={`${sprite}#hart`}></use>
                    </svg>
                  ) : (
                    <svg width="20" height="20">
                      <use href={`${sprite}#heart`}></use>
                    </svg>
                  )}
                </LikeButton>
              )}
            </Buttons>
          </NoticesItemList>
        ))
      )}

      {isShowModal && (
        <LearnMoreModal
          pet={pet}
          close={closeModal}
          fav={heartClick.includes(pet._id) ? 'true' : 'false'}
          toggleHeartClick={toggleHeartClick}
        />
      )}
      {isAttentionModal && <AttentionModal close={closeModalAttention} />}
    </NoticesItemContainer>
  );
};
export default NoticesItem;
