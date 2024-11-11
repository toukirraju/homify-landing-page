import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }: {
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}) => {
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            const timer = setTimeout(() => setShow(false), 300); // Duration of the transition
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <div className={`fixed z-[9999] inset-0 bg-black/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} ${show ? 'visible' : 'invisible'}`} onClick={onClose}>
            <div className={`bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg p-6 relative transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
