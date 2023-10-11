import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
  NavigateNext,
  NavigateBefore,
} from "@mui/icons-material";
import { ButtonLoader, CustomSelect } from "src/shared";
import { RootState } from "src/shared/types";
import { useSignUp } from "src/features/auth";
import { SEX } from "src/utils/constants";

const SignUpPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const { formData, setFormData, handleSignUpForm } = useSignUp();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === ('weight' || 'height' || 'age') ? Number(value) : value,
    }));
  };

  const handleShowPassword = (): void => setShowPassword(!showPassword);

  const handleNextClick = () => setCurrentStep((prev) => prev + 1);
  const handleBackClick = () => setCurrentStep((prev) => prev - 1);

  useEffect(() => {
    isAuthenticated && navigate("/", { replace: true });
    dispatch({ type: "authenticate/clear" });
  }, [isAuthenticated, navigate, dispatch]);

  return (
    <div className="lg:max-w-xl flex flex-col items-center gap-8 my-8 mx-auto py-8 px-16 dark:text-white">
      <div className="flex flex-col items-center justify-center">
        <span aria-label="salutation" className="text-lg text-slate-400">
          Register today,
        </span>
        <h1 aria-label="welcome" className="dark:text-white text-2xl text-bold">
          Break the Tired
        </h1>
      </div>
      <form className="flex flex-col gap-8 w-full" onSubmit={handleSignUpForm}>
        {currentStep === 1 && (
          <>
            <div className="flex justify-between">
              <div className="relative dark:bg-gray-950 rounded-full h-10">
                <input
                  type="text"
                  className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleInputChange}
                  value={formData.firstName}
                  autoFocus
                  aria-label="Name"
                />
              </div>
              <div className="relative dark:bg-gray-950 rounded-full h-10">
                <input
                  type="text"
                  className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  value={formData.lastName}
                  aria-label="Name"
                />
              </div>
            </div>
            <div className="relative dark:bg-gray-950 rounded-full h-10">
              <input
                type="email"
                className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={formData.email}
                aria-label="email"
              />
            </div>
            <div className="relative dark:bg-gray-950 rounded-full h-10">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-400 placeholder:opacity-75"
                name="password"
                placeholder="Password"
                title="Password length must be of minimum 6 characters"
                onChange={handleInputChange}
                value={formData.password}
                aria-label="password"
              />
              <div className="absolute bottom-3 right-6 w-5 h-5 flex items-center cursor-pointer">
                <span
                  className="background-transparent text-cyan-600 font-semibold opacity-90 hover:opacity-100 cursor-pointer"
                  onClick={handleShowPassword}
                  aria-label="Icon"
                  role="button"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </span>
              </div>
            </div>
            {error ? (
              <div className="flex items-center text-xs text-red-400">
                {error}
              </div>
            ) : null}
            <button
              type="button"
              className="w-full flex justify-between bg-transparent border-solid border-2 border-cyan-400 dark:text-white font-semibold py-2 px-4 rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
              aria-label="Next"
              onClick={handleNextClick}
            >
              <span>Step 1/2</span> <NavigateNext />
            </button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="relative dark:bg-gray-950 rounded-full h-10">
              <input
                type="text"
                className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                name="username"
                placeholder="User Name"
                title="Remember username must be unique"
                onChange={handleInputChange}
                value={formData.username}
                autoFocus
                aria-label="Username"
              />
            </div>
            <div className="flex justify-between">
              <div className="relative dark:bg-gray-950 rounded-full h-10">
                <input
                  type="number"
                  className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                  name="weight"
                  placeholder="Weight (in Kg)"
                  onChange={handleInputChange}
                  value={formData?.weight}
                  aria-label="Weight"
                />
              </div>
              <div className="relative dark:bg-gray-950 rounded-full h-10">
                <input
                  type="number"
                  className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                  name="height"
                  placeholder="Height (in cm)"
                  onChange={handleInputChange}
                  value={formData.height}
                  aria-label="Height"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="relative dark:bg-gray-950 rounded-full h-10">
                <input
                  type="number"
                  className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
                  name="age"
                  placeholder="Age (> 5yr)"
                  min={5}
                  onChange={handleInputChange}
                  value={formData.age}
                  aria-label="Age"
                />
              </div>
              <CustomSelect options={SEX} placeholder="What is your sex?" name="sex" onChange={handleInputChange}/>
            </div>
            {error ? (
              <div className="flex items-center text-xs text-red-400">
                {error}
              </div>
            ) : null}
            <button
              type="submit"
              className="w-full bg-cyan-600 dark:text-white font-semibold py-2 px-4 border-none rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
              aria-label="Signup"
              disabled={loading}
            >
              {loading ? <ButtonLoader text="Authenticating..." /> : "Signup"}
            </button>
            <button
              type="button"
              className="w-full flex justify-between bg-transparent border-solid border-2 border-cyan-400 dark:text-white font-semibold py-2 px-4 rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
              aria-label="Back"
              onClick={handleBackClick}
            >
              <NavigateBefore /> <span>Step 2/2</span>
            </button>
          </>
        )}
      </form>
      <p className="dark:text-slate-200 text-semibold" aria-label="form-footer">
        Iam I already on Fitigue ?{" "}
        <span
          className="underline underline-offset-4 text-cyan-600 cursor-pointer"
          role="hyperlink"
          aria-label="Login link"
          onClick={() => navigate("/login")}
        >
          Login.
        </span>
      </p>
    </div>
  );
};

export { SignUpPage };
