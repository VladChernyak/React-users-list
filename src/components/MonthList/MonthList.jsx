import React from 'react';
import { MonthItem, Loader } from '../';
import cls from './MonthList.module.css';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getUsersList = async () => {
  const response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');

  return response.json();
};

export default class MonthList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: {},
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const users = await getUsersList();
      const result = {};

      MONTH_NAMES.forEach((month, idx) => {
        const sortedUsers = users.filter((user) => new Date(user.dob).getMonth() === idx);

        result[month] = sortedUsers;
      });

      this.setState({
        months: result,
        error: false,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const listItems = Object.keys(this.state.months).map((month, idx) => (
      <MonthItem key={month + idx} name={month} users={this.state.months[month]} />
    ));

    return this.state.error ? (
      <h1 className={cls.error}>{'Something went wrong. Error: ' + this.state.error}</h1>
    ) : listItems.length ? (
      <ul className={cls.list}>{listItems}</ul>
    ) : (
      <Loader />
    );
  }
}
