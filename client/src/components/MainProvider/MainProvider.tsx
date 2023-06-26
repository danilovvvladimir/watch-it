"use client";

// ==> Libs imports <===
import { FC } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ==> Components imports <===

// ==> Other imports <===
import { store } from "@/store/store";

interface MainProviderProps {
  children: React.ReactNode;
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <ToastContainer
          autoClose={3000}
          position="top-center"
          pauseOnHover={false}
        />
      </Provider>
    </>
  );
};

export default MainProvider;
