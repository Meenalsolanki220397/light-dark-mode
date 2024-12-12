import { Link } from 'react-router-dom';
import { useTheme } from '../theme-context';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/blog"> Blogs </Link>

      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
