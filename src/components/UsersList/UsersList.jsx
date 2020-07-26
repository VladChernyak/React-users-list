import React from 'react';
import { UserItem } from '../';
import cls from './UsersList.module.css';

export default (props) => (
  <ul className={cls.list}>
    {props.users.map((user, idx) => (
      <li key={user.lastName + idx}>
        <UserItem user={user} />
      </li>
    ))}
  </ul>
);
