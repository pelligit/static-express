const express = require('express');

const app = express();

const port = 3456;

app.use(express.static('./www'));

app.listen(port, () => {
	console.log('localhost:' + port);
});
