import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen:boolean;
    isAddingEntry:boolean;
    isDragging:boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (valor:boolean) => void;
    StartDragging: () => void;
    EndDragging: () => void;
}

export const UIContext= createContext({} as ContextProps);