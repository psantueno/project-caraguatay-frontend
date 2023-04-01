/* Este hook da funcionamiento al botón hamburguesa */

import { useState } from 'react';

export const useHamburguer = () => { 

    const [open, setOpen] = useState(false);
    const [shouldCloseMenu, setShouldCloseMenu] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleLinkClick = () => {
        setOpen(!open);
    }

    const handleBlur = (e) => {
        const { currentTarget, relatedTarget } = e;

        if (currentTarget.contains(relatedTarget)) {
            setShouldCloseMenu(false);
        } else {
            setShouldCloseMenu(true);
            setOpen(false);
        }
    }

  return {
    open,
    handleClick,
    handleClose,
    handleLinkClick,
    handleBlur
  }
}
