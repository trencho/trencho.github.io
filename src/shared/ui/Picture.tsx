import type { ImgHTMLAttributes } from 'react';

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** The PNG or JPG fallback. Its `.webp` sibling under `public/` is served first. */
  src: string;
};

/** Every raster image under `public/` ships as WebP plus a PNG/JPG fallback. */
const webpOf = (src: string): string => src.replace(/\.(png|jpe?g)$/, '.webp');

/**
 * An `<img>` wrapped in `<picture>` with its WebP source. Lazy and async by
 * default; the Hero portrait overrides both because it is the LCP image.
 */
const Picture = ({
  src,
  loading = 'lazy',
  decoding = 'async',
  ...img
}: PictureProps) => (
  <picture>
    <source srcSet={webpOf(src)} type='image/webp' />
    <img src={src} loading={loading} decoding={decoding} {...img} />
  </picture>
);

export default Picture;
