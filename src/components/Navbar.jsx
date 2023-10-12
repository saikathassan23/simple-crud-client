import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='text-center bg-green-300 flex justify-center gap-5'>
      <Link to={'/'}>Home</Link>
      <Link to={'/users'}>Users</Link>
    </div>
  );
};

export default Navbar;
