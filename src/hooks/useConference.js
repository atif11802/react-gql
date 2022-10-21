import { useQuery, gql } from "@apollo/client";

const GET_CONFERENCE = gql`
	query GetConference($id: ID!) {
		conference(id: $id) {
			name

			id
		}
	}
`;

const useConference = (id) => {
	const { loading, error, data } = useQuery(GET_CONFERENCE, {
		variables: { id },
	});

	return {
		loading,
		error,
		data,
	};
};

export default useConference;
