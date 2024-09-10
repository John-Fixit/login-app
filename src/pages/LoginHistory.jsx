
import { Table, Tag } from 'antd';
import React from 'react'
import moment from "moment"

const LoginHistory = () => {

    const columns = [
        {
          title: 'Staff',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Login Time',
          dataIndex: 'login_time',
          key: 'login_time',
        },
        {
          title: 'App Name',
          dataIndex: 'app_name',
          key: 'app_name',
        },
       
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          login_time: moment().format('mm:HH DD-MM-YYYY'),
          app_name: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          login_time: moment().format('mm:HH DD-MM-YYYY'),
          app_name: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          login_time: moment().format('mm:HH DD-MM-YYYY'),
          app_name: 'Sydney No. 1 Lake Park',
        },
      ];



  return (
    <>
     
<Table columns={columns} dataSource={data} />;
    </>
  )
}

export default LoginHistory