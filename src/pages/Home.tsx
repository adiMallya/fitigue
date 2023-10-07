import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMyDetails, Dashboard } from "src/features/user";
import { Loader, Navbar, RootState, ThunkAppDispatch } from "src/shared";

function Home(): JSX.Element {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { loading, user } = useSelector((state: RootState) => state.user);

  const dataset = {
    totalCaloriesBurned: user?.totalCaloriesBurned ?? 0,
    totalCaloriesConsumed: user?.totalCaloriesConsumed ?? 0,
    totalCalorieGoal: user?.totalCalorieGoal ?? 0
  }

  useEffect(() => {
    dispatch(fetchMyDetails(token!));
  }, [dispatch, token]);

  return (
    <>
      <Navbar/>
      {loading ? <Loader /> : <main className="flex flex-col gap-12 w-4/6 m-auto">
        <section className="flex flex-wrap items-start mt-8">
          <h1 className="text-white font-bold text-4xl"><span className="text-slate-400 font-semibold text-2xl">Welcome back,</span>{` ${user?.firstName} `}</h1>
        </section>
        <Dashboard {...dataset}/>
      </main>}
    </>
  );
}

export { Home };
