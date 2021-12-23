import React, { FC } from "react";
import { Header } from "@components/common";
import { Navigation } from "@components/mobile";
import classNames from "classnames";
import styles from "./PageLayout.module.scss";

interface Props {
  className?: string;
  fullWidth?: boolean;
  fixedHeight?: boolean;
  hideMobileHeader?: boolean;
  removeFooter?: boolean;
  backwardURL?: string;
  backwardEnabled?: boolean;
  primaryHeader?: boolean;
}

const PageLayout: FC<Props> = ({
  className,
  children,
  fullWidth = false,
  fixedHeight = false,
  hideMobileHeader = false,
  removeFooter = false,
  backwardURL = "/",
  backwardEnabled = false,
  primaryHeader = false,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      {/* {fixedHeight && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )} */}
      <Header />
      <div
        className={classNames(styles.content, {
          [styles["full-width"]]: fullWidth,
          [styles["fixed-height"]]: fixedHeight,
        })}
      >
        {children}
      </div>
      {/* {!removeFooter && <Footer />} */}
      {/* {<Navigation />} */}
    </div>
  );
};

export default PageLayout;
