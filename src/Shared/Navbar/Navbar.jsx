import  { useContext, useState } from 'react'
import { Link, } from 'react-router-dom'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';
import logo from '../../images/logo.png'


const Navbar = () => {
    const {user,  logOut} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const handleSignOut = () => {
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className='bg-blue-500'>
        <div className=' md:px-20 px-2 py-6'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                    <span className="text-white font-bold text-xl">SportsHub</span>
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 text-white lg:flex text-lg'>
                <li>
                    <ActiveLink to='/'>Home</ActiveLink>
                </li>
                <li>
                    <ActiveLink to="/about">About</ActiveLink>
                </li>
                <li>
                    <ActiveLink to="/myPlayer">My Player</ActiveLink>
                </li>
                <li>
                    <ActiveLink to="/addPlayer">Add Player</ActiveLink>
                </li>
                {/* <li>
                    <NavLink
                    to='/login'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Login
                    </NavLink>
                </li> */}
                
                </ul>

                <div className='flex  justify-center items-center gap-3'>
                    {user && <img className='w-11 h-11 rounded-full' src={user.photoURL} title={user.displayName}  alt="" /> }
                    
                    {user ? 
                    <button onClick={handleSignOut} className='hidden md:block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300'>Logout</button> :

                    <Link to='/login' className='hidden md:block '>
                    <button className="hidden md:block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300">LogIn</button>
                    </Link>
                    }
                </div>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className='w-8 text-white' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10 '>
                    <div className='p-5 bg-blue-500 text-white border rounded shadow-sm'>
                        {/* Logo & Button section */}
                        <div className='flex items-center justify-between mb-4'>
                        <div>
                            <Link to='/' className='inline-flex items-center'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <XMarkIcon className='w-8 text-white' />
                            </button>
                        </div>
                        </div>
                        {/* Mobile Nav Items Section */}
                        <nav>
                        <ul className='space-y-4 text-white'>
                            <li>
                            <Link to='/' className='default'>
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/about'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                About
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/myPlayer'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                My Player
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/addPlayer'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Add Player
                            </Link>
                            </li>
                            <li>
                            {user ? 
                            <button onClick={handleSignOut} className='bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300'>Logout</button> :

                            <Link to='/login' className='inline-flex md:block items-center'>
                            <button className='bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300'>Login</button>
                            </Link>
                            }
                            </li>
                        </ul>
                        <Link to='/register' className={user? 'hidden': 'inline-flex mt-5 hidden'}>
                            <button className='bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300'>Register</button>
                        </Link>
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;