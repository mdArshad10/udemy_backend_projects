

const getBooks = async(req,res)=>{
    try {
        // Fetch books from your database
        // const books = await Book.find();
        // res.json(books);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}