"use client";

// ==> Libs imports <===
import { FC, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
// ==> Components imports <===
import Button from "@/components/UI/Button/Button";

// ==> Other imports <===
import "../Auth.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { IAuthInput } from "@/types/auth.types";
import { emailRegex } from "@/constants/regex";
import { login } from "@/store/user/user.actions";
import { AppDispatch } from "@/store/store";
import { createNotify, notifyMode } from "@/utils/createNotify";
import axios from "axios";

const LoginPage: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
    // console.log(data);
    try {
      const response = await dispatch(login(data));

      if (login.rejected.match(response)) {
        if (axios.isAxiosError(response.payload)) {
          createNotify(
            response.payload.response?.data?.message,
            notifyMode.ERROR
          );
        }
      } else {
        reset();
        createNotify("You are successfully authorized!");
      }
    } catch (error) {
      console.log(error);

      createNotify("Something went wrong...", notifyMode.ERROR);
    }
  };

  return (
    <section className="login-page auth">
      <div className="container">
        <h1 className="title auth__title">Authorization</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="auth__wrapper">
          <label className="auth__label">
            <span className="auth__label-span">Email</span>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: emailRegex,
                  message: "Email must be valid",
                },
              })}
              type="text"
              className="auth__input"
              placeholder="Email..."
            />
            {errors.email && (
              <div className="auth__label-error">{errors.email.message}</div>
            )}
          </label>

          <label className="auth__label">
            <span className="auth__label-span">Password</span>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters!",
                },
              })}
              type={isPasswordVisible ? "text" : "password"}
              className="auth__input"
              placeholder="Password..."
            />
            {isPasswordVisible ? (
              <button
                type="button"
                className="auth__input-icon-btn"
                onClick={handlePasswordVisibility}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="auth__input-icon"
                >
                  <path
                    d="M9.28126 12C9.28126 12.6962 9.55782 13.3639 10.0501 13.8562C10.5424 14.3484 11.2101 14.625 11.9063 14.625C12.6025 14.625 13.2701 14.3484 13.7624 13.8562C14.2547 13.3639 14.5313 12.6962 14.5313 12C14.5313 11.3038 14.2547 10.6361 13.7624 10.1438C13.2701 9.65156 12.6025 9.375 11.9063 9.375C11.2101 9.375 10.5424 9.65156 10.0501 10.1438C9.55782 10.6361 9.28126 11.3038 9.28126 12ZM22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM11.9063 16.125C9.62814 16.125 7.78126 14.2781 7.78126 12C7.78126 9.72188 9.62814 7.875 11.9063 7.875C14.1844 7.875 16.0313 9.72188 16.0313 12C16.0313 14.2781 14.1844 16.125 11.9063 16.125Z"
                    fill="black"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="auth__input-icon-btn"
                onClick={handlePasswordVisibility}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9063 14.625C12.6025 14.625 13.2701 14.3484 13.7624 13.8562C14.2547 13.3639 14.5313 12.6962 14.5313 12C14.5313 11.9231 14.5277 11.847 14.5212 11.7717L11.678 14.6149C11.7532 14.6215 11.8292 14.625 11.9063 14.625ZM20.595 3.88032L19.5938 2.88001C19.5586 2.84487 19.5109 2.82513 19.4612 2.82513C19.4115 2.82513 19.3638 2.84487 19.3287 2.88001L16.7665 5.4429C15.3531 4.72055 13.7642 4.35938 12 4.35938C7.49533 4.35938 4.13439 6.70548 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C2.80314 14.4708 3.86994 15.9665 5.11759 17.0918L2.63814 19.5703C2.603 19.6055 2.58326 19.6532 2.58326 19.7029C2.58326 19.7526 2.603 19.8002 2.63814 19.8354L3.63869 20.8359C3.67384 20.8711 3.72152 20.8908 3.77122 20.8908C3.82093 20.8908 3.8686 20.8711 3.90376 20.8359L20.595 4.14563C20.6124 4.12822 20.6263 4.10754 20.6357 4.08478C20.6451 4.06202 20.65 4.03762 20.65 4.01298C20.65 3.98834 20.6451 3.96394 20.6357 3.94118C20.6263 3.91841 20.6124 3.89773 20.595 3.88032ZM7.78126 12C7.7812 11.2875 7.96568 10.5872 8.31673 9.96717C8.66779 9.34717 9.17345 8.82867 9.78445 8.46218C10.3955 8.0957 11.091 7.89372 11.8032 7.87592C12.5155 7.85812 13.2202 8.02512 13.8488 8.36063L12.7092 9.50016C12.2497 9.35301 11.7585 9.33529 11.2895 9.44894C10.8205 9.56259 10.3919 9.80323 10.0507 10.1444C9.70948 10.4857 9.46885 10.9143 9.3552 11.3832C9.24155 11.8522 9.25927 12.3434 9.40642 12.803L8.26689 13.9425C7.94711 13.345 7.78027 12.6777 7.78126 12Z"
                    fill="black"
                  />
                  <path
                    d="M22.0828 11.3953C21.2578 9.65782 20.2759 8.24102 19.1369 7.14493L15.7587 10.5234C16.0434 11.2679 16.1066 12.0788 15.9404 12.8583C15.7742 13.6378 15.3859 14.3525 14.8223 14.9161C14.2588 15.4797 13.544 15.868 12.7645 16.0342C11.985 16.2003 11.1741 16.1372 10.4297 15.8524L7.56421 18.7179C8.89358 19.3331 10.3722 19.6406 12 19.6406C16.5047 19.6406 19.8656 17.2945 22.0828 12.6023C22.1719 12.4136 22.2182 12.2075 22.2182 11.9988C22.2182 11.7901 22.1719 11.584 22.0828 11.3953Z"
                    fill="black"
                  />
                </svg>
              </button>
            )}
            {errors.password && (
              <div className="auth__label-error">{errors.password.message}</div>
            )}
          </label>

          <div className="auth__buttons">
            <Button type="submit" className="auth__button">
              Login
            </Button>
            <Link href="/auth/register" className="auth__link">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
