export default router => {
	const params = {};

	router.asPath
		.replace(router.pathname, "")
		.replace("?", "")
		.split("&")
		.forEach(pair => {
			const parts = pair.split("=");

			params[parts[0]] = parts[1];
		});

	return params;
};