import express from "express";
import dotenv from "dotenv"
import authorRouter from "./routes/authorRoutes"
import bookRouter from "./routes/bookRoutes"
import genreRouter from "./routes/genreRoutes"
import { env } from "process";
import { log } from "console";


const app = express()

dotenv.config();

const PORT = process.env.PORT

app.use(express.json())

app.use("/authors", authorRouter)
app.use("/books", bookRouter)
app.use("/genres", genreRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});