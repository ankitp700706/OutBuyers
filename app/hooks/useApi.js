import { useState } from "react";
export default useApi = (apifunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async () => {
		setLoading(true);
		const response = await apifunc();
		setLoading(false);

		if (!response.ok) return setError(true);

		setError(false);
		setData(response.data);
	};

	return { data, error, loading, request };
};
