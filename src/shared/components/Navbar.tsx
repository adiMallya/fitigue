import { Link } from 'react-router-dom';
import { Dashboard, FitnessCenterOutlined, Egg, TrackChanges } from '@mui/icons-material';

const Navbar = (): JSX.Element => {
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
            </ul>
        </nav>
    );
}

export { Navbar };
