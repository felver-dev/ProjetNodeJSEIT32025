# INITIALISATION D'UN PROJET NODE

$yarn init -y  || npm init -y

## LIBRAIRIES A INSTALLER

Cors

express

mysql2

nodemon -D

sequelize ORM = Object Relational Mapping

sequelize-cli

## Model View Controller

Il y aura de models pour créer le schéma de nos tables dans la base de données

Les Vues (Views) vont le front-end c'est à dire React JS pour notre cas

Les Controllers : Ce sont eux qui vont définir la logique de nos APIs

Il y aura des routes pour réprsenter les endpoints

## npx sequelize-cli init

Cette commande initialize votre projet avec Sequelize-cli


## Créer un model

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
