import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ActivityCard,
  ActivityForm,
  fetchActivities,
} from "src/features/activity";
import { Navbar, SkeletonCard } from "src/shared/components";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import { sortByCreatedTime } from "src/utils";
import toast from "react-hot-toast";

function Activity(): JSX.Element {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { loading, activities, error } = useSelector(
    (state: RootState) => state.activity
  );

  useEffect(() => {
    dispatch(fetchActivities(token!));
  }, [dispatch, token]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-start gap-12 w-5/6 m-auto">
        <h1 className="text-white font-bold text-4xl mt-4">Activities</h1>
        <section>
          <ActivityForm />
        </section>
        <section className="flex flex-wrap gap-8">
          {loading ? (
            [...Array(3)].map((_, idx) => <SkeletonCard key={idx} />)
          ) : activities?.length > 0 ? (
            sortByCreatedTime(activities).map((activity) => (
              <ActivityCard activity={activity} key={activity?._id} />
            ))
          ) : (
            <p className="font-bold text-lg text-gray-100 text-center">
              No activities to display
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export { Activity };
