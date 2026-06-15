import type { ImgHTMLAttributes } from 'react';

const SvgLogo = ({ style, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/logo.png"
    alt="SLS"
    width={20}
    height={20}
    style={{ width: '1em', height: '1em', objectFit: 'contain', ...style }}
    {...props}
  />
);
export default SvgLogo;
