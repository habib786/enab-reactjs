import { Layout } from "antd";

const CustomFooter = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightgrey",
      }}
    >
      Enab Code Challenge@All Right Reserverd
    </Footer>
  );
};
export default CustomFooter;
