import React, { FC } from "react";
import { Footer, Header } from "@components/common";
import classNames from "classnames";
import styles from "./PageLayout.module.scss";
import { BottomNavigation } from "@src/components/common/mobile";

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
		<main className={classNames(styles.container, className)}>
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
			{!removeFooter && <Footer />}
			<BottomNavigation />
		</main>
	);
};

export default PageLayout;
