import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: '*'
}));
const port = 3000;
const host = 'localhost';

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});