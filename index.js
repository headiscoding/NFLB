const express = require('express');
const app = express();

app.use(express.static('Public'));

app.get('/', (req, res) => {
	res.sendFile("static/index.html", {root: __dirname});
});

app.post('/Login', (req, res) => {
	res.send("ok");
});
app.post('/Register', (req, res) => {
	res.send("ok");
});
app.listen(3000, () => console.log('server is up and alive!'));