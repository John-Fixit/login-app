import "./sidebar.css";
import { useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { IoIosLogOut } from "react-icons/io";
import useWindowSize from "../../hooks/useWindowSize";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import CustomButton from "../buttons/CustomButton";
import { MenuIcon } from "../svg_icons/svg_icons";

export default function Sidebar({ visible, show, isAdmin }) {
  const menus = [
    // {path: "", name: "Apps", icon: IoApps},
    { path: "/login history", name: "Login History", icon: RiLoginCircleFill },
  ];

  //   const { data } = useProfileData();

  const screenWidth = useWindowSize().width;

  const activePath = useLocation().pathname;

  const navigate = useNavigate();

  const [modal, contextHolder] = Modal.useModal({});

  const current_page_title = activePath.split("/").pop()?.replace("_", " ")?.replace(/%20/g, ' ')?.replace(/\b\w/g, (char) => char.toUpperCase());



  useEffect(() => {
    if (screenWidth >= 900) {
      show(true);
    }
  }, [screenWidth]);

  //   const confirmLogout = () => {
  //     modal.confirm({
  //       title: "Confirm",
  //       icon: <ExclamationCircleOutlined />,
  //       content: "Are you sure to proceed to logout",

  //       footer: (_, { OkBtn, CancelBtn }) => (
  //         <>
  //           <CancelBtn />
  //           <CustomButton size={"middle"} onClick={ () => {
  //         logoutFn();
  //         navigate(ROUTES.login);
  //       }}  >Confirm</CustomButton>
  //         </>
  //       ),
  //     });
  //   };

  const getInitials = useCallback((name) => {
    const words = name?.trim()?.split(" ");

    // If there is only one word, return the first two letters.
    if (words?.length === 1) {
      return words?.[0]?.substring(0, 2)?.toUpperCase();
    }

    // If there are multiple words, return the first letter of each.
    return words
      ?.map((word) => word[0]) // Get the first letter of each word.
      ?.join("")
      ?.toUpperCase();
  }, []);

  return (
    <>
      <div className="emandate_mobile-nav h-screen lg:px-[20%] px-3 md:py-3 py-8 flex justify-between md:shadow-sm shadow">
        <div className="flex items-center">
          {screenWidth < 451 && (
            <button className="mobile-nav-btn" onClick={() => show(!visible)}>
              <MenuIcon clicked={visible} />
            </button>
          )}
          <p className="font-[600] capitalize ps-10">{current_page_title}</p>
        </div>
      </div>
      <nav className={`emandate_sidebar_nav bg-[#272c34] h-[100vh] pt-[2rem] pb-[1rem] text-white ${visible ? "" : "sidebar"}`}>
        {screenWidth < 900 && (
          <button
            className={`nav_btn`}
            type="button"
            onClick={() => show(!visible)}
          >
            {visible ? (
              <IoIosArrowBack size={"8vh"} />
            ) : (
              <IoIosArrowForward size={"8vh"} />
            )}
          </button>
        )}
        {/* <div className="flex gap-3 items-center pb-3 ps-3">
          <div
            style={{
              height: "46px",
              width: "46px",
              borderRadius: "50%",
              backgroundColor: "#F9D7D68F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e6e7e9",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            {getInitials(data?.company?.name)}
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold my-auto line-clamp-1" style={{ fontSize: "16px" }}>
              
              {data?.company?.name ?? ""}
            </p>
            <p className="font-medium my-auto text-[12px] line-clamp-1">ID: {(data?.company?.company_id)?.slice(0, 5)}...</p>
          </div>
        </div> */}
        <hr className="border-0 h-[1px] bg-[#7D83984D] my-3" />
        <div className="flex flex-col mt-2 mb-2 px-[1rem]">
          <Link
            to={"/"}
            className={`p-3 rounded no-underline flex items-center gap-2 font-medium ${activePath==="/" ? "text-[#ffff]": "text-gray-500"}`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "14px",
                // backgroundColor: activePath==="/" ? "#e6e7e9": "",
              width: "100%",
            }}
            onClick={() => {
              window.innerWidth < 768 && show(!visible);
            }}
          >
            <IoApps size={"3vh"} sx={{ color: "#ACA9BB" }} />
            App List
          </Link>
        </div>
        <hr className="border-0 h-[1px] bg-[#7D83984D] my-3" />
        <div className="flex flex-col mb-3 px-[1rem] gap-y-">
          {menus?.map((item, index) => (
            <Link
              to={item?.path}
              className={`p-3 rounded no-underline flex items-center gap-2 font-medium ${current_page_title === item?.name ? "text-[#ffff]": "text-gray-500"}`}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "14px",
                // color: current_page_title === item?.name ? "#272c34": "#fff",
                width: "100%",
              }}
              onClick={() => {
                window.innerWidth < 768 && show(!visible);
              }}
            >
              <item.icon size={"3vh"} style={{ color: "#ACA9BB" }} />
              {item?.name}
            </Link>
          ))}
        </div>
        {/* <hr className="border-0 h-[1px] bg-[#7D83984D] my-3" />
       
        <div className="flex flex-col mt-3 mb-3 px-[1rem]">
          <div
            className={`p-3 rounded no-underline text-white flex items-center gap-2 cursor-pointer`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "14px",
              width: "100%",
              fontWeight: 400,
            }}
            onClick={confirmLogout}
          >
            <IoIosLogOut size={"3vh"} sx={{ color: "#ACA9BB" }} />
            Logout
          </div>
        </div> */}
      </nav>

      {contextHolder}
    </>
  );
}
