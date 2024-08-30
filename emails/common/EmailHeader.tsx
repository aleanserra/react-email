import * as React from 'react';
import { Section, Img } from '@react-email/components';

const imgStyle: React.CSSProperties = {
  color: 'rgb(34, 34, 34)',
  height: '60px',
};

interface EmailHeaderProps {
  logoSrc: string;
  altText: string;
}

const EmailHeader: React.FC<EmailHeaderProps> = ({ logoSrc, altText }) => {
  return (
    <Section>
      <Img src={logoSrc} alt={altText} style={imgStyle} />
    </Section>
  );
};

export default EmailHeader;
