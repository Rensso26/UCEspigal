import React, { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState({
    idCard: '',
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  return (
    <CustomerContext.Provider value={{ customerData, setCustomerData }}>
      {children}
    </CustomerContext.Provider>
  );
};
