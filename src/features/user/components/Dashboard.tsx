import { FitnessCenterOutlined, Egg, TrackChanges } from "@mui/icons-material";

interface PropType {
  totalCaloriesBurned: number;
  totalCaloriesConsumed: number;
  totalCalorieGoal: number;
}

const Dashboard: React.FC<PropType> = (props): JSX.Element => {
  const { totalCaloriesBurned, totalCaloriesConsumed, totalCalorieGoal } =
    props;

  let totalCalorieRemaining: number = totalCalorieGoal - totalCaloriesConsumed + totalCaloriesBurned;
  totalCalorieRemaining = Math.sign(totalCalorieRemaining) * Math.round(Math.abs(totalCalorieRemaining));

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:col-gap-8 md:row-gap-16 md:justify-center">
      <div
        className="bg-inherit p-4 rounded-lg box-content h-full border border-gray-700 hover:shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Target <TrackChanges />
        </p>
        <p className="text-3xl text-sky-400 font-bold">
          {Math.round(totalCalorieGoal)}
          <span
            aria-label="unit"
            className="text-sm text-slate-400 font-semibold"
          >
            {" "}
            Cal{" "}
          </span>
        </p>
      </div>
      <div
        className="bg-inherit p-4 rounded-lg box-content h-full border border-gray-700 hover:shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Remaining <TrackChanges />
        </p>
        <p className={`text-3xl ${totalCalorieRemaining < 0 ? 'text-red-600' : 'text-green-500'} font-bold`}>
          {totalCalorieRemaining}
          <span
            aria-label="unit"
            className="text-sm text-slate-400 font-semibold"
          >
            {" "}
            Cal{" "}
          </span>
        </p>
      </div>
      <div
        className="bg-inherit p-4 rounded-lg box-content h-full border border-gray-700 hover:shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Burnt <FitnessCenterOutlined />
        </p>
        <p className="text-3xl text-amber-600 font-bold">
          {Math.round(totalCaloriesBurned)}
          <span
            aria-label="unit"
            className="text-sm text-slate-400 font-semibold"
          >
            {" "}
            Cal{" "}
          </span>
        </p>
      </div>
      <div
        className="bg-inherit p-4 rounded-lg box-content h-full border border-gray-700 hover:shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Consumed <Egg />
        </p>
        <p className="text-3xl text-yellow-500 font-bold">
          {Math.round(totalCaloriesConsumed)}
          <span
            aria-label="unit"
            className="text-sm text-slate-400 font-semibold"
          >
            {" "}
            Cal{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export { Dashboard };
