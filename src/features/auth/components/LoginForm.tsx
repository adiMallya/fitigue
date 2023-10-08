import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ButtonLoader } from "src/shared";
import { RootState, ThunkAppDispatch } from "src/shared/types";
import { login } from "../authActions";

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkAppDispatch>();
  const { isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleShowPassword = (): void => setShowPassword(!showPassword);

  const handleLoginForm = (event: React.FocusEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { email, password } = formData;
    dispatch(login(email, password));
  };

  const handleGuestLogin = (): void =>
    setFormData(() => ({
      email: "john@gmail.com",
      password: "P@ssw0rd",
    }));

  useEffect(() => {
    isAuthenticated && navigate("/", { replace: true });
    dispatch({ type: "authenticate/clear" });
  }, [isAuthenticated, navigate, dispatch]);

  return (
    <div className="md:max-w-xl flex flex-col items-center gap-8 my-8 mx-auto py-8 px-16 dark:text-white">
      <div className="flex flex-col items-center justify-center">
        <span aria-label="salutation" className="text-lg text-slate-400">
          Hey there,
        </span>
        <h1 aria-label="welcome" className="dark:text-white text-2xl text-bold">
          Welcome Back
        </h1>
      </div>
      <form className="flex flex-col gap-8 w-full" onSubmit={handleLoginForm}>
        <div className="relative dark:bg-gray-950 rounded-full h-10">
          <input
            type="email"
            className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-500 placeholder:opacity-75"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
            autoFocus
            aria-label="email"
          />
          {error ? (
            <div className="absolute -bottom-5 left-1 text-xs text-red-400">
              {error}
            </div>
          ) : null}
        </div>
        <div className="relative dark:bg-gray-950 rounded-full h-10">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full h-full bg-transparent py-2 px-5 rounded-full border-none outline-none text text-slate-400 focus:ring dark:focus:ring-slate-400 placeholder:opacity-75"
            name="password"
            placeholder="Password"
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
          {error ? (
            <div className="absolute -bottom-5 left-1 text-xs text-red-400">
              {error}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 dark:text-white font-semibold py-2 px-4 border-none rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
          aria-label="Login"
          disabled={loading}
        >
          {loading ? (
            <ButtonLoader text="Authenticating..."/>
          ) : (
            "Login"
          )}
        </button>
        <button
          type="button"
          className="w-full bg-transparent border-solid border-2 border-cyan-400 dark:text-white font-semibold py-2 px-4 rounded-full outline-none opacity-90 hover:opacity-100 cursor-pointer"
          aria-label="Guest Login"
          onClick={handleGuestLogin}
        >
          Fill Test Credentials
        </button>
      </form>
      <p className="dark:text-slate-200 text-semibold" aria-label="form-footer">
        New here ?{" "}
        <span
          className="underline underline-offset-4 text-cyan-600 cursor-pointer"
          role="hyperlink"
          aria-label="SignUp link"
          onClick={() => navigate("/signup")}
        >
          Sign Up.
        </span>
      </p>
    </div>
  );
};

export { LoginPage };
