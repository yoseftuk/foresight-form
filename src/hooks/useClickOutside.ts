import useEvent from './useEvent';
import {RefObject, useEffect} from 'react';

function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  const handler = useEvent(callback);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as HTMLElement)) handler();
    }

    window.document.addEventListener('click', handleClick);

    return () => window.document.removeEventListener('click', handleClick);
  }, [handler, ref]);
}

export default useClickOutside;
