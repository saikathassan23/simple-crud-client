import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData();
  const [allUsers, setAllUsers] = useState(users);
  console.log('all users', allUsers);
  const handleDelete = (_id) => {
    console.log('delete', _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = allUsers.filter((user) => user._id !== _id);
        console.log('filtered users ', newUsers);
        setAllUsers(newUsers);
      });
  };
  return (
    <div className='text-center mt-5'>
      <h1>Users: {allUsers.length}</h1>
      {allUsers?.map((user) => (
        <div
          className='bg-blue-200 p-2 m-2 w-1/2 mx-auto space-y-2 '
          key={user._id}
        >
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button
            onClick={() => handleDelete(user._id)}
            className='btn btn-error text-white capitalize'
          >
            Remove
          </button>
          <Link to={`/update/${user._id}`}>
            <button className='btn btn-primary ml-3 text-white capitalize'>
              Update
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
