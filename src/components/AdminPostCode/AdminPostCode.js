import React from 'react';
import { useForm } from 'react-hook-form';
import './AdminPostCode.css';

const AdminPostCode = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Data: ', data);
  };

  return (
    <div>
      <p className = "pc-form__title"> Check Post Code </p>

      <form className="pc-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="pc-form__label">First Code</label>
        <input className="pc-form__input" name="postcodeA" ref={register({ required: true, maxLength: 7 })}/>
        <label className="pc-form__label">Last Code</label>
        <input className="pc-form__input" name="postcodeB" ref={register}/>

        <input className="pc-form__input" type="submit" />
      </form>
    </div>
  );
};

export default AdminPostCode;
