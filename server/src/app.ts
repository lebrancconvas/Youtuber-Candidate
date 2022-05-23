import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
	res.send('Server.');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});