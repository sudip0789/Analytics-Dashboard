import type { ImgHTMLAttributes } from 'react';

const SvgLogo = ({ style, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/logo.png"
    alt="SLS"
    style={{ height: 32, width: 'auto', objectFit: 'contain', ...style }}
    {...props}
  />
);
export default SvgLogo;
