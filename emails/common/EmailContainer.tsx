import * as React from 'react';
import { Container } from '@react-email/components';

const containerStyle: React.CSSProperties = {
  maxWidth: '640px',
  borderRadius: '12px',
  backgroundColor: 'rgb(255, 255, 255)',
  padding: '24px',
  textAlign: 'center',
};

interface EmailContainerProps {
  children: React.ReactNode;
}

const EmailContainer: React.FC<EmailContainerProps> = ({ children }) => {
  return (
    <Container style={containerStyle}>
      {children}
    </Container>
  );
};

export default EmailContainer;
