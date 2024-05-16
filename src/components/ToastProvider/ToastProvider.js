import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [ toasts, setToasts ] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code !== 'Escape') return;
      setToasts([]);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


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
