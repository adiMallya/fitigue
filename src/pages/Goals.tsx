import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GoalsForm,
  GoalsCard,  
  fetchGoals
} from "src/features/goals";
import { Navbar, SkeletonCard } from "src/shared/components";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import toast from "react-hot-toast";
import { GoalData } from "src/features/goals/types";

function Goals(): JSX.Element {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { loading, goals, error } = useSelector(
    (state: RootState) => state.goal
  );

  useEffect(() => {
    if (loading) {
      dispatch(fetchGoals(token!));
    }
  }, [token, loading]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch({ type: "clear/error" })
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-start gap-12 w-5/6 m-auto">
        <h1 className="text-white font-bold text-4xl mt-4">Your Goals</h1>
        <section>
          <GoalsForm />
        </section>
        <section className="flex flex-wrap gap-8">
          {loading ? (
            [...Array(3)].map((_, idx) => <SkeletonCard key={idx} />)
          ) : goals?.length > 0 ? (
            goals.map((goal) => (
              <GoalsCard goal={goal as GoalData} key={goal?._id} />
            ))
          ) : (
            <p className="font-bold text-lg text-gray-100 text-center">
              No goal added
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export { Goals };
