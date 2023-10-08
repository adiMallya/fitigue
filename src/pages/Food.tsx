import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
//   FoodForm,
  FoodCard,  
  fetchFood
} from "src/features/food";
import { Navbar, SkeletonCard } from "src/shared/components";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import { sortByCreatedTime } from "src/utils";
import toast from "react-hot-toast";
import { FoodData } from "src/features/food/types";

function Food(): JSX.Element {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const { loading, food, error } = useSelector(
    (state: RootState) => state.food
  );

  useEffect(() => {
    dispatch(fetchFood(token!));
  }, [dispatch, token]);

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
        <h1 className="text-white font-bold text-4xl mt-4">Food</h1>
        <section>
          {/* <FoodForm /> */}
        </section>
        <section className="flex flex-wrap gap-8">
          {loading ? (
            [...Array(3)].map((_, idx) => <SkeletonCard key={idx} />)
          ) : food?.length > 0 ? (
            sortByCreatedTime(food).map((food) => (
              <FoodCard food={food as FoodData} key={food?._id} />
            ))
          ) : (
            <p className="font-bold text-lg text-gray-100 text-center">
              No food added
            </p>
          )}
        </section>
      </main>
    </>
  );
}

export { Food };
