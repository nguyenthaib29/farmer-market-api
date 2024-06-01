const Item = require('./models');

const getByType = async (req, res) => {
  try {
    const { type } = req.query;
    const items = await Item.find({ type });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const isTypeValid = async (req, res) => {
  try {
    const { type } = req.query;
    const validTypes = await Item.distinct('type');
    const isValid = validTypes.includes(type);
    res.json({ isValid });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getByType, isTypeValid };
