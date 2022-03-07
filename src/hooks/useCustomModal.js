import {useState} from 'react';

const useCustomModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return { isOpen,toggle }
}
export default useCustomModal;