import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Input.module.scss';

const Input = ({type, name, value, handleValue}) => (
  <div className={clsx(styles.input, 'input-group mb-3')}>
    <span className="input-group-text" id="basic-addon1">Search</span>
    <input
      className='form-control'
      name={name}
      type={type}
      value={value || ''}
      onChange={e => handleValue(e.target.value)}
    />
  </div>
  
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleValue: PropTypes.func,
};

Input.defaultProps = {
  handleValue: () => {},
};

export default Input;