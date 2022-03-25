import express, { Request, Response } from "express";
import BooksRoutes from "./routes/books";

const app = express();

app.use(express.json())
app.use(BooksRoutes);
app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript'));

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
