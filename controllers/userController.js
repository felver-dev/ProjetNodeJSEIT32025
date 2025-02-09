const { User } = require("../models");

// Retrouve la liste des utilisateurs dans la base de données
const getUsers = (req, res) => {
  User.findAll()
    .then((user) => {
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "Users not found" });
      if (user) return res.status(200).json({ success: true, data: user });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: error });
    });
};

// Retrouve un utilisateur par id depuis la base de données
const getUserById = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((user) => {
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      if (user) return res.status(200).json({ success: true, data: user });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: error });
    });
};

// Créer un utilisateur
const createUser = (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.firstName,
  };

  User.create(user)
    .then((user) => res.status(201).json({ success: true, data: user }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

// Surrpimer un utilisateur
const deleteUser = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id: id,
    },
  })
    .then((user) => {
      return res.status(200).json({ success: true, data: user });
    })
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

// Mettre à jour un utilisateur
const updateUser = (req, res) => {
  const id = req.params.id;
  User.update(req.body, { where: { id: id } })
    .then((user) => {
      return res.status(200).json({ success: true, data: user });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: error });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
