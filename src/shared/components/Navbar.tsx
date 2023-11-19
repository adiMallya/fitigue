import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dashboard, FitnessCenterOutlined, Egg, TrackChanges, Logout, GitHub } from '@mui/icons-material';
import { ThunkAppDispatch } from 'src/shared/types';

const Navbar = (): JSX.Element => {
    const dispatch = useDispatch<ThunkAppDispatch>();
    
    const handleLogout = () => dispatch({ type: 'authenticate/logout' });

    return (
        <nav className="fixed inset-x-0 bottom-0 md:static md:top-0 bg-cyan-600 p-4 md:rounded-none md:w-full flex items-center justify-around md:justify-center z-40">
            <ul className="flex w-full justify-around">
                <li>
                    <Link to="/activity" className="text-white flex flex-col items-center">
                        <FitnessCenterOutlined/>
                        <span className="md:block hidden" aria-label='Activity'>Activity</span>
                    </Link>
                </li>
                <li>
                    <Link to="/food" className="text-white flex flex-col items-center">
                        <Egg/>
                        <span className="md:block hidden" aria-label='Food'>Food</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white flex flex-col items-center">
                        <Dashboard/>
                        <span className="md:block hidden" aria-label='Dashboard'>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/goal" className="text-white flex flex-col items-center">
                        <TrackChanges/>
                        <span className="md:block hidden" aria-label='Goal'>Goal</span>
                    </Link>
                </li>
                <li>
                    <a href='https://github.com/adiMallya/fitigue' className="text-white flex flex-col items-center">
                        <GitHub/>
                        <span className="md:block hidden" aria-label='Goal'>Github</span>
                    </a>
                </li>
                <li>
                    <Link to="#" className="text-white flex flex-col items-center" onClick={handleLogout}>
                        {/* {user?.sex === 'Female' ? (<Face3/>) : user?.sex === 'Male' ? <Face/> : <FaceRetouchingNatural/>}
                        <span className='md:block hidden' aria-label='Profile'>Profile</span> */}
                        <Logout />
                        <span className='md:block hidden' aria-label='Log out'>Log Out</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };
