import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import styles from './Popup.module.scss';
import useClickOutside from '../../hooks/useClickOutside';

interface PopupProps {
  children: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onClose(): void;
  isFitWidth?: boolean;
}

function Popup({children, content, isOpen, isFitWidth, onClose}: PopupProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [{x, y, width}, setPosition] = useState({x: 0, y: 0, width: 0});

  const updatePopupPosition = useCallback(() => {
    const bbox = anchorRef.current?.getBoundingClientRect();
    if (!bbox) return;
    setPosition({x: bbox.x, y: bbox.y + bbox.height, width: bbox.width});
  }, []);

  useEffect(() => {
    updatePopupPosition();
    const anchor = anchorRef.current;
    if (!isOpen || !anchor) return;
    window.addEventListener('scroll', updatePopupPosition);
    const observer = new ResizeObserver(updatePopupPosition);
    observer.observe(anchor);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updatePopupPosition);
    };
  }, [isOpen, updatePopupPosition]);

  useClickOutside(anchorRef, onClose);

  return (
    <>
      <div ref={anchorRef}>{children}</div>
      {isOpen ? (
        <div
          style={{left: x + 'px', top: y + 'px', minWidth: isFitWidth ? width + 'px' : 0}}
          className={styles.popup}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      ) : null}
    </>
  );
}

export default Popup;
