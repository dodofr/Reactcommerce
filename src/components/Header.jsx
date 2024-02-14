import { useMediaQuery } from 'react-responsive';

import HeaderBig from './HeaderBig';
import HeaderSmall from './HeaderSmall';


function Header() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <>
      {isSmallScreen ? <HeaderSmall /> : null}
      {isBigScreen ? <HeaderBig /> : null}
    </>
  );
}

export default Header;
