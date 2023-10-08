export const SkeletonCard = (): JSX.Element => {
  return (
    <div className="bg-inherit p-4 rounded-lg box-content w-full md:w-40 h-full border border-gray-600 animate-pulse">
      <div className="h-5 bg-slate-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-slate-600 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-slate-600 rounded w-2/5"></div>
    </div>
  );
};
