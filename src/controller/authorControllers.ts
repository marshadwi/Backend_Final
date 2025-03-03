import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;

//GetAllAuthors

export const getAllAuthors = async (req, res) => {
    try {
        const allAuthors = await authorClient.findMany({
            include: {
                books: true
            }
        })

        res.status(200).send({
            data: allAuthors,
        });
    } catch (error){
        console.log(error);
    }
};

//GetAuthorById
export const getAuthorById = async (req, res) => {
    try{
        const authorId = req.params.id 
        const author = await authorClient.findUnique({
            where: {
                id: authorId,
            },
            include: {
                books: true,
            },
        });
        res.status(200).send({
            data: author 
        })
    } catch (error) {
        console.log(error);
        
    }
}

//CreateAuthor
export const createAuthor = async (req, res) => {
    try{
        const authorData = req.body
        const author = await authorClient.create({
          data: authorData  
        })
        res.status(201).send({
            data: author,
        });
    } catch (error) {
        console.log(error);
    }
};

// UpdateAuthor
export const updateAuthor = async (req, res) => {
    try {
        const authorId = req.params.id
        const authorData = req.body
        const updatedAuthor = await authorClient.update({
            where: {
                id: authorId,
            },
            data: authorData,
        });
        res.status(200).send({
            data: updatedAuthor, 
            });
    } catch (error) {
        console.log(error);
    }
};

// DeleteAuthor
export const deleteAuthor = async (req, res) => {
    try {
        const authorId = req.params.id;
        const deleteAuthor = await authorClient.delete({
            where: {
                id: authorId,
            },
        });
        res.status(200).send({
            message: "Delete Author berhasil"
        });
    } catch (error) {
        console.log(error);
    }
};

