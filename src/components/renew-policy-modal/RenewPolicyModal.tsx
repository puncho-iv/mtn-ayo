import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Row,
  Space,
  Typography,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../renew-policy-modal/RenewPolicyModal.scss";
import accident from "../../assets/accident.png";
import robbery from "../../assets/robbery.png";
import carInsurance from "../../assets/car-insurance.png"

interface RenewPolicyModalProps {
  isOpen: boolean;
  policy: any;
  onCancel: () => void;
  onRenewPolicy: () => void;
}

export default function RenewPolicyModal({
  isOpen,
  policy,
  onCancel,
  onRenewPolicy,
}: RenewPolicyModalProps) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPolicy, setSelectedPolicy] = useState(false);
  const [back, setBack] = useState(false);
  const [selected, setSelected] = useState(false);
  const [thirdParty, setThirdParty] =useState(false);
  const [selectedComprehensive, setSelectedComprehensive] = useState(false);

  const handleCardClick = () => {
    setSelected(true);
    setSelectedComprehensive(false);
    setThirdParty(false);
  };
  const cardStyle = {
    width: 450,
    backgroundColor: selected ? "#EFFEFF" : "#F8F8F8",
    borderColor: selected ? "#00959C" : "transparent",
    maxHeight: "8vw",
    marginLeft: "8%",
    marginTop: "5%",
  };
  const handleComprehensive = () => {
    setSelectedComprehensive(true);
    setSelected(false);
    setThirdParty(false);
  };
  const cardComprehensive ={
    width: 450,
    backgroundColor: selectedComprehensive ? "#EFFEFF" : "#F8F8F8",
    borderColor: selectedComprehensive ? "#00959C" : "transparent",
    maxHeight: "8vw",
    marginLeft: "8%",
    marginTop: "2%",
  }
  const handleThirdParty = () => {
    setThirdParty(true);
    setSelected(false);
    setSelectedComprehensive(false);
  }
  const cardThirdParty = {
    width: 450,
    backgroundColor: thirdParty ? "#EFFEFF" : "#F8F8F8",
    borderColor: thirdParty ? "#00959C" : "transparent",
    maxHeight: "8vw",
    marginLeft: "8%",
    marginBottom: "-3%",
    marginTop: "5%",
  }
  const handleContinue = () => {
    // Implement logic to create a new client based on the user's input
    setStep(2);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleThird = () => {
    // Implement logic to create a new client based on the user's input
    setStep(3);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleDiscard = () => {
    // Implement logic to create a new client based on the user's input
  };
  const handleBack = () => {
    // Implement logic to create a new client based on the user's input
    setBack(true);
  };
  const navigate = useNavigate();
  const { Dragger } = Upload;
  const props: UploadProps = {
    name: "file",
    listType: "picture",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Modal
      title={
        <span
          style={{ fontSize: "16px", fontWeight: "600", fontFamily: "Inter" }}
        >
          Renew Policy
        </span>
      }
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
      className="CustomModal"
      style={{ minWidth: "37vw", minHeight: "15vw" }}
    >
      <Divider style={{ margin: "0px 0px 2rem 0px" }} />
      {step === 1 && (
        <>
          <Typography
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "800",
            }}
          >
            Lets get you started
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: "400",
              maxWidth: "60%",
              marginLeft: "20%",
              marginTop: "1%",
            }}
          >
            Please provide us with your car registration number to proceed.
          </Typography>
          <div className="CustomModalBody">
            <Form.Item
              label="Registration Number*"
              name="regnumber"
              style={{
                textAlign: "center",
                marginLeft: "20.5%",
                marginTop: "4%",
              }}
            >
              <Input
                placeholder="GZ 1002 2023"
                style={{
                  marginLeft: "-25%",
                  width: "19.5rem",
                  fontFamily: "Inter",
                }}
              />
            </Form.Item>
          </div>
          <div className="CustomModalBody">
            <Row>
              <Col
                xs={24}
                style={{
                  textAlign: "right",
                  marginLeft: "-19.8%",
                  marginTop: "2%",
                  marginBottom: "15%",
                }}
              >
                <Button
                  className="continue"
                  type="primary"
                  onClick={handleContinue}
                  style={{ width: "19.5rem", background: "#00959C" }}
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </div>
          <></>
        </>
      )}
      {step === 2 && (
        <>
          <Typography
            className="ModalHeader"
            style={{
              fontFamily: "Inter",
              fontWeight: "800",
              textAlign: "center",
              fontSize: "20px",
              lineHeight: 1.1,
            }}
          >
            Choose your policy cover <br />
            <span
              className="ModalSmall"
              style={{
                textAlign: "center",
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Select a policy you would love to undertake.
            </span>
          </Typography>
          <div className="card">
            <Card
                    className="thirdParty"
                    onClick={handleThirdParty}
                    style={cardThirdParty} 
            >
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#4F4B5C",
                  marginLeft: "20%",
                  marginBottom: "-5%",
                  marginTop: "-3%",
                }}
              >
                Third party
              </Typography>
              <Space wrap size={16} style={{backgroundColor: "#FFFFFF", borderRadius: "100px"}}>
              <Avatar
              size={60}
              src={<img src={accident} alt="accidentCover" />}
              style={{ margin: "12px 5px 0", color: "#B3B1B8" }}
              />
              </Space>
              <p
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter",
                  fontSize: "10px",
                  width: "75%",
                  marginLeft: "20%",
                  marginTop: "-12%",
                }}
              >
                This cover provides coverage for damages or injuries caused by
                you to a third party. In other words, it covers the costs of
                damages or injuries you cause to someone's property or vehicle,
                or to someone else's health or life
              </p>
            </Card>
            <Card
            className="theft"
              onClick={handleCardClick}
              style={cardStyle}
            >
              {/* {selected && (
              <input
                  type="radio"
                  name="selectedCard"
                  checked={selected}
                  style={{ marginLeft: "95%", backgroundColor: "#00959C" }}
                />
                )} */}
                
              <Typography
                  style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#4F4B5C",
                  marginLeft: "20%",
                  marginBottom: "1%",
                  marginTop: "-2%",
                }}
              >
                Third party & Theft
              </Typography>
              <Space wrap size={16} style={{backgroundColor: "#FFFFFF", borderRadius: "100px", marginTop: "-1%"}}>
              <Avatar
              size={60}
              src={<img src={robbery} alt="robberyCover" />}
              style={{ margin: "12=px 5px 0", color: "#B3B1B8" }}
              />
              </Space>
              <p
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter",
                  fontSize: "10px",
                  width: "75%",
                  marginLeft: "21%",
                  marginTop: "-14%"
                }}
              >
                It is designed to give you peace of mind on the road, by
                ensuring that you are financially protected against any
                potential damage, injury or theft involving your vehicle, as
                well as related costs that may rise as a result of such
                incidents.
              </p>
            </Card>
            
            <Card
              className="theft"
              onClick={handleComprehensive}
              style={cardComprehensive}
            >
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#4F4B5C",
                  marginLeft: "20%",
                  marginBottom: "1%",
                  marginTop: "-3%",
                }}
              >
                Comprehensive
              </Typography>
              <Space wrap size={16} style={{backgroundColor: "#FFFFFF", borderRadius: "100px", marginTop: "-5%"}}>
              <Avatar
              size={60}
              src={<img src={carInsurance} alt="car insurance" />}
              style={{ margin: "12px 5px 0", color: "#B3B1B8" }}
              />
              </Space>
              <p
                style={{
                  fontWeight: 400,
                  fontFamily: "Inter",
                  fontSize: "10px",
                  maxWidth: "70%",
                  marginLeft: "20%",
                  marginTop: "-13%"
                }}
              >
                This policy provides extensive coverage for your vehicle, as
                well as third-party damages and injuries. It covers a range of
                incidents including theft, vandalism and natural disasters, in
                addition to accidents.
              </p>
            </Card>
          </div>
          <div className="CustomModalBody">
            <Row>
              <Col xs={24} style={{ textAlign: "right" }}>
                <Button
                  type="primary"
                  onClick={handleBack}
                  style={{
                    backgroundColor: "#EFFEFF",
                    fontFamily: "Inter",
                    width: "32%",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginTop: "30px",
                    borderColor: "#B0DEE0",
                    color: "#00959C",
                    marginRight: "1%",
                    marginBottom: "2%",
                  }}
                >
                  Back
                </Button>
                <Button
                  type="primary"
                  onClick={handleThird}
                  style={{
                    backgroundColor: "#00959C",
                    fontFamily: "Inter",
                    width: "32%",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginTop: "20px",
                    marginRight: "6.5%",
                  }}
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <Typography
            style={{
              fontFamily: "Inter",
              fontWeight: "800",
              textAlign: "center",
              fontSize: "20px",
              lineHeight: 1.1,
            }}
          >
            Upload VRC
            <br />{" "}
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
                marginTop: "-10%",
              }}
            >
              We need a little information about your vehicle and yourself
            </span>
          </Typography>

          <Dragger
            {...props}
            className="upload"
            style={{
              width: "21rem",
              marginTop: "5%",
              marginLeft: "18%",
              backgroundColor: "#E6F4F5",
              borderColor: "#00959C",
              marginBottom: "3%",
            }}
          >
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined
                style={{ fontSize: "20px", marginTop: "5%", color: "#00959C" }}
              />
            </p>
            <p className="ant-upload-text">Upload Document</p>
            <p className="ant-upload-hint">
              Please upload a picture of your VRC document
            </p>
          </Dragger>
          <div className="CustomModalBody">
            <Row>
              <Col xs={24} style={{ textAlign: "right" }}>
                <Button
                  type="primary"
                  onClick={handleDiscard}
                  style={{
                    backgroundColor: "#EFFEFF",
                    fontFamily: "Inter",
                    width: "32%",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginTop: "20px",
                    borderColor: "#B0DEE0",
                    color: "#00959C",
                    marginRight: "1%",
                    marginBottom: "7%",
                  }}
                >
                  Discard
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
                    marginTop: "20px",
                    marginRight: "17%",
                  }}
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </div>
        </>
      )}
    </Modal>
  );
}
