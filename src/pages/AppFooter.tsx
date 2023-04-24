import React from "react";
import { Layout, theme, Typography } from "antd";

const { Footer } = Layout;

const { Link } = Typography;

const AppFooter: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer
      style={{
        fontSize: "10px",
        // margin: "-500px 140px 0 ",
        alignContent: "center",
        color: "#8D8A95",
        fontFamily: "Inter",
        alignItems: "center",
      }}
    >
      <span style={{ fontWeight: "800" }}>©️2023</span> aYo Ghana Intermediaries
      Limited All Rights Reserved.
      <br />
      Underwritten by Sanlam Life Insurance Ghana Ltd.
      <Link
        href="https://ant.design"
        target="_blank"
        style={{
          fontSize: "17px",
          color: "#8D8A95",
          fontWeight: "600",
          fontFamily: "Inter",
          display: "flex",
          marginTop: "-25px",
          marginLeft: "1090px",
        }}
      >
        Contact Support
      </Link>
    </Footer>
  );
};

export default AppFooter;
