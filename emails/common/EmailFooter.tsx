import * as React from 'react';
import { Section, Text, Hr } from '@react-email/components';

const hrStyle: React.CSSProperties = {
  borderColor: 'rgb(230, 230, 230)',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '12px',
  fontFamily: 'Roboto, sans-serif',
  color: 'rgb(102, 102, 102)',
  fontWeight: 400,
  lineHeight: '18px',
  textAlign: 'center',
};

const EmailFooter: React.FC = () => {
  return (
    <>
      <Hr style={hrStyle} />
      <Section style={{ textAlign: 'center' }}>
        <Text style={footerTextStyle}>
          This is an automated generated e-mail. Please do not reply to it. If you need help, please get directly in contact with us.
        </Text>
      </Section>
    </>
  );
};

export default EmailFooter;
