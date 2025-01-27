import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;

//getAllBooks
export const getAllBooks = async (req, res) => {
    try{
        const allBooks = await bookClient.findMany();
        res.status(200).send({
            data: allBooks,
        });
    } catch (error) {
        console.log(error);
    }
};

//getBooksById
export const getBooksById = async (req, res) => {
    try{
        const bookId = req.params.id;
        const book = await bookClient.findUnique({
            where: {
                id: bookId,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

// CreateBook
export const createBook = async (req, res) => {
    try {
        const bookData = req.body;
        const book = await bookClient.create({
            data: bookData,
        });

        res.status(201).send({
            data: book,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Failed to create book",
            error: error.message,
        });
    }
};

// UpdateBook
export const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookData = req.body;

        const updatedBook = await bookClient.update({
            where: {
                id: bookId,
            },
            data: bookData,
        });

        res.status(200).send({
            data: updatedBook,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Failed to update book",
            error: error.message,
        });
    }
};

// DeleteBook
export const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;

        await bookClient.delete({
            where: {
                id: bookId,
            },
        });

        res.status(200).send({
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Failed to delete book",
            error: error.message,
        });
    }
};