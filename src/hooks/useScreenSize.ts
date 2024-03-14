import { useWindowSize } from 'usehooks-ts';

import { BreakpointX } from '@/config/screen';

export const useScreenSize = () => {
  const { width } = useWindowSize();

  const isMobile = width < BreakpointX.M;
  const isTablet = width < BreakpointX.L;
  const isDesktop = width >= BreakpointX.L;
  const isDesktopXL = width >= BreakpointX.XL;

  return { isMobile, isTablet, isDesktop, isDesktopXL };
};
