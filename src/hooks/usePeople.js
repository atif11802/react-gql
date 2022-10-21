import { useQuery, gql } from "@apollo/client";

const GET_PEOPLE = gql`
	query {
		conferences {
			name
			slogan
			id
		}
	}
`;

const usePeople = () => {
	const { loading, error, data } = useQuery(GET_PEOPLE);

	return {
		loading,
		error,
		data,
	};
};

export default usePeople;
