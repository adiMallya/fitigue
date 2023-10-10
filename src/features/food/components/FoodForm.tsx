import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import { createFood } from "..";

const FoodForm = (): JSX.Element => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token!);

  const [formData, setFormData] = useState({ name: "", carbs: "", proteins: "", fats: "" });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFoodForm = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const { name, carbs, proteins, fats } = formData;
    dispatch(createFood(name, Number(carbs), Number(proteins), Number(fats), token));
    setFormData({ name: "", carbs: "", proteins: "", fats: "" });
  };

  return (
    <form className="flex flex-wrap md:flex-nowrap items-center gap-8" onSubmit={handleFoodForm}>
      <input
        type="text"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="e.g: Pan Cakes"
        name="name"
        value={formData?.name}
        onChange={handleInputChange}
        aria-label="Food"
      />
      <input
        type="number"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="Carbs (in grams)"
        name="carbs"
        value={formData?.carbs}
        onChange={handleInputChange}
        aria-label="Carbohydrates"
      />
      <input
        type="number"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="Protein (in grams)"
        name="proteins"
        value={formData?.proteins}
        onChange={handleInputChange}
        aria-label="Protein"
      />
      <input
        type="number"
        className="bg-gray-950 w-full py-2 px-5 rounded-full border-2 border-slate-100 outline-none text text-slate-400"
        placeholder="Fat (in grams)"
        name="fats"
        value={formData?.fats}
        onChange={handleInputChange}
        aria-label="Fat"
      />
      <button
        type="submit"
        className="bg-cyan-600 dark:text-white font-semibold w-full py-2 px-4 border-none rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
      >
        Save Food
      </button>
    </form>
  );
};

export { FoodForm };