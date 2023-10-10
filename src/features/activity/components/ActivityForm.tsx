import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CustomSelect } from "src/shared";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import { ACTIVITIES } from "src/utils";
import { createActivity } from "..";

const ActivityForm = (): JSX.Element => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token!);

  const [formData, setFormData] = useState({ type: "", duration: "" });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleActivityForm = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const { type, duration } = formData;
    dispatch(createActivity(type, Number(duration), token));
    setFormData({ type: "", duration: "" });
  };

  return (
    <form className="flex flex-wrap md:flex-nowrap items-center gap-8" onSubmit={handleActivityForm}>
      <div className='w-full'>
      <CustomSelect
        options={ACTIVITIES}
        placeholder="Select an activity"
        name="type"
        onChange={handleInputChange}
      />
      </div>
      <input
        type="number"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="60 (in min)"
        name="duration"
        value={formData?.duration}
        onChange={handleInputChange}
        aria-label="Duration"
      />
      <button
        type="submit"
        className="bg-cyan-600 dark:text-white font-semibold w-full py-2 px-4 border-none rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
      >
        Save Activity
      </button>
    </form>
  );
};

export { ActivityForm };