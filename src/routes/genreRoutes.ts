import { Router } from "express";
import { createGenre, deleteGenre, getAllGenres, updateGenre } from "../controller/genreController"

const genreRouter = Router();

genreRouter.get("/", getAllGenres);
genreRouter.post("/", createGenre);
genreRouter.get("/:id", getAllGenres);
genreRouter.patch("/:id", updateGenre);
genreRouter.delete("/:id", deleteGenre);

export default genreRouter;