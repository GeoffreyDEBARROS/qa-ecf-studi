-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: quai_antique_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `desserts`
--

DROP TABLE IF EXISTS `desserts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `desserts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dessert` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desserts`
--

LOCK TABLES `desserts` WRITE;
/*!40000 ALTER TABLE `desserts` DISABLE KEYS */;
INSERT INTO `desserts` VALUES (1,'Tiramisu',4.50),(2,'Mousse au chocolat',4.00),(3,'Panna cotta',4.50),(4,'Iles flottantes',4.00);
/*!40000 ALTER TABLE `desserts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dishes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dishe` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES (1,'Poulet au curry et coco',12.50),(2,'Brochettes de poulet aux ├®pices',12.00),(3,'Tenders de poulet',12.50),(4,'Risotto de pomme de terre',12.50),(5,'Salade de saison',10.50);
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `hour` time NOT NULL,
  `email` varchar(255) NOT NULL,
  `default_guests` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (9,'2023-05-12','13:00:00','gzqssg@xn--gmail-2ua',5),(13,'2023-05-18','19:00:00','yoda@gmail.com',4),(14,'2023-05-12','18:30:00','yoda@gmail.com',4),(15,'2023-05-19','20:00:00','yoda@gmail.com',4),(16,'2023-05-26','12:30:00','test@gmail.com',6);
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `days` varchar(20) DEFAULT NULL,
  `morning_open` varchar(20) DEFAULT NULL,
  `morning_close` varchar(20) DEFAULT NULL,
  `evening_open` varchar(20) DEFAULT NULL,
  `evening_close` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES ('Lundi','11:00','15:00','18:00','23:00'),('Mardi','Ferm├®','Ferm├®','18:00','23:00'),('Mercredi','11:00','15:00','18:00','23:00'),('Jeudi','11:00','15:00','18:00','23:00'),('Vendredi','11:00','15:00','18:00','00:00'),('Samedi','11:00','15:00','18:00','00:00'),('Dimanche','11:00','15:00','18:00','23:00');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starters`
--

DROP TABLE IF EXISTS `starters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `starter` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starters`
--

LOCK TABLES `starters` WRITE;
/*!40000 ALTER TABLE `starters` DISABLE KEYS */;
INSERT INTO `starters` VALUES (1,'Salade C├®sar',5.99),(2,'Muffins au poulet',4.50),(3,'Croquette de pommes de terre',4.99),(4,'Vichyssoise de pommes de terre',4.99);
/*!40000 ALTER TABLE `starters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'example@example.com',
  `password` varchar(255) NOT NULL DEFAULT 'password',
  `default_guests` int NOT NULL DEFAULT '2',
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (120,'admin@gmail.com','$2b$10$8o57WM0R7HN/lr2xRnhCk.XzscuaE5R8URGdKYIvurLoQzyThFp7e',0,'Admin'),(121,'geoffrey@gmail.com','$2b$10$N85RCfu84eeMU8F.sKaijeNTBIGGG10h6m1B6.WORSUNLQFResLiW',4,'Geoffrey'),(122,'antoine01@gmail.com','$2b$10$umjVEd90dgJdKFRPDc9Zqu816drg/fXn6MeicoR65PMwWNQ8Nxxji',4,'Antoine'),(123,'yoda@gmail.com','$2b$10$NrqOC0UAdnM9E1/rCCJHUuYqLgodSGICDO0BziDiZDdW2FWpvJW22',4,'Yoda'),(124,'obiwan@gmail.com','$2b$10$QrUf76N35D1SKnmYzsNkiujMceM0HutSVbE46tBRe1G3MX7/FV04e',4,'Obiwan'),(125,'carapuce@gmail.com','$2b$10$.S16aKa2vkfS7k3dadI/febF5DHi4biaaTWjpbhTYH5YwbDfmSaPe',5,'Carapuce'),(126,'geo@gmail.com','$2b$10$ojg4jkYq9O6xMk3zlYFiD.7zxHRHD6.O//xo4MOXgrMv.OHWFEhii',4,'Geoffrey');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-12 14:30:49
