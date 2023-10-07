import { FitnessCenterOutlined, Egg, TrackChanges } from "@mui/icons-material";

const Dashboard = (props: {
  totalCaloriesBurned: number;
  totalCaloriesConsumed: number;
  totalCalorieGoal: number;
}): JSX.Element => {
  const { totalCaloriesBurned, totalCaloriesConsumed, totalCalorieGoal } =
    props;

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8 md:justify-center">
      <div
        className="bg-inherit p-4 rounded-lg box-content h-full shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Burnt <FitnessCenterOutlined />
        </p>
        <p className="text-3xl dark:text-white font-bold">
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
        className="bg-inherit p-4 rounded-lg box-content h-full shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Consumed <Egg />
        </p>
        <p className="text-3xl dark:text-white font-bold">
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
      <div
        className="bg-inherit p-4 rounded-lg box-content h-full shadow-neumorphic"
      >
        <p className="flex gap-0.5 font-bold text-slate-400">
          Target <TrackChanges />
        </p>
        <p className="text-3xl dark:text-white font-bold">
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
    </div>
  );
};

export { Dashboard };
