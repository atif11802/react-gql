import React from "react";
import { useParams } from "react-router-dom";
import useConference from "../hooks/useConference";

const Details = () => {
	const { id } = useParams();

	const { loading, error, data } = useConference(id);
	console.log(data);

	return (
		<div>
			Details
			{data?.conference.id} {data?.conference.name}
		</div>
	);
};

export default Details;
