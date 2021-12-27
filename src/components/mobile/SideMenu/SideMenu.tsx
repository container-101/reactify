import React, { useRef } from "react";
import { framerSidebar } from "@src/utils/constants";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@src/core/hooks/useDimensions";
import SideNavigation from "./SideMenuNav";
import SideMenuToggle from "./SideMenuToggle";
import styles from "./SideMenu.module.scss";

const SideMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef<HTMLElement>(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
			className={styles.container}
		>
			<motion.div
				className={styles.background}
				variants={framerSidebar}
			></motion.div>
			<SideNavigation />
			<SideMenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default SideMenu;
