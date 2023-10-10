import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import { createGoal } from "..";
import { formatDate } from "src/utils";
import { CustomDate } from "src/shared/components";

const GoalsForm = (): JSX.Element => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token!);

  const [formData, setFormData] = useState({ name: "", description: "", targetDate: "", targetCalories: "" });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string) => (date: Date | null): void => {
    if (date) {
      const dateInString = formatDate(date);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: dateInString,
      }));
    }
  };

  const handleGoalsForm = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const { name, description, targetDate, targetCalories } = formData;
    dispatch(createGoal(name, description, targetDate, Number(targetCalories), token));
  };

  return (
    <form className="flex flex-wrap md:flex-nowrap items-center gap-8" onSubmit={handleGoalsForm}>
      <input
        type="text"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="e.g: 75 Day Hard"
        name="name"
        value={formData?.name}
        onChange={handleInputChange}
        aria-label="Goal"
      />
      <input
        type="text"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="what is my goal?"
        name="description"
        value={formData?.description}
        onChange={handleInputChange}
        aria-label="Description"
      />
      <CustomDate value={formData?.targetDate ? new Date(formData.targetDate) : null} onChange={handleDateChange("targetDate")} />
      <input
        type="number"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="Calorie (in kcal)"
        name="targetCalories"
        value={formData?.targetCalories}
        onChange={handleInputChange}
        aria-label="Target"
      />
      <button
        type="submit"
        className="bg-cyan-600 dark:text-white font-semibold w-full py-2 px-4 border-none rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
      >
        Save Goal
      </button>
    </form>
  );
};

export { GoalsForm };