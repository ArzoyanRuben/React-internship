import {useState} from 'react';

export const useCustomModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return { isOpen,toggle }
}
