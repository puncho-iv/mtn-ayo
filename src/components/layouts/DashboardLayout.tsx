import { useState, ReactNode, Key } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Typography, Card } from "antd";
import { Outlet } from "react-router-dom";
import beizure from "../../assets/Vector.png";
import Logo from "../../assets/Logo.png";
import {
  RiHome7Line,
  RiCoinsLine,
  RiHandCoinLine,
  RiQuestionnaireLine,
} from "react-icons/ri";
import {HiMenuAlt2} from "react-icons/hi"
import { FiArrowUpRight } from "react-icons/fi";
import { BsCreditCard, BsPatchQuestion } from "react-icons/bs";
import "../layouts/DashboardLayout.scss"
import AppFooter from "../../pages/AppFooter";
import { Footer } from "antd/es/layout/layout";

const { Header, Content, Sider } = Layout;
const  Link  = Typography;
const ICON_SIZE = { fontSize: "18px" };

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <RiHome7Line style={ICON_SIZE} />),
  getItem("Subscriptions", "2", <BsCreditCard style={ICON_SIZE} />),
  getItem("Buy Policy", "3", <RiCoinsLine style={ICON_SIZE} />),
  getItem("Claims", "4", <RiHandCoinLine style={ICON_SIZE} />),
  getItem("FAQ", "5", <RiQuestionnaireLine style={ICON_SIZE} />),
];

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer  },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh", }}>
      <Header className="header" style={{ background: colorBgContainer }}>
          {/* <img src={Logo} alt="img"  style={{zIndex:"1", width: "170px", marginLeft: "-20px", marginTop: "25px"}}/> */}
        {/* <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items} /> */}
      </Header>
      <Layout>
        <Sider
          className="sider"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={235}
          theme="light"
          breakpoint="lg"
          collapsedWidth="1"
          style={{
            backgroundColor: "#F8F8F8",
            height: "90%",
            marginTop: "-70px",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              height: "100%",
              borderRight: 0,
              margin: "150px 20px 0",
              backgroundColor: "transparent",
              fontFamily: "Inter",
            }}
            items={items}
          />
          {!collapsed && (
           <Card style={{backgroundColor: "#00959C", margin: "-250px 22px 0", width: "80%"}}>
              <img src={beizure} alt="curves" style={{marginTop: "-75px", width: "100px", marginLeft: "62px", zIndex: "-1", marginBottom:"-120px"}} />
              <BsPatchQuestion
                style={{
                  color: "#FFFFFF",
                  fontSize: "25px",
                  fontFamily: "Inter",
                  marginTop: "-100px",
                  zIndex: "1"
                }}
              />
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  marginTop: "3px",
                  fontSize: "15px",
                  zIndex: "1"
                }}
              >
                Have Questions?
              </Typography>
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: "9px",
                  marginTop: "1px",
                  maxWidth: "95%",
                  fontWeight: "200",
                  fontFamily: "Inter",
                }}
              >
                We are here to help just get in touch with the link below
              </Typography>
              <Link
                href="https://ant.design"
                target="_blank"
                style={{
                  fontSize: "11px",
                  color: "#FFFFFF",
                  fontWeight: "300",
                  fontFamily: "Inter",
                  textDecoration: "underline",
                  display: "flex",
                  marginTop: "18px",
                }}
              >
                Contact Us
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
            </Card>
            )}
        </Sider>
        <Layout>
          <Content
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <Footer className="footer" style={{ background: "transparent" }}>
        <AppFooter />
      </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
