import React from 'react';

export default (props) => {
  const { name, label, value, onChange, type='text'} = props;
  
  return(
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type='text'
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}