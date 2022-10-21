import React from "react";
import usePeople from "../hooks/usePeople";
import { Link } from "react-router-dom";

const Trial = () => {
	const { loading, error, data } = usePeople();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);

	return (
		<div>
			{data.conferences.map(({ name, slogan, id }) => (
				<div key={id}>
					<Link to={`/${id}`}>
						<p>{`${slogan} ${name} }`}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Trial;
