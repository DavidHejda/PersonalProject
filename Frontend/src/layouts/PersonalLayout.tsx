import React from 'react';
import Navbar from '../commons/components/Navbar';

export const PersonalLayout = ({ children }: any) => {
  return (
    <>
      <Navbar /> {/* Business specific Navbar if needed */}
      {/* ... other common components for business */}
      {children}
    </>
  );
};
