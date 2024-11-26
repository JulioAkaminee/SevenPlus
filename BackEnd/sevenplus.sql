-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/11/2024 às 15:16
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sevenplus`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `descricao` text DEFAULT NULL,
  `url_video` varchar(255) NOT NULL,
  `capa` varchar(255) DEFAULT NULL,
  `data_lancamento` date DEFAULT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `movie_categories`
--

CREATE TABLE `movie_categories` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `data_criacao`) VALUES
(1, 'julio akamine', 'juliooakamine@gmail.com', '$2b$10$spEC5DHtbKw86Vq5iR.k3uOGZ9kCEtHuIpwqayuYBL1wbiBuY3bBa', '2024-11-26 11:46:23'),
(2, 'teste1', 'teste1@gmail.com', '$2b$10$if32b.i7NbhkRJ1ALwmii.EEGvwTVEv5/Zz6zeNnhLJBIpnqXJW92', '2024-11-26 11:50:54'),
(3, 'julioakamineleite', 'julioAkamineLeite@gmail.com', '$2b$10$6lk8FWWcscZaU3fvwFzqjOMGpDI51Z7IdQ4xFV.H5rLvjvZNL7ac2', '2024-11-26 12:09:39'),
(4, 'Testedasilva', 'testedasilva@gmail.com', '$2b$10$bC9rwMI2IRUQkE9XDcMBA.vELYbWipxnnbydvq4TChcKP119s5ugq', '2024-11-26 12:19:51'),
(5, 'TesteMato', 'testemato@gmail.com', '$2b$10$/gMLDOwpo0ZcLgTpWeKja.2N7Ny5TXpsemIfennPXz6af5efqkT.a', '2024-11-26 12:33:23'),
(6, 'Julio Akamine Teste', 'Testeakamine@gmail.com', '$2b$10$KxtI8RD9g9e/3FVkSIw2L.cJqsxMlcRkyxV7O6xkPzUrS2p4au8Wu', '2024-11-26 13:23:42'),
(7, 'Muriel prado', 'Murielprado@gmail.com', '$2b$10$5FpQrQE/ZtOIG6Ipp2Bjd.7ZgVFVdXKgVPD7.N7F5gjye6XKM5U1u', '2024-11-26 13:47:14'),
(8, 'Testetesteao', 'Testao@gmail.com', '$2b$10$eF3PN0yrRi2xMtcU6NTNkekZq8pw2NtFcQ84ApTESSxU6FjlelUSa', '2024-11-26 14:14:34');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `movie_categories`
--
ALTER TABLE `movie_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `movie_categories`
--
ALTER TABLE `movie_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `movie_categories`
--
ALTER TABLE `movie_categories`
  ADD CONSTRAINT `movie_categories_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `movie_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
