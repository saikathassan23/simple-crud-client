const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log('from client ', user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data inserted');
          e.target.reset();
        }
      });

    // reset form
  };

  return (
    <div className='text-center'>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' className='border-2' />
        <br />
        <input type='email' name='email' className='border-2' />
        <br />
        <input type='submit' value='Add to db' className='border-2' />
      </form>
    </div>
  );
};

export default Home;
