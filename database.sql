-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)

--

-- Host: localhost    Database: quai_antique_db

-- ------------------------------------------------------

-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!50503 SET NAMES utf8mb4 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

--

-- Table structure for table `desserts`

--

DROP TABLE IF EXISTS `desserts`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `desserts` (
        `id` int NOT NULL AUTO_INCREMENT,
        `dessert` varchar(255) NOT NULL,
        `price` decimal(10, 2) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `desserts`

--

LOCK TABLES `desserts` WRITE;

/*!40000 ALTER TABLE `desserts` DISABLE KEYS */

;

INSERT INTO `desserts`
VALUES (1, 'Tiramisu', 4.50), (2, 'Mousse au chocolat', 4.00), (3, 'Panna cotta', 4.50), (4, 'Iles flottantes', 4.00);

/*!40000 ALTER TABLE `desserts` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `dishes`

--

DROP TABLE IF EXISTS `dishes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `dishes` (
        `id` int NOT NULL AUTO_INCREMENT,
        `dishe` varchar(255) NOT NULL,
        `price` decimal(10, 2) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `dishes`

--

LOCK TABLES `dishes` WRITE;

/*!40000 ALTER TABLE `dishes` DISABLE KEYS */

;

INSERT INTO `dishes`
VALUES (
        1,
        'Poulet au curry et coco',
        12.50
    ), (
        2,
        'Brochettes de poulet aux épices',
        12.00
    ), (3, 'Tender de poulet', 12.50), (
        4,
        'Risotto de pomme de terre',
        12.50
    ), (
        5,
        'Pommes de terre farcies',
        11.50
    );

/*!40000 ALTER TABLE `dishes` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `schedule`

--

DROP TABLE IF EXISTS `schedule`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `schedule` (
        `id` int NOT NULL AUTO_INCREMENT,
        `days` varchar(20) DEFAULT NULL,
        `morning_open` time DEFAULT NULL,
        `morning_close` time DEFAULT NULL,
        `evening_open` time DEFAULT NULL,
        `evening_close` time DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `schedule`

--

LOCK TABLES `schedule` WRITE;

/*!40000 ALTER TABLE `schedule` DISABLE KEYS */

;

INSERT INTO `schedule`
VALUES (
        1,
        'Lundi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        2,
        'Mardi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        3,
        'Mercredi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        4,
        'Jeudi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        5,
        'Vendredi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        6,
        'Samedi',
        '11:00:00',
        '15:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        7,
        'Dimanche',
        '11:00:00',
        '15:00:00',
        '18:30:00',
        '23:30:00'
    );

/*!40000 ALTER TABLE `schedule` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `starters`

--

DROP TABLE IF EXISTS `starters`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `starters` (
        `id` int NOT NULL AUTO_INCREMENT,
        `starter` varchar(255) NOT NULL,
        `price` decimal(10, 2) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `starters`

--

LOCK TABLES `starters` WRITE;

/*!40000 ALTER TABLE `starters` DISABLE KEYS */

;

INSERT INTO `starters`
VALUES (1, 'Salade César', 5.99), (2, 'Muffins au poulet', 4.50), (
        3,
        'Croquette de pommes de terre',
        4.99
    ), (
        4,
        'Vichyssoise de pommes de terre',
        4.99
    );

/*!40000 ALTER TABLE `starters` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `users`

--

DROP TABLE IF EXISTS `users`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `users` (
        `id` int NOT NULL AUTO_INCREMENT,
        `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'example@example.com',
        `password` varchar(255) NOT NULL DEFAULT 'password',
        `default_guests` int NOT NULL DEFAULT '2',
        `name` varchar(255) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 110 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `users`

--

LOCK TABLES `users` WRITE;

/*!40000 ALTER TABLE `users` DISABLE KEYS */

;

INSERT INTO `users`
VALUES (
        100,
        'admin@admin.com',
        'Admin123',
        1,
        'Admin'
    ), (
        109,
        'cam@gmail.com',
        '$2b$10$a0PvhU0QOigVxEGxKt4R8.1IYqt.U.YguQ8C6CtGeo4Mumou4xnF.',
        4,
        'Camille'
    );

/*!40000 ALTER TABLE `users` ENABLE KEYS */

;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2023-04-26 17:25:34