import React, { useEffect } from 'react';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './../store/action-creators/user';

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
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
