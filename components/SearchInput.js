import React from 'react';
import { Input } from 'antd';
function SearchInput({ onChange }) {
  return (
    <Input
      placeholder="Search for any movie..."
      onChange={(e) => {
        onChange(e.target.value);
      }}
      style={{ width: '100%' }}
    />
  );
}
export default SearchInput;
