# ************************************************************
# Sequel Ace SQL dump
# Version 20062
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.3.0)
# Database: retrosariadabia_db
# Generation Time: 2024-06-30 22:20:49 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table clients
# ------------------------------------------------------------

DROP TABLE IF EXISTS `clients`;

CREATE TABLE `clients` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;

INSERT INTO `clients` (`id`, `username`, `email`, `password`)
VALUES
	(1,'iavik','iavik2001@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$kPsfbIoAmPLcdvJBbuOWTw$BofiBoO0qE83m0xoo0ST1sMboHeFqvYWT9TZL4z7rZg'),
	(4,'Antonio','antonio@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$5fAe/ayMQ4vzeCd2+jD5NQ$XML5EakGhfVKoFjZSV5pjCjXXi4DUDGMZjd1RdVHBdU'),
	(5,'Iavik','iaviknpsn@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$8bJPtl5y/W5jDTPZqWCR0Q$r5HtZ+ucL8XTgAzhUWykFhiXU22f5KAb3OSSv291mjI'),
	(6,'KevinB','kevin@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$wHVxumWyLNt6FpJSGXZurQ$N92K2dC4S3AkXDjSyUo5RNYJvXrJlr1MsKIIdc0Mp4g'),
	(7,'Helder','helder@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$54d3JctLClP3gxZ37G/4MQ$FnCVlTUMCllIwiP9A7nOHcaWiqXdCFCfhBuwaqgb+U0'),
	(8,'Nitesh','nitesh@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$Apey8eWzqLpxMkmmmmCRow$b57pH2izdzLiSEUCqEIyMdeBogGYMGi6OlHLyqsB5YM'),
	(9,'John','john@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$3K6f5YUruXZ9TJG/X6H4gQ$nD37cnz5jiT4TcJ38OcxUzqdnp65Gm/Vo9lSvJUtj8c'),
	(11,'Ana','ana@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$89N3SB7n6OCy1gfbSxTqmQ$iVhVfOBWQJTEhuLMfKBX1KZNs07hdI9rJ2Rd4ifLFQE');

/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `inStock` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `image`, `name`, `description`, `price`, `inStock`)
VALUES
	(46,'d0593e65f5ac7c99c7b4cbc8767b0027','Tecido','Tecido a metro',20.00,5),
	(47,'aecf43762f8c1b0c31b438df2df07bea','Botões','Botões Dourados',4.00,10),
	(49,'4649141bd7826392b45c80dd9a072309','Lãs','Lãs',6.40,1);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
