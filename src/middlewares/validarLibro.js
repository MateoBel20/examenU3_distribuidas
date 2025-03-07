const validarLibro = (req, res, next) => {
  const { titulo, precio, stock, autorId, generoId } = req.body;
  if (!titulo || !precio || !stock || !autorId || !generoId) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }
  next();
};

module.exports = validarLibro;
