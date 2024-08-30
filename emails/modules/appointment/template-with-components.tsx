import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Text,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

export const NewDiaryAssignmentNotification = () => (
  <Html>
    <Head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Diary Assignment Notification</title>
    </Head>
    <Body style={bodyStyle}>
      <Container style={containerStyle}>
        <Section style={margin24px}>
          <Img
            src="%urlTenantLogo%"
            alt="Smart Health Evolution"
            style={imgStyle}
          />
        </Section>
        <Hr style={hrStyle} />
        <Section style={margin24px}>
          <Text style={textStyle}>Dear %PATIENT_NAME%,</Text>
          <Text style={textStyle}>
            We are reaching out to inform you that a new diary has been assigned
            to you as part of your ongoing care and treatment.
          </Text>
          <Text style={textStyle}>Diary Details:</Text>
          <Text style={textStyle}>Title: %DIARY_TITLE%</Text>
        </Section>
        <Section style={margin20px}>
          <Text style={subTextStyle}>
            To access the diary, please follow the steps below:
          </Text>
          <Section style={linkStyle}>
            <Text style={subTextStyle}>
              1. Log in to your patient account on{" "}
              <Link href="%TENANT_URL%">%TENANT_URL%</Link>
            </Text>
            <Text style={subTextStyle}>2. Navigate to the "Diary" Module</Text>
            <Text style={subTextStyle}>
              3. Click on this diary to create new entries
            </Text>
          </Section>
        </Section>
        <Section style={margin30px}>
          <Text style={textStyle}>
            Thank you in advance for your participation.
          </Text>
          <Text style={textStyle}>
            Your contribution is greatly appreciated as we work together to
            optimize your healthcare journey.
          </Text>
        </Section>
        <Section style={margin30px}>
          <Text style={textStyle}>Best regards,</Text>
          <Text style={textStyle}>%TENANT_NAME%</Text>
        </Section>
        <Section style={margin20px}>
          <Text style={italicTextStyle}>
            Delivered with care by the{" "}
            <span style={spanStyle}>Smart Health Evolution</span> team.
          </Text>
        </Section>
        <Hr style={hrStyle} />
        <Section style={{ textAlign: "center" }}>
          <Text style={footerTextStyle}>
            This is an automated generated e-mail. Please do not reply to it. If
            you need help, please get directly in contact with us.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const bodyStyle: React.CSSProperties = {
  margin: 0,
  backgroundColor: "rgb(219, 219, 219)",
  padding: "20px",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "640px",
  borderRadius: "12px",
  backgroundColor: "rgb(255, 255, 255)",
  padding: "24px",
  textAlign: "center",
};

const imgStyle: React.CSSProperties = {
  color: "rgb(34, 34, 34)",
  height: "60px",
};

const hrStyle: React.CSSProperties = {
  borderColor: "#e6e6e6",
};

const textStyle: React.CSSProperties = {
  fontSize: "14px",
  fontFamily: "Roboto, sans-serif",
  color: "rgb(34, 34, 34)",
  margin: "0 0 12px 0",
  fontWeight: 400,
  lineHeight: "18px",
};

const subTextStyle: React.CSSProperties = {
  fontSize: "14px",
  fontFamily: "Roboto, sans-serif",
  color: "rgb(102, 102, 102)",
  margin: "0 0 12px 0",
  fontWeight: 400,
  lineHeight: "16px",
};

const linkStyle: React.CSSProperties = {
  paddingLeft: "20px",
  margin: "0",
};

const footerTextStyle: React.CSSProperties = {
  fontSize: "12px",
  fontFamily: "Roboto, sans-serif",
  color: "rgb(102, 102, 102)",
  fontWeight: 400,
  lineHeight: "18px",
  textAlign: "center",
};

const italicTextStyle: React.CSSProperties = {
  fontSize: "12px",
  fontFamily: "Roboto, sans-serif",
  color: "rgb(34, 34, 34)",
  margin: "0 0 12px 0",
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: "18px",
};

const spanStyle: React.CSSProperties = {
  fontWeight: 700,
  color: "rgb(255, 196, 12)",
};

const margin24px: React.CSSProperties = {
  margin: "24px 0",
};

const margin20px: React.CSSProperties = {
  margin: "20px 0",
};

const margin30px: React.CSSProperties = {
  margin: "30px 0",
};

export default NewDiaryAssignmentNotification;
