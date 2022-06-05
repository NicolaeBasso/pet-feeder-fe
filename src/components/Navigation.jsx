import { Link } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <div className="App">
      <p className="text-red-800">Logged (localStorage) = {localStorage.getItem('logged')}</p>
      <p className="text-red-800">App navigration:</p>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/pets">Pets</Link>
        </li>
        <li>
          <Link to="/devices">Devices</Link>
        </li>
        <li>
          <Link to="/plans">Food plans</Link>
        </li>
      </ul>
    </div>
  );
};
