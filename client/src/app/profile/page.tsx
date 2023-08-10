// ==> Libs imports <===
import { IUser } from "@/types/user.types";
import { FC } from "react";
import axios from "@/utils/axios";
// ==> Components imports <===

// ==> Other imports <===
// import "./UserProfilePage.scss";

const getUserInfo = async () => {
  const response = await axios.get("http://localhost:4444/api/users/profile");

  return response.data;
};

const UserProfilePage: FC = async () => {
  const userInfo: IUser[] = await getUserInfo();
  console.log(userInfo);

  return (
    <section className="user-profile-page">
      <div className="container">UserProfilePage</div>
    </section>
  );
};

export default UserProfilePage;
