import { message } from 'antd';

const useCustomMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (type, content) => {
    messageApi.open({
      type,
      content,
      duration: 10,
    });
  };

  return { showMessage, contextHolder };
};

export default useCustomMessage;
