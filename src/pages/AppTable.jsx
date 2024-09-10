import { Table, Tag, ConfigProvider } from "antd";
import React, { useState } from "react";
import ExpandedDrawer from "../components/drawer/ExpandedDrawer";
import CreateAppForm from "../components/create_app_form/CreateAppForm";

const AppTable = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const columns = [
    {
      title: "App Name",
      dataIndex: "name",
      key: "name",
    //   render: (text) => (
    //     <p className="font-helvetica text-[0.82rem] opacity-45 hyphens-auto overflow-hidden break-words">
    //       {text}
    //     </p>
    //   ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "App Token",
      dataIndex: "token",
      key: "token",
      //   render: (text) => <p className='w-32'>{text}</p>,
    },
    {
      title: "Returned Login Data",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            return (
              <Tag color={color} key={tag} className="mt-1">
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      token: 32,
      description: "New York No. 1 Lake Park",
      tags: ["STAFF NUMBER", "FIRST NAME", "DEPARTMENT"],
    },
    {
      key: "2",
      name: "Jim Green",
      token: 42,
      description: "London No. 1 Lake Park",
      tags: ["STAFF NUMBER", "FIRST NAME"],
    },
    {
      key: "3",
      name: "Joe Black",
      token: 32,
      description: "Sydney No. 1 Lake Park",
      tags: ["STAFF ID", "STAFF NUMBER", "FIRST NAME", "DEPARTMENT"],
    },
  ];

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <div className="flex justify-between my-2 gap-3 items-center mt-3">
        <h1 className="font-semibold text-lg">App List</h1>
        <div className="flex gap-3 justify-between ">
          <button
            className="header_btnStyle bg-[#00bcc2] rounded text-white font-semibold py-[7px] leading-[19.5px] mx-2 my-1 md:my-0 px-[16px] font-roboto"
            onClick={handleOpenDrawer}
          >
            Create App
          </button>
        </div>
      </div>
      <div className="p-3 shadow rounded-md">
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: "rgb(244 244 245)",
                  // headerColor: "",
                  borderColor: "#fff",
                  headerBorderRadius: "8px",
                  // rowSelectedHoverBg: "#f0f0f0",
                  // rowSelectedBg: "#fafafa",

                },
              },
              token: {
                // colorPrimary: "#272c34",
              },
            }}
          >
            <Table columns={columns} dataSource={data} />;
          </ConfigProvider>
      </div>

      <ExpandedDrawer isOpen={openDrawer} onClose={handleCloseDrawer}>
        <CreateAppForm handleCloseDrawer={handleCloseDrawer} />
      </ExpandedDrawer>
    </>
  );
};

export default AppTable;
