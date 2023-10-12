import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const user = useLoaderData();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  function handleUpdate(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const result = { name, email };
    console.log('from update page ', result);
    // fetch method for put operation
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('put method ', data);
        if (data.modifiedCount === 0) {
          setError('Same as the prev');
        } else if (data.modifiedCount === 1) {
          setSuccess('Updated Successfully');
        }
      });
    form.reset();
  }

  return (
    <div className='text-center'>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate}>
        <input
          type='text'
          name='name'
          defaultValue={user.name}
          className='border-2'
        />
        <br />
        <input
          type='email'
          name='email'
          defaultValue={user.email}
          className='border-2'
        />
        <br />
        <input type='submit' value='Update' className='border-2' />
      </form>
      <p className='text-red-800'>{error && error}</p>

      <p className='text-green-600'>{success && success}</p>
    </div>
  );
};

export default Update;
