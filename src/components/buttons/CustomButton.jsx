import { Button, ConfigProvider } from "antd";

function CustomButton({ loading, children, type, size, className, ...rest }) {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultHoverBorderColor: "#00bcc2",
              defaultHoverBg: "#00bcc2",
              defaultBg: "#00bcc2",
              defaultHoverColor: "#fff",
              defaultColor: "#fff",
              defaultBorderColor: "#00bcc2",
              defaultActiveBorderColor: "#00bcc2",
              defaultActiveBg: "#00bcc2",
              defaultActiveColor: "#FFF",
              defaultShadow: "0",
            },
          },
        }}
      >
        <Button
          htmlType={type ?? "button"}
          {...rest}
          size={size ?? "large"}
          loading={loading}
          className={`rounded-[8px] text-[16px] ${
            size ? "" : "h-[42px]"
          } ${className}`}
        >
          {children}
        </Button>
      </ConfigProvider>
    </>
  );
}

export default CustomButton;
