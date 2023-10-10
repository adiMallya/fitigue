import { useSelector, useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";
import { CustomSelect, RootState, ThunkAppDispatch } from "src/shared";
import { updateGoalStatus, deleteGoal } from "../goalActions";
import { Status } from "../types";
import { STATUS } from "src/utils/constants";
import { formatDate } from "src/utils";

interface PropType {
  _id: string;
  name: string;
  description: string;
  targetDate: string;
  targetCalories: number;
  status: Status;
  [key: string]: any;
}

const GoalsCard: React.FC<{ goal: PropType }> = ({ goal }): JSX.Element => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleDeleteAction = (goalId: string): void =>
    dispatch(deleteGoal(goalId, token!));

  const handleStatusUpdate = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void =>
    dispatch(updateGoalStatus(goal?._id, event.target.value as Status, token!));

  return (
    <div className="relative bg-inherit p-4 rounded-lg box-content w-full h-full border border-gray-600">
      <button
        type="button"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => handleDeleteAction(goal?._id)}
      >
        <span
          className="bg-transparent text-red-500 opacity-90 hover:opacity-100"
          aria-label="Delete"
        >
          <Delete />
        </span>
      </button>
      <p className="text-xl font-bold text-slate-100" role="title">
        {goal?.name}
      </p>
      <div className="flex flex-col gap-2 mt-8">
        <p className="text-md font-semibold text-slate-400">
          Description:{" "}
          <span className="font-normal text-slate-100" aria-label="Description">
            {goal?.description}
          </span>
        </p>
        <p className="text-md font-semibold text-slate-400">
          Date:{" "}
          <span className="font-normal text-slate-100" aria-label="Date">
            {formatDate(new Date(goal?.targetDate))}
          </span>
        </p>
        <p className="text-md font-semibold text-slate-400">
          Target:{" "}
          <span className="font-normal text-slate-100" aria-label="Calorie">
            {Math.round(goal?.targetCalories)}{" "}
            <span className="font-xs text-slate-400"> kcal </span>
          </span>
        </p>
        <label
          htmlFor="status"
          className=" flex gap-4 items-center text-md font-semibold text-slate-400"
        >
          Status:
          <span className="w-fit">
            <CustomSelect
              options={STATUS}
              onChange={handleStatusUpdate}
              name="status"
              placeholder={goal?.status}
              isDisabled={goal?.status === "Abandoned"}
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export { GoalsCard };
