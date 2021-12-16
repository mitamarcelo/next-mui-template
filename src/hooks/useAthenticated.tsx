import { useEffect, useContext } from 'react';
import { AuthenticationContext } from 'context/AuthenticationContext';
import { NextRouter } from 'next/router';

const useAuthenticated = (router: NextRouter) => {
  const { isAuthenticated, userLoaded, setPreviousRoute } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!isAuthenticated && userLoaded) {
      let prevPath = router.pathname;
      Object.keys(router.query).forEach((param) => {
        const value: string = router.query[param] as string;
        prevPath = prevPath.replace(`[${param}]`, value);
      });
      setPreviousRoute(prevPath);
      router.push('/login');
    }
  }, [isAuthenticated, userLoaded]);
};

export default useAuthenticated;
