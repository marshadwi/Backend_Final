import { Router } from "express";
import { createGenre, deleteGenre, getAllGenres, getGenreById, updateGenre } from "../controller/genreController"

const genreRouter = Router();

genreRouter.get("/", getAllGenres);
genreRouter.post("/", createGenre);
genreRouter.get("/:id", getGenreById);
genreRouter.patch("/:id", updateGenre);
genreRouter.delete("/:id", deleteGenre);

export default genreRouter;