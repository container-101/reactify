import React from "react";
import { PageTransition } from "@src/components/common";
import { PageLayout } from "@src/components/layout";

const NotificationPage = () => {
	return (
		<PageLayout fullWidth>
			<PageTransition>
				{Array(10)
					.fill(1)
					.map((_, index) => {
						return <div>abc</div>;
					})}
			</PageTransition>
		</PageLayout>
	);
};

export default NotificationPage;
