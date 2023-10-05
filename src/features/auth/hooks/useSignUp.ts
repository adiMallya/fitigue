import { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkAppDispatch } from "src/shared";
import { signUp } from "src/features/auth";

const useSignUp = () => {
    const dispatch = useDispatch<ThunkAppDispatch>();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        age: 5,
        sex: "",
        height: 0,
        weight: 0,
        phone: ""
    });

    const handleSignUpForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(signUp(formData));
    };

    return { formData, setFormData, handleSignUpForm };
};

export { useSignUp };