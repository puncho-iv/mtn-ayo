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

  interface RecordType {
      key: string;
      policy: string;
      status: string;
      registration: string;
      amount: string;
      expiration?: string;
  }
  
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

  const dataSource = [
    {
      key: "1",
      policy: "Comprehensive",
      status: "Active",
      registration: "01/01/2021",
      amount: "GHS 500.00",
      expiration: "01/01/2024"
    },
    {
      key: "2",
      policy: "Third Party",
      status: "Inactive",
      registration: "01/01/2022",
      amount: "GHS 250.00",
      expiration: "01/01/2023"
    },
    {
      key: "3",
      policy: "Policy 3",
      status: "Pending",
      registration: "01/01/2021",
      amount: "GHS 750.00",
      expiration: "01/01/2022"
    },
    {
      key: "4",
      policy: "Policy 4",
      status: "Inactive",
      registration: "01/01/2020",
      amount: "GHS 1000.00",
      expiration: "01/01/2020"
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
      width: 300,
      render: (policy: string, record: RecordType) => {
        const registrationDate = new Date(record.registration);
        const currentDate = new Date();
        const expirationDate = record.expiration ? new Date(record.expiration) : null;
    
        if (expirationDate) {
          expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        }
    
        const expired = expirationDate ? currentDate > expirationDate : false;
        const due =
          expirationDate && (currentDate >= expirationDate || currentDate <= registrationDate);
        const daysToExpire = expirationDate
          ? Math.floor((expirationDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))
          : null;
    
        const tags = [];
    
        if (expired) {
          tags.push(
            <Tag color="red" style={{ fontSize: "12px", borderRadius: "10px" }}>
              Expired
            </Tag>
          );
        } else if (due) {
          tags.push(
            <Tag color="orange" style={{ fontSize: "12px", borderRadius: "10px" }}>
              Due soon
            </Tag>
          );
        } else {
          tags.push(
            <Tag color="green" style={{ fontSize: "12px", borderRadius: "10px" }}>
              Active
            </Tag>
          );
          if (daysToExpire !== null) {
            tags.push(
              <Tag color="blue" style={{ fontSize: "8px", borderRadius: "10px" }}>
                {daysToExpire} days to expire
              </Tag>
            );
          }
        }
    
        return (
          <div style={{ display: "flex", alignItems: "center", marginTop: "-5px" }}>
            <div
              style={{
                backgroundColor: "#ECECED",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                marginRight: "10px",
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
            </div>
            <div>
              <div style={{ fontSize: "16px" }}>{policy}</div>
              <div>{tags}</div>
            </div>
          </div>
        );
      },
    },
    
    {
      dataIndex: "status",
      title: "Status",
      width: 150,
      render: (status:string) => {
        if (status === "Active") {
          return <Tag color="green" style={{borderRadius: "10px"}}>Active</Tag>;
        } else if (status === "Inactive") {
          return <Tag color="red" style={{borderRadius: "10px"}}>Inactive</Tag>;
        } else if (status === "Pending") {
          return <Tag color="yellow" style={{borderRadius: "10px"}}>Pending</Tag>;
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
      render: () => (
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
      <Row>
      <Layout className="container">
      <Row gutter={[16, 16]}>
            <Col xs={19} sm={20} md={22} lg={24} xl={22}>
        <Header
          style={{
            backgroundColor: "white",
            padding: "24px 50px",
          }}
        >

          <div className="avatar">
            <h3 className="title">
              Hello, Vikers<span className="emoji">👋</span>
            </h3>
            <Row>
            <Col xs={{ span: 5, pull: 16 }} md={{ span: 6, pull: 24 }} lg={{ span: 6, offset: 24 }}>
                <div className="user">
                  <Space wrap size={16}>
                    <Avatar
                      size={48}
                      icon={<IoIosNotificationsOutline />}
                      style={{
                        margin: "-105px 945px 0",
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
                      style={{ margin: "-105px -925px 0", fontSize: "20px" }}
                    />
                  </Space>
                </div>
          </Col>
          </Row>
          </div>

        </Header>
        <Divider
          className="headerDivide"
          style={{
            margin: "-50px -250px 0",
            backgroundColor: "e7e7e7",
            width: "96rem",
            zIndex: 0,
          }}
        />
        <Content>
          <div className="mid">
            <h3
              className="section-title"
              style={{
                alignItems: "center",
                margin: "20px 80px -25px",
                fontSize: "18px",
                color: "black",
                fontWeight: "600",
                fontFamily: "Inter",
                width: "150rem",
              }}
            >
              Active Subscriptions
            </h3>
                <Button
                  className="buyPolicy"
                  type="primary"
                  style={{
                    backgroundColor: "#00959C",
                    fontWeight: "600",
                    height: "100%",
                    maxWidth: "100%",
                    minWidth: "50px",
                    fontSize: "0.8rem",
                    lineHeight: "28px",
                    fontFamily: "Inter",
                    margin: "-5px 1060px 15px",
                    alignItems: "center",
                  }}
                >
                  Buy New Policy
                </Button>
    
          </div>

          <div className="card">
         <Card
              style={{
                maxWidth: "94%",
                maxHeight: "47.1%",
                left: 80,
                top: -10,
              }}
            > 
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={paginationConfig}
                  />
                  {/* <Pagination showQuickJumper defaultCurrent={1} total={100} onChange={onChange} defaultPageSize={4} /> */}
          </Card>
          </div>

          <>
            <ViewPolicyModal
              key={isPolicyType ? String(isPolicyType) : ""}
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
        
          
          </Col>
        </Row>
      </Layout>
      
      </Row>
    </div>
  );
}
