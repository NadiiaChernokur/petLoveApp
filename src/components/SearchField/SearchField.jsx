import { Input } from './SearchField.styled';
import React from 'react';

const SearchField = ({ value, onChange, placeholder }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchField;
