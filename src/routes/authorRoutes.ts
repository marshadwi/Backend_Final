import { Router } from "express";
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor, } from "../controller/authorControllers";

const authorRouter = Router()

authorRouter.get("/", getAllAuthors)
authorRouter.post("/", createAuthor)
authorRouter.get("/:id", getAuthorById)
authorRouter.patch("/:id", updateAuthor)
authorRouter.delete("/:id", deleteAuthor)

export default authorRouter;