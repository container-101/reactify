import styles from "./Footer.module.scss";

interface Props {}

const Footer = (props: Props) => {
	return (
		<footer className={styles.container}>
			<div className={styles.content}></div>
		</footer>
	);
};

export default Footer;
