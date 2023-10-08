import { useSelector, useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";
import { RootState, ThunkAppDispatch } from "src/shared";
import { deleteActivity } from "../activityActions";
import { minToHourFormat } from "src/utils";

interface PropType {
  _id: string;
  name: string;
  duration: number;
  calories: number;
  [key: string]: any;
}

const ActivityCard: React.FC<{ activity: PropType }> = ({
  activity,
}): JSX.Element => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleDeleteAction = (activityId: string): void =>
    dispatch(deleteActivity(activityId, token!));

  return (
    <div className="relative bg-inherit p-4 rounded-lg box-content w-full md:w-auto h-full border border-gray-600">
      <button
        type="button"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => handleDeleteAction(activity?._id)}
      >
        <span
          className="bg-transparent text-red-500 opacity-90 hover:opacity-100"
          aria-label="Delete"
        >
          <Delete />
        </span>
      </button>
      <p className="text-xl font-bold text-slate-100">{activity?.name}</p>
      <div className="flex flex-col gap-2 mt-8">
      <p className="text-md font-semibold text-slate-400">
        Duration:{" "}
        <span className="font-normal text-slate-100">
          {minToHourFormat(activity?.duration)}
        </span>
      </p>
      <p className="text-md font-semibold text-slate-400">
        Calorie:{" "}
        <span className="font-normal text-slate-100">{Math.round(activity?.calories)} <span className="font-xs text-slate-400"> kcal </span></span>
      </p>
      </div>
    </div>
  );
};

export { ActivityCard };
