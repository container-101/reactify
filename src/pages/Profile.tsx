import React from "react";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";
import { PageLayout } from "@src/components/layout";
import { PageTransition } from "@src/components/common";

const ProfilePage = () => {
	const { search } = useLocation();
	const { name } = useParams();
	const query = queryString.parse(search);
	const detail = query.detail === "true";
	return (
		<PageLayout fullWidth>
			<PageTransition>
				<h2>About {name}</h2>
				{detail && "detail:blahblah"}
			</PageTransition>
		</PageLayout>
	);
};

export default ProfilePage;
