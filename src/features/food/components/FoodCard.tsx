import { useSelector, useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";
import { RootState, ThunkAppDispatch } from "src/shared";
import { deleteFood } from "../foodActions";

interface PropType {
  _id: string;
  name: string;
    carbs: number;
    proteins: number;
    fats: number;
  calories: number;
  [key: string]: any;
}

const FoodCard: React.FC<{ food: PropType }> = ({
  food
}): JSX.Element => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleDeleteAction = (foodId: string): void =>
    dispatch(deleteFood(foodId, token!));

  return (
    <div className="relative bg-inherit p-4 rounded-lg box-content w-full md:w-52 h-full border border-gray-600">
      <button
        type="button"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => handleDeleteAction(food?._id)}
      >
        <span
          className="bg-transparent text-red-500 opacity-90 hover:opacity-100"
          aria-label="Delete"
        >
          <Delete />
        </span>
      </button>
      <p className="text-xl font-bold text-slate-100" role="title">{food?.name}</p>
      <div className="flex flex-col gap-2 mt-8">
      <p className="text-md font-semibold text-slate-400">
        Carbohydrate:{" "}
        <span className="font-normal text-slate-100" aria-label="Carbohydrate">
          {Math.round(food?.carbs)} <span className="font-xs text-slate-400"> g </span>
        </span>
      </p>
      <p className="text-md font-semibold text-slate-400">
        Protein:{" "}
        <span className="font-normal text-slate-100" aria-label="Protein">
          {Math.round(food?.proteins)} <span className="font-xs text-slate-400"> g </span>
        </span>
      </p>
      <p className="text-md font-semibold text-slate-400">
        Fat:{" "}
        <span className="font-normal text-slate-100" aria-label="Fat">
          {Math.round(food?.fats)} <span className="font-xs text-slate-400"> g </span>
        </span>
      </p>
      <p className="text-md font-semibold text-slate-400">
        Calorie:{" "}
        <span className="font-normal text-slate-100" aria-label="Calorie">{Math.round(food?.calories)} <span className="font-xs text-slate-400"> kcal </span></span>
      </p>
      </div>
    </div>
  );
};

export { FoodCard };
