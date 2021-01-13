import React from 'react';
import { useForm } from 'react-hook-form';
import './AdminPostCode.css';

const AdminPostCode = () => {
  const { register, handleSubmit, errors } = useForm();
  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (data) => {
    console.log('Data: ', data);
  };

  return (
    <div>
      <p className = "admin__title"> Check Post Code </p>
      <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
      <table className="admin-table">
          <row>
            <td>
                <label className="pc-form__label">Post Code</label>
                <input className="pc-form__input" name="postcodeA" ref={register({ required: true })}/>
                {errors.postcodeA && <span className="pc-form__error">Required</span>}
            </td>
            <td>
                <label className="pc-form__label">Post Code</label>
                <input className="pc-form__input" name="postcodeB" ref={register({ required: true })}/>
                {errors.postcodeB && <span className="pc-form__error">Required</span>}

            </td>
          </row>
          <input className="pc-form__input" type="submit" />
        </table>
      </form>
    </div>
  );
};

export default AdminPostCode;
