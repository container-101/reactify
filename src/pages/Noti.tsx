import { PageLayout } from "@src/components/layout";

const NotificationPage = () => {
	return (
		<PageLayout fullWidth>
			{Array(10)
				.fill(1)
				.map((_, index) => {
					return <div>abc</div>;
				})}
		</PageLayout>
	);
};

export default NotificationPage;
