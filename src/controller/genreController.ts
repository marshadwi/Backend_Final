import { PrismaClient } from "@prisma/client";

const genreClient = new PrismaClient().genre;

// GetAllGenres
export const getAllGenres = async (req, res) => {
    try {
        const allGenres = await genreClient.findMany({
            include: {
                books: true,
            },
        });
        res.status(200).send({
            data: allGenres,
        });
    } catch (error) {
        console.log(error);
    }
};

// GetGenreById
export const getGenreById = async (req, res) => {
    try {
        const genreId = req.params.id;
        const genre = await genreClient.findUnique({
            where: {
                id: genreId,
            },
        });

        res.status(200).send({
            data: genre,
        });
    } catch (error) {
        console.log(error);
    }
};

// CreateGenre
export const createGenre = async (req, res) => {
    try {
        const genreData = req.body;
        const genre = await genreClient.create({
            data: genreData,
        });

        res.status(201).send({
            data: genre,
        });
    } catch (error) {
        console.log(error);
    }
};

// UpdateGenre
export const updateGenre = async (req, res) => {
    try {
        const genreId = req.params.id;
        const genreData = req.body;

        const updatedGenre = await genreClient.update({
            where: {
                id: genreId,
            },
            data: genreData,
        });

        res.status(200).send({
            data: updatedGenre,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Failed to update genre",
            error: error.message,
        });
    }
};

// DeleteGenre
export const deleteGenre = async (req, res) => {
    try {
        const genreId = req.params.id;

        await genreClient.delete({
            where: {
                id: genreId,
            },
        });

        res.status(200).send({
            message: "Genre deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Failed to delete genre",
            error: error.message,
        });
    }
};
