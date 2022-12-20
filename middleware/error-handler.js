const errorHandler = (err, req, res, next) =>
res.status(500).json({msg:'There was an error: '},err);

export default errorHandler;