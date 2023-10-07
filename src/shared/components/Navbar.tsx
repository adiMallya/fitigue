import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dashboard, FitnessCenterOutlined, Egg, TrackChanges, Face, Face3, FaceRetouchingNatural } from '@mui/icons-material';
import { RootState } from 'src/shared/types';

const Navbar = (): JSX.Element => {
    const { user } = useSelector((state: RootState) => state.user);

    return (
        <nav className="fixed inset-x-0 bottom-4 md:static md:top-0 bg-cyan-600 p-4 rounded-full md:rounded-none md:w-full flex items-center justify-around md:justify-center mb-4">
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
                    <Link to="#" className="text-white flex flex-col items-center">
                        {user?.sex === 'Female' ? (<Face3/>) : user?.sex === 'Male' ? <Face/> : <FaceRetouchingNatural/>}
                        <span className='md:block hidden' aria-label='Profile'>Profile</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };
