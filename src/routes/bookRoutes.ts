import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBooksById, updateBook } from "../controller/bookControllers";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBooksById);
bookRouter.patch("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);
bookRouter.post("/", createBook);


export default bookRouter;