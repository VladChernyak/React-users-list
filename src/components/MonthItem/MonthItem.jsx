import React from 'react';
import { UsersList } from '../';
import cls from './MonthItem.module.css';

export default (props) => {
  const classes = [cls.item];

  props.users.length <= 2
    ? classes.push(cls.grey)
    : props.users.length <= 6
    ? classes.push(cls.blue)
    : props.users.length <= 10
    ? classes.push(cls.green)
    : classes.push(cls.red);

  return (
    <li className={classes.join(' ')}>
      {props.name}
      <div className={cls.info}>
        <UsersList users={props.users} />
      </div>
    </li>
  );
};
