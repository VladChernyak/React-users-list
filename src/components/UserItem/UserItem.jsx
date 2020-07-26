import React from 'react';
import cls from './UserItem.module.css';

export default ({ user: { firstName, lastName, dob, id } }) => (
  <div className={cls.user}>
    <div className={cls.name}>{firstName + ' ' + lastName}</div>
    <div className={cls.description}>
      <div>Birthday: {new Date(dob).toLocaleDateString()}</div>
      <div>id: {id}</div>
    </div>
  </div>
);
