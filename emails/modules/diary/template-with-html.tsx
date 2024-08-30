import * as React from "react";

// Definindo constantes para os estilos
const bodyStyle: React.CSSProperties = {
  margin: 0,
  backgroundColor: "rgb(219, 219, 219)",
  padding: "20px",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "640px",
  borderCollapse: "collapse",
  borderRadius: "12px",
  backgroundColor: "rgb(255, 255, 255)",
};

const tableCellStyle: React.CSSProperties = {
  padding: "24px",
  width: "640px",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

const hrStyle: React.CSSProperties = {
  borderBottom: "solid 1px #e6e6e6",
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

const listStyle: React.CSSProperties = {
  paddingLeft: "20px",
  margin: 0,
  listStyleType: "none",
};

const listItemStyle: React.CSSProperties = {
  fontSize: "14px",
  fontFamily: "Roboto, sans-serif",
  color: "rgb(102, 102, 102)",
  marginBottom: "12px",
  fontWeight: 400,
  lineHeight: "16px",
};

const footerTextStyle: React.CSSProperties = {
  fontSize: "12px",
  fontFamily: "Roboto, sans-serif",
  color: "rgb(102, 102, 102)",
  fontWeight: 400,
  lineHeight: "18px",
  textAlign: "center",
};

export const NewDiaryAssignmentNotification = () => {
  return (
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Diary Assignment Notification</title>
      </head>
      <body style={bodyStyle}>
        <div style={{ textAlign: "center" }}>
          <table style={containerStyle} cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  <table style={tableStyle}>
                    <tbody>
                      <tr style={{ height: "24px" }}></tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <img
                            style={{ color: "rgb(34, 34, 34)", height: "60px" }}
                            alt="Smart Health Evolution"
                            src="%urlTenantLogo%"
                          />
                        </td>
                      </tr>
                      <tr style={{ height: "24px" }}></tr>
                      <tr>
                        <td style={hrStyle}></td>
                      </tr>
                      <tr style={{ height: "24px" }}></tr>
                    </tbody>
                  </table>
                  <table style={tableStyle}>
                    <tbody>
                      <tr>
                        <td>
                          <p style={textStyle}>
                            Dear %PATIENT_NAME%,
                            <br />
                            We are reaching out to inform you that a new diary has been assigned to you as part of your ongoing care and treatment.
                            <br />
                            <br />
                            Diary Details:
                            <br />
                            Title: %DIARY_TITLE%
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "20px" }}></tr>
                      <tr>
                        <td>
                          <p style={subTextStyle}>To access the diary, please follow the steps below:</p>
                          <ul style={listStyle}>
                            <li style={listItemStyle}>Log in to your patient account on %TENANT_URL%</li>
                            <li style={listItemStyle}>Navigate to the "Diary" Module</li>
                            <li style={listItemStyle}>Click on this diary to create new entries</li>
                          </ul>
                        </td>
                      </tr>
                      <tr style={{ height: "30px" }}></tr>
                      <tr>
                        <td>
                          <p style={textStyle}>
                            Thank you in advance for your participation.
                            <br />
                            Your contribution is greatly appreciated as we work together to optimize your healthcare journey.
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "30px" }}></tr>
                      <tr>
                        <td>
                          <p style={textStyle}>
                            Best regards,
                            <br />
                            %TENANT_NAME%
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "20px" }}></tr>
                      <tr>
                        <td>
                          <i style={{ ...textStyle, fontSize: "12px", fontStyle: "italic" }}>
                            Delivered with care by the <span style={{ fontWeight: 700, color: "rgb(255, 196, 12)" }}>Smart Health Evolution</span> team.
                          </i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table style={tableStyle}>
                    <tbody>
                      <tr style={{ height: "12px" }}></tr>
                      <tr>
                        <td colSpan={3} style={{ borderBottom: "solid 1px rgb(230, 230, 230)" }}></td>
                      </tr>
                      <tr style={{ height: "20px" }}></tr>
                      <tr style={{ height: "40px" }}>
                        <td style={{ width: "136px" }}></td>
                        <td style={{ width: "370px" }}>
                          <p style={footerTextStyle}>
                            <i>
                              This is an automated generated e-mail. Please do not reply to it. If you need help, please get directly in contact with us.
                            </i>
                          </p>
                        </td>
                        <td style={{ width: "136px" }}></td>
                      </tr>
                      <tr style={{ height: "16px" }}></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  );
};

export default NewDiaryAssignmentNotification;
