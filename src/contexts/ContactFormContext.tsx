import React, { createContext, useContext, useState } from 'react';

interface ContactFormContextType {
  isPopupOpen: boolean;
  setPopupOpen: (open: boolean) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <ContactFormContext.Provider value={{ isPopupOpen, setPopupOpen }}>
      {children}
    </ContactFormContext.Provider>
  );
}; 