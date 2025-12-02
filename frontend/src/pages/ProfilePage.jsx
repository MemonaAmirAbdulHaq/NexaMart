
import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import Loader from "../components/Layout/Loader";
import ProfileSideBar from "../components/Profile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className={`${styles.section} flex flex-col md:flex-row bg-[#f5f5f5] py-10`}>
            {/* Sidebar */}
            <aside className="w-full md:w-[335px] sticky top-0 mb-5 md:mb-0 flex justify-center md:block">
              <ProfileSideBar active={active} setActive={setActive} />
            </aside>

            {/* Profile Content */}
            <main className="w-full md:ml-5">
              <ProfileContent active={active} />
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
