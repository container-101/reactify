import classNames from 'classnames';
import { Fragment } from 'react';

type CustomImageProps = {
  bgFilter?: string;
};

/**
 * @param {string} bgFilter - pass bgFilter to add filter to image(parent should be relative)
 * @example 'bg-gradient-to-r from-gray-500/10 to-gray-500/50'
 */

import { ImgHTMLAttributes } from 'react';
const Image = ({
  bgFilter,
  ...rests
}: ImgHTMLAttributes<HTMLImageElement> & CustomImageProps) => (
  <Fragment>
    <div
      className={
        bgFilter
          ? classNames('absolute top-0 left-0 w-full h-full z-10', bgFilter)
          : ''
      }
    />
    <img {...rests} />
  </Fragment>
);
export default Image;
