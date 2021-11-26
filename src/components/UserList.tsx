import React, { useEffect } from 'react';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './../store/action-creators/user';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
