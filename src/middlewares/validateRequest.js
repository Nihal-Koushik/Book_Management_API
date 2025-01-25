exports.validateRequest = (req, res, next) => {
    const { title, author, ISBN, price, quantity } = req.body;
    if (!title || !author || !ISBN || !price || !quantity) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
};
