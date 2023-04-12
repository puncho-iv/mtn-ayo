import {
  Layout,
  Divider,
  Typography,
  Button,
  Row,
  Col,
  Card,
  Avatar,
  Table,
  Tag,
  Dropdown,
  MenuProps,
  Modal,
  Space,
  Form,
  Pagination,
  PaginationProps,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { RiHandCoinLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";
import { TiWarningOutline } from "react-icons/ti";
import { IoMdRefresh } from "react-icons/io";
import Dog from "../assets/dog.jpeg";
import "../pages/Dashboard.scss";
import "../index.css";
import { FC, useState } from "react";
import RenewPolicyModal from "../components/renew-policy-modal/RenewPolicyModal";
import ViewPolicyModal from "../components/view-policy-modal/ViewPolicyModal";

export default function DashboardSubscriptions() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isViewPolicyModalOpen, setIsViewPolicyModalOpen] = useState(false);
  const [isRenewPolicyModalOpen, setIsRenewPolicyModalOpen] = useState(false);
  const { Title } = Typography;
  const [selectedPolicy, setSelectedPolicy] = useState();
  const [step, setStep] = useState(1);
  const [isPolicyType, setPolicyType] = useState();

  const paginationConfig = {
    pageSize: 4,
    style: { margin: "0 430px 0" },
    className: "pagination",
  };
  const ViewPolicy = (policy: any) => {
    setPolicyType(policy);
    setIsViewPolicyModalOpen(true);
  };
  const handleViewPolicyModalOk = () => {
    setIsViewPolicyModalOpen(false);
  };
  const RenewPolicy = (policy: any) => {
    setSelectedPolicy(policy);
    setIsRenewPolicyModalOpen(true);
  };
  const handleRenewPolicyModalOk = () => {
    setIsRenewPolicyModalOpen(false);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const promptConfirmDiscard = () => {
    Modal.confirm({
      title: `Do you want to stop the process?`,
      icon: <TiWarningOutline />,
      onOk() {},
    });
  };

  const menuItems = [
    {
      icon: <MdOutlineRemoveRedEye style={{ fontSize: "15px" }} />,
      label: "View Policy",
      key: "1",
      onClick: ViewPolicy,
    },
    {
      icon: <IoMdRefresh style={{ fontSize: "15px" }} />,
      label: "Renew Policy",
      key: "2",
      onClick: RenewPolicy,
    },
    {
      icon: <RiHandCoinLine style={{ fontSize: "15px" }} />,
      label: "File Claim",
      key: "3",
    },
  ];

  // const policyType = [
  //   {
  //     key: "1",
  //     policy: "Comprehensive",
  //   },
  //   {
  //     key: "2",
  //     policy: "Third party",
  //   },
  //   {
  //     key: "3",
  //     policy: "Third party & Theft",
  //   },

  // ]

  const dataSource = [
    {
      key: "1",
      policy: "Comprehensive",
      status: "Active",
      registration: "01/01/2021",
      amount: "GHS 500.00",
    },
    {
      key: "2",
      policy: "Third Party",
      status: "Inactive",
      registration: "01/01/2022",
      amount: "GHS 250.00",
    },
    {
      key: "3",
      policy: "Policy 3",
      status: "Pending",
      registration: "01/01/2021",
      amount: "GHS 750.00",
    },
    {
      key: "4",
      policy: "Policy 4",
      status: "Inactive",
      registration: "01/01/2020",
      amount: "GHS 1000.00",
    },
    {
      key: "5",
      policy: "Policy 5",
      status: "Active",
      registration: "01/01/2021",
      amount: "GHS 1250",
    },
    {
      key: "6",
      policy: "Policy 6",
      status: "Pending",
      registration: "01/01/2022",
      amount: "GHS 1500.00",
    },
    {
      key: "7",
      policy: "Policy 7",
      status: "Active",
      registration: "01/01/2021",
      amount: "GHS 1750.00",
    },
    {
      key: "8",
      policy: "Policy 8",
      status: "Inactive",
      registration: "01/01/2020",
      amount: "GHS 2000.00",
    },
  ];

  const columns = [
    {
      dataIndex: "policy",
      title: "Policy",
      key: "policy",
      className: "bgColor",
      width: 200,
      render: (policy, record) => {
        const registrationDate = new Date(record.registration);
        const currentDate = new Date();
        const expirationDate = new Date(record.expiration);
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        const expired = currentDate > expirationDate;
        const due =
          currentDate >= expirationDate || currentDate <= registrationDate;
        const daysToExpire = Math.floor(
          (expirationDate.getTime() - currentDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        return (
          <div
            style={{
              backgroundColor: "#ECECED",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              marginRight: "50px",
              marginTop: "-2px",
            }}
          >
            {policy ? (
              <SlDiamond
                style={{
                  fontSize: "11px",
                  margin: "0 5px 0",
                }}
              />
            ) : null}
            <span
              style={{
                marginLeft: "30px",
                display: "flex",
                alignItems: "center",
                marginTop: "-25px",
              }}
            >
              Policy
            </span>
          </div>
        );
      },
    },
    {
      dataIndex: "status",
      title: "Status",
      width: 150,
      render: (status) => {
        if (status === "Active") {
          return <Tag color="green">Active</Tag>;
        } else if (status === "Inactive") {
          return <Tag color="red">Inactive</Tag>;
        } else if (status === "Pending") {
          return <Tag color="yellow">Pending</Tag>;
        } else {
          return null;
        }
      },
      className: "bgColor",
    },
    {
      dataIndex: "registration",
      title: "Registration Date",
      key: "registration",
      className: "bgColor",
      width: 180,
    },
    {
      dataIndex: "amount",
      title: "Amount",
      key: "amount",
      className: "bgColor",
      width: 150,
    },
    {
      dataIndex: "action",
      title: "Action",
      key: "action",
      className: "bgColor",
      width: 80,
      render: (text, record) => (
        <Dropdown menu={{ items: menuItems }}>
          <a onClick={(e) => e.preventDefault()}>
            <Button>
              <AiOutlineAppstore
                style={{ fontSize: "18px", marginTop: "3px" }}
              />
            </Button>
          </a>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <Layout className="container">
        <Header
          style={{
            backgroundColor: "white",
            padding: "24px 50px",
          }}
        >
          <Title
            level={3}
            className="title"
            style={{
              margin: "-78px 0 0",
              fontSize: "22px",
              fontFamily: "Inter",
              letterSpacing: "-0.01em",
            }}
          >
            Hello, Vikers
            <span className="emoji">👋</span>
          </Title>
          <div className="avatar">
            <Space wrap size={16}>
              <Avatar
                size={48}
                icon={<IoIosNotificationsOutline />}
                style={{
                  margin: "-105px 955px 0",
                  fontSize: "20px",
                  background: "#F8F8F8",
                  color: "#4F4B5C",
                }}
              />
            </Space>
            <Space wrap size={16}>
              <Avatar
                size={48}
                src={<img src={Dog} alt="avatar" />}
                style={{ margin: "-230px 1025px 0", fontSize: "20px" }}
              />
            </Space>
          </div>
        </Header>
        <Divider
        className="headerDivide"
          style={{
            margin: "-40px -250px 0",
            backgroundColor: "e7e7e7",
            zIndex: 0,
          }}
        />

        <Content>
          <Title
            level={3}
            className="section-title"
            style={{
              margin: "20px 52px -25px",
              fontSize: "18px",
              fontWeight: "semibold",
              fontFamily: "Inter",
            }}
          >
            Active Subscriptions
          </Title>

          <Row>
            <Col>
              <Button
                className="buyPolicy"
                type="primary"
                style={{
                  backgroundColor: "#00959C",
                  fontWeight: "600",
                  height: "40px",
                  width: "145px",
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontFamily: "Inter",
                  margin: "0 980px 10px",
                }}
              >
                Buy New Policy
              </Button>
            </Col>
          </Row>

          <Card
            className="table-card"
            style={{
              maxWidth: "70%",
              height: "67%",
              left: 50,
              top: 5,
              fontSize: "2.5px",
            }}
          >
            <Row gutter={25} className="table-row">
              <Col span={24}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={paginationConfig}
                />
                {/* <Pagination showQuickJumper defaultCurrent={1} total={100} onChange={onChange} defaultPageSize={4} /> */}
              </Col>
            </Row>
          </Card>
          <>
            <ViewPolicyModal
              key={isPolicyType}
              policy={isPolicyType}
              isOpen={isViewPolicyModalOpen}
              // confirmLoading={confirmLoading}
              onViewPolicy={handleViewPolicyModalOk}
              onCancel={() => setIsViewPolicyModalOpen(false)}
            />
            <RenewPolicyModal
              key={selectedPolicy}
              policy={selectedPolicy}
              isOpen={isRenewPolicyModalOpen}
              // confirmLoading={confirmLoading}
              onRenewPolicy={handleRenewPolicyModalOk}
              onCancel={() => setIsRenewPolicyModalOpen(false)}
            />
          </>
        </Content>
      </Layout>
    </div>
  );
}
