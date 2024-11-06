const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
