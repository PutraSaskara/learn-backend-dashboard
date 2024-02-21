-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2024 at 04:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users3`
--

CREATE TABLE `users3` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(11) NOT NULL,
  `image` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imageUrl` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users3`
--

INSERT INTO `users3` (`id`, `name`, `email`, `gender`, `image`, `createdAt`, `updatedAt`, `imageUrl`) VALUES
(8, 'saskara', 'saskara@gmail.com', 'male', '21f04f0b-2619-4ae8-8fff-311b07ff30a11708520768244-564098140.png', '2024-02-21 13:06:08', '2024-02-21 13:06:08', '/uploads/21f04f0b-2619-4ae8-8fff-311b07ff30a11708520768244-564098140.png'),
(11, 'gund dewi', 'gungdewi@gmail.com', 'female', 'db906dd3-1d35-414b-8a11-94d25c8fb2e11708523791491-159088929.jpg', '2024-02-21 13:56:31', '2024-02-21 13:56:31', '/uploads/db906dd3-1d35-414b-8a11-94d25c8fb2e11708523791491-159088929.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users3`
--
ALTER TABLE `users3`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users3`
--
ALTER TABLE `users3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
