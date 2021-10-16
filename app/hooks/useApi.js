import { useState } from "react";

export default useApi = (apifunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const response = await apifunc(...args);
		setLoading(false);

		setError(!response.ok);
		setData(response.data);

		return response;
	};

	return { data, error, loading, request };
};
