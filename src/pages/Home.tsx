import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMyDetails } from "src/features/user";
import { Loader, Navbar, RootState, ThunkAppDispatch } from "src/shared";

function Home(): JSX.Element {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    dispatch(fetchMyDetails(token!));
  }, [dispatch, token]);

  return (
    <>
      <Navbar/>
      {loading ? <Loader/> : <div className="flex flex-col"></div>}
    </>
  );
}

export { Home };
