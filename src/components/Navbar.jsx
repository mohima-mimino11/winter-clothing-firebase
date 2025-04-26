import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = <>
    <li className='text-lg font-semibold text-slate-500'><Link to="/" >Home</Link> </li>
    <li className='text-lg font-semibold text-slate-500'><Link to="/donation" >Donation Campaigns</Link> </li>
    <li className='text-lg font-semibold text-slate-500'><Link to="/" >How to Help</Link> </li>
    <li className='text-lg font-semibold text-slate-500'><Link to="/dashboard" >Dashboard</Link> </li>

  </>
  return (
    
      <div className="navbar bg-base-100">
          <div className="navbar-start items-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl">Winter_Help</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn text-lg font-semibold">Login</a>
          </div>
      </div>
    
  );
};

export default Navbar;