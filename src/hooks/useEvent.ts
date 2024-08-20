import {useCallback, useRef} from 'react';

function useEvent<Args extends unknown[], ReturnType>(callback: (...args: Args) => ReturnType) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  return useCallback((...args: Args) => callbackRef.current?.(...args), []);
}

export default useEvent;
