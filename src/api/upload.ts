export const upload = async (url: string, data: object) => {
	try {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// if (!res.ok) {
		// 	const errorText = await res.text();
		// 	console.error(
		// 		`Error: ${res.status} - ${res.statusText}`,
		// 		errorText
		// 	);
		// 	throw new Error(
		// 		`Server responded with ${res.status}: ${res.statusText}`
		// 	);
		// }

		return await res.json();
	} catch (error) {
		console.error("Upload failed:", error);
		throw error;
	}
};
