import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Layout,
  Modal,
  QRCode,
  Row,
  Typography,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";

interface ViewPolicyModalProps {
  isOpen: boolean;
  view: void;
  onCancel: () => void;
  onViewPolicy: () => any;
}

export default function ViewPolicyModal({
  isOpen,
  view,
  onCancel,
  onViewPolicy,
}: ViewPolicyModalProps) {
  const [viewPolicy, setViewPolicy] = useState(false);
  const [ispolicyType, setPolicyType] = useState(false);
  const handleContinue = () => {
    // Implement logic to create a new client based on the user's input
    setPolicyType(true);
  };
  const promptConfirmDiscard = () => {
    Modal.confirm({
      title: `Do you want to stop the process?`,
      icon: <TiWarningOutline />,
      onOk() {},
    });
  };
  const handleDiscard = () => {
    // Implement logic to create a new client based on the user's input
  };
  const downloadSticker = () => {
    const canvas = document
      .getElementById("myqrcode")
      ?.querySelector<HTMLCanvasElement>("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  return (
    <>
      <div>
        <Modal
          title={
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Inter",
              }}
            >
              Policy Info
            </span>
          }
          open={isOpen}
          onCancel={onCancel}
          footer={null}
          centered
          className="ViewModal"
          style={{ minWidth: "40vw", minHeight: "15vw" }}
        >
          <Divider style={{ margin: "0px 0px 2rem 0px" }} />

          <Card
            style={{
              height: "70%",
              background: "transparent",
              borderColor: "#F8F88F8",
              minWidth: "35vw"
            }}
          >
            <Row>
              <Col xs={18} style={{ textAlign: "left" }}>
                <Header style={{ background: "transparent" }}></Header>
                <Typography
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "12px",
                    marginTop: "8%",
                  }}
                >
                  Policy Holder
                </Typography>
                <Col xs={18} style={{ textAlign: "right" }}>
                <Typography
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "12px",
                    marginTop: "-40%",
                    marginBottom: "40%",
                    marginRight: "-15%",
                  }}
                >
                  Policy Type
                </Typography>
                </Col>
                <Col xs={18} style={{ textAlign: "right" }}>
                <Typography
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "12px",
                    marginTop: "-15%",
                    marginBottom: "20%",
                    marginRight: "-8%",
                  }}
                >
                  Amount
                </Typography>
                </Col>
              </Col>
            </Row>
            <Card
              id="myqrcode"
              style={{
                backgroundColor: "#F8F8F8",
                borderColor: "transparent",
                height: "17vw",
              }}
            >
              <QRCode
                value="https://ant.design/"
                style={{ marginLeft: "65%", marginTop: "5%" }}
              />
            </Card>
          </Card>
          <div className="CustomModalBody">
            <Row>
              <Col xs={24} style={{ textAlign: "right" }}>
                <Button
                  type="primary"
                  onClick={handleDiscard}
                  style={{
                    backgroundColor: "#FFF9F9",
                    fontFamily: "Inter",
                    width: "32%",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginTop: "20px",
                    borderColor: "#FFE0E0",
                    color: "#CF2A2A",
                    marginRight: "1%",
                    marginBottom: "5%",
                  }}
                >
                  Close
                </Button>
                <Button
                  type="primary"
                  onClick={handleContinue}
                  style={{
                    backgroundColor: "#00959C",
                    fontFamily: "Inter",
                    width: "32%",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginTop: "30px",
                    marginRight: "5%",
                  }}
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    </>
  );
}
