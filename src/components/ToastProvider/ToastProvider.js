import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [ toasts, setToasts ] = React.useState([]);

  const dismissToast = (id) => {
    const nextToasts = toasts.filter(toast => toast.id !== id);
    setToasts(nextToasts);
  };
  
  const createToast = (message, variant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant
    };
    setToasts([...toasts, newToast]);
  };

  return (
    <ToastContext.Provider value={{ createToast, toasts, dismissToast }}>
      { children }
    </ToastContext.Provider>
  );
}

export default ToastProvider;
