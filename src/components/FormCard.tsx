import React, { useState } from 'react';

import './FormCard.scss';

const FormCard = () => {
  const [inputCardNumber, setInputCardNumber] = useState<string>('');
  const [inputExpiryDate, setInputExpiryDate] = useState<string>('');
  const [inputCardCode, setInputCardCode] = useState<string>('');

  const [inputCardNumberDirty, setInputCardNumberDirty] = useState<boolean>(false);
  const [inputExpirityDateDirty, setInputExpirityDateDirty] = useState<boolean>(false);
  const [inputCardCodeDirty, setInputCartDirty] = useState<boolean>(false);

  const [errorCardNumber, setErrorCardNumber] = useState<string>('Поле не может быть пустым!')
  const [errorExpiryDate, setErrorExpiryDate] = useState<string>('Поле не может быть пустым!')
  const [errorCardCode, setErrorCardCode] = useState<string>('Поле не может быть пустым!')

  const handleChangeCardNumber  = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]+$/;

    setInputCardNumber(e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '));

    if (e.target.value === '' || !reg.test(e.target.value)) {
      setErrorCardNumber('Данные не введены');
    } else {
      setErrorCardNumber('');
    }
  };

  const handleChangeExpiryDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const reg = /^[0-9]+$/;

    setInputExpiryDate(e.target.value.replace(/\W/gi, '').replace(/(.{2})/g, '$1/'))

    if (e.target.value === '' || !reg.test(e.target.value)) {
      setErrorExpiryDate('Данные не введены');
    } else {
      setErrorExpiryDate('');
    }
  };

  const handleChangeCardInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const reg = /^[0-9]+$/;

    setInputCardCode(e.target.value)

    if (e.target.value === '' || !reg.test(e.target.value)) {
      setErrorCardCode('Данные не введены');
    } else {
      setErrorCardCode('');
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "inputCardNumber":
        setInputCardNumberDirty(true);
        break;
      case "inputExpiryDate":
        setInputExpirityDateDirty(true);
        break;
       case "inputCardCode":
         setInputCartDirty(true);
        break;
    }
  };

  return (
    <form className="form-main">
      <div className="form-main__card-number">
        <label className="form-main__card-number__title" htmlFor="cardNumber">Cart Number</label>
        { (inputCardNumberDirty && errorCardNumber) && <div style={{ color: 'red' }}>{ errorCardNumber }</div> }
         <input
           name="inputCardNumber"
          onBlur={ e => blurHandler(e) }
          required
          type="text"
          id="cardNumber"
          value={ inputCardNumber }
          onChange={ handleChangeCardNumber }
          className="form-main__card-number__input"
          placeholder="**** **** **** ****"
          maxLength={ 20 }
        />
      </div>
      <div className="form-main__expiration-ccv-code">
        <div className="form-main__expiration-ccv-code__expiration-date">
          <label className="form-main__card-number__title" htmlFor="expiry-date">Expiry (MM/YY)</label>
          { (inputExpirityDateDirty && errorExpiryDate) && <div style={{ color: 'red' }}>{ errorExpiryDate }</div> }
          <input
            name="inputExpiryDate"
            onBlur={ e => blurHandler(e) }
            value={ inputExpiryDate }
            onChange={ handleChangeExpiryDate }
            id="expiry-date"
            className="form-main__expiration-ccv-code__expiration-date__input-expiry-date"
            placeholder="MM/YY"
            maxLength={ 4 }
          />
        </div>
        <div className="form-main__expiration-ccv-code__card-code">
          <label
            className="form-main__card-number__title" htmlFor="card-code"
          >Card Code</label>
          { (inputCardCodeDirty && errorCardCode) && <div style={{ color: 'red' }}>{ errorCardCode }</div> }
          <input
            name="inputCardCode"
            onBlur={ e => blurHandler(e) }
            value={ inputCardCode }
            onChange={ handleChangeCardInput }
            id="card-code"
            className="form-main__expiration-ccv-code__expiration-date__input-expiry-date"
            placeholder="CVC"
            maxLength={ 3 }
          />
        </div>
      </div>
    </form>
  );
};

export default FormCard;