import { useForm, useWatch } from 'react-hook-form';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AddPetAddPhoto,
  AddPetButtonsDiv,
  AddPetContsiner,
  AddPetFormContainer,
  AddPetFormTitel,
  AddPetFormTitelSpan,
  AddPetImg,
  AddPetPhoto,
  AddPetRadio,
  AddPetRadioContainer,
  AddPetRadioFemaleLabel,
  AddPetSelect,
  BackButton,
  BirthdayDiv,
  CalendarSvg,
  CustomButton,
  DownloadPhotoDiv,
  ErrorMessage,
  Form,
  FormInput,
  FormInputFile,
  ImgDiv,
  PawDiv,
  SexDiv,
  SubmitButton,
} from './AddPet.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPet, getSpecies, safeToken } from '../../redux/operation';

import sprite from '../../img/sprite.svg';
import sprit from '../../img/svg.svg';
import spri from '../../img/sex.svg';
import sprsvg from '../../img/sprite2.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup.string().required('Name is required'),
  imgURL: yup
    .string()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Invalid URL')
    .required('Image URL is required'),
  species: yup.string().required('Species is required'),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)')
    .required('Birthday is required'),
  sex: yup.string().required('Sex is required'),
});

const AddPet = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [option, setOption] = useState([]);
  const [selectedSex, setSelectedSex] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const fetchSpecies = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');

      if (storedUserData) {
        const user = JSON.parse(storedUserData);

        safeToken(user.token);
        const res = await dispatch(getSpecies());

        setOption(res.payload);
      }
    };
    fetchSpecies();
  }, [dispatch]);

  const onSubmit = async data => {
    try {
      const res = await dispatch(addPet(data));

      if (
        (res.error && res.payload.includes('401')) ||
        (res.error && res.payload.includes('400'))
      ) {
        toast('You are not authorized');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];

    if (file) {
      const blobUrl = URL.createObjectURL(file);

      const validUrl = blobUrl.replace('blob:', '');
      const url = validUrl + '.png';

      setSelectedFile(blobUrl);
      setValue('imgURL', url);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };
  const handleChange = event => {
    setSelectedSex(event.target.value);
  };

  return (
    <AddPetContsiner>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <ImgDiv>
        <AddPetImg></AddPetImg>
      </ImgDiv>
      <AddPetFormContainer>
        <AddPetFormTitel>
          Add my pet /
          <AddPetFormTitelSpan>Personal details</AddPetFormTitelSpan>
        </AddPetFormTitel>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AddPetRadioContainer>
              <SexDiv $bgrColor="#f43f5e" $bgColor="rgba(244, 63, 94, 0.1)">
                <AddPetRadio
                  type="radio"
                  id="female"
                  value="female"
                  {...register('sex')}
                  onChange={handleChange}
                />

                <AddPetRadioFemaleLabel htmlFor="female" $bgrColor="#f43f5e">
                  {selectedSex === 'female' ? (
                    <svg width="24" height="24">
                      <use href={`${spri}#femaleW`}></use>
                    </svg>
                  ) : (
                    <svg width="24" height="24">
                      <use href={`${sprite}#female`}></use>
                    </svg>
                  )}
                </AddPetRadioFemaleLabel>
              </SexDiv>
              <SexDiv $bgrColor="#3fd6f4" $bgColor="rgba(84, 173, 255, 0.1)">
                <AddPetRadio
                  type="radio"
                  id="male"
                  value="male"
                  {...register('sex')}
                  onChange={handleChange}
                />
                <AddPetRadioFemaleLabel htmlFor="male" $bgrColor="#3fd6f4">
                  {selectedSex === 'male' ? (
                    <svg width="24" height="24">
                      <use href={`${spri}#maleW`}></use>
                    </svg>
                  ) : (
                    <svg width="24" height="24">
                      <use href={`${sprite}#male`}></use>
                    </svg>
                  )}
                </AddPetRadioFemaleLabel>
              </SexDiv>
              <SexDiv $bgrColor="#f7bf4e" $bgColor="#fff4df">
                <AddPetRadio
                  type="radio"
                  id="multiple"
                  value="multiple"
                  {...register('sex')}
                  onChange={handleChange}
                />
                <AddPetRadioFemaleLabel htmlFor="multiple" $bgrColor=" #f7bb41">
                  <svg width="24" height="24">
                    <use
                      href={`${sprite}#healthicons_sexual-reproductive-health`}
                    ></use>
                  </svg>
                </AddPetRadioFemaleLabel>
              </SexDiv>
            </AddPetRadioContainer>
            {errors.sex && <ErrorMessage>{errors.sex.message}</ErrorMessage>}
          </div>
          <PawDiv>
            {selectedFile ? (
              <AddPetPhoto src={selectedFile} alt={'title'}></AddPetPhoto>
            ) : (
              <svg width="86" height="86">
                <use href={`${sprit}#image`}></use>
              </svg>
            )}
          </PawDiv>

          <DownloadPhotoDiv>
            <div>
              <FormInputFile value={selectedFile} />
              {errors.imgURL && (
                <ErrorMessage>{errors.imgURL.message}</ErrorMessage>
              )}
            </div>
            <AddPetAddPhoto
              {...register('imgURL')}
              id="fileInput"
              type="file"
              accept="image/png, image/jpeg, image/gif, image/bmp, image/webp"
              onChange={handleFileChange}
            />

            <CustomButton type="button" onClick={handleButtonClick}>
              Upload Photo
              <svg width="18" height="18">
                <use href={`${sprsvg}#upload-cloud`}></use>
              </svg>
            </CustomButton>
          </DownloadPhotoDiv>
          <div>
            <label></label>
            <FormInput {...register('title')} placeholder="Title" />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label></label>
            <FormInput {...register('name')} placeholder="Pet’s Name" />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <BirthdayDiv>
            <div style={{ position: 'relative' }}>
              <FormInput {...register('birthday')} placeholder="0000.00.00" />
              {errors.birthday && (
                <ErrorMessage>{errors.birthday.message}</ErrorMessage>
              )}
              <CalendarSvg>
                <svg width="18" height="18">
                  <use href={`${sprite}#calendar`}></use>
                </svg>
              </CalendarSvg>
            </div>
            <div>
              <AddPetSelect
                name="species"
                {...register('species')}
                onChange={e => setValue('species', e.target.value)}
              >
                <option value="">Type of pet</option>
                {option?.map((petType, index) => (
                  <option key={index} value={petType}>
                    {petType}
                  </option>
                ))}
              </AddPetSelect>
              {errors.species && (
                <ErrorMessage>{errors.species.message}</ErrorMessage>
              )}
            </div>
          </BirthdayDiv>
          <AddPetButtonsDiv>
            <BackButton type="button" onClick={handleBack}>
              Back
            </BackButton>
            <SubmitButton type="submit">Submit</SubmitButton>
          </AddPetButtonsDiv>
        </Form>
      </AddPetFormContainer>
    </AddPetContsiner>
  );
};
export default AddPet;
