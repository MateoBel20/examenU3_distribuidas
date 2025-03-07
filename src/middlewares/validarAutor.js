const validarAutor = (req, res, next) => {
    const { nombre, nacionalidad } = req.body;
    if (!nombre || !nacionalidad) {
      return res.status(400).json({ error: 'Nombre y nacionalidad son obligatorios' });
    }
    next();
  };
  
  module.exports = validarAutor;