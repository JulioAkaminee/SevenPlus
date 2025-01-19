-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19/01/2025 às 23:54
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

--
-- Despejando dados para a tabela `categories`
--

INSERT INTO `categories` (`id`, `nome`) VALUES
(1, 'Ação'),
(9, 'Animação'),
(4, 'Aventura'),
(2, 'Comédia'),
(11, 'Documentário'),
(3, 'Drama'),
(10, 'Fantasia'),
(5, 'Ficção Científica'),
(14, 'História'),
(8, 'Mistério'),
(15, 'Musical'),
(12, 'Policial'),
(6, 'Romance'),
(7, 'Terror'),
(13, 'Thriller');

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

--
-- Despejando dados para a tabela `movies`
--

INSERT INTO `movies` (`id`, `titulo`, `descricao`, `url_video`, `capa`, `data_lancamento`, `data_criacao`) VALUES
(1, 'Vingadores: Guerra Infinita', 'Os heróis se unem para combater Thanos e salvar o universo.', 'https://www.youtube.com/watch?v=6ZfuNTqbHE8', 'https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685204/poster-os-vingadores-guerra-infinita-a-7a2bd6fd.jpg', '2018-04-27', '2024-12-01 00:44:53'),
(2, 'O Rei Leão', 'O jovem Simba precisa enfrentar seu destino como o rei da savana.', 'https://www.youtube.com/watch?v=7TavVZMewpY', 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2019/08/28/1566998595613.jpg', '1994-06-15', '2024-12-01 00:44:53'),
(3, 'Matrix', 'Um programador descobre que a realidade é uma ilusão criada por máquinas.', 'https://www.youtube.com/watch?v=vKQi3bBA1y8', 'https://i.pinimg.com/originals/c3/8d/09/c38d09658a348f3b6101e9eff348b706.jpg', '1999-03-31', '2024-12-01 00:44:53'),
(4, 'Jurassic Park', 'Cientistas criam um parque com dinossauros vivos, mas as coisas fogem do controle.', 'https://www.youtube.com/watch?v=Crz8tOoXKpA', 'https://i.pinimg.com/564x/b4/dc/9e/b4dc9e601f9a3e2427f113a89db9d282.jpg', '1993-06-11', '2024-12-01 00:44:53'),
(5, 'O Senhor dos Anéis: A Sociedade do Anel', 'Frodo parte para destruir o Anel do Poder e salvar a Terra-média.', 'https://www.youtube.com/watch?v=Pki6jbPbP7A', 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg/250px-Lord_of_the_Rings_Fellowship_of_the_Ring.jpg', '2001-12-19', '2024-12-01 00:44:53'),
(6, 'Titanic', 'A história de amor entre Jack e Rose a bordo do infame navio Titanic.', 'https://www.youtube.com/watch?v=kVrqfYjkTdQ', 'https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg', '1997-12-19', '2024-12-01 00:44:53'),
(7, 'Star Wars: O Império Contra-Ataca', 'Luke Skywalker enfrenta desafios enquanto tenta destruir o Império.', 'https://www.youtube.com/watch?v=JHFYAJevBbs', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDAeZy-18_CP3jdXrSTGjA2poaOLLojpxXw&s', '1980-05-17', '2024-12-01 00:44:53'),
(8, 'Batman: O Cavaleiro das Trevas', 'Batman enfrenta o Coringa, que ameaça destruir Gotham City.', 'https://www.youtube.com/watch?v=EXeTwQWrcwY', 'https://play-lh.googleusercontent.com/b0bqoD27ib25NwPutF8Kf740iiFQ53CKUz27VBQkCQtvSfhdWQtb8vwFxxn-SzI-5ZATXXkDwf2qPODkNQ', '2008-07-18', '2024-12-01 00:44:53'),
(9, 'Vingadores: Ultimato', 'Os Vingadores devem unir forças para reverter o estalo de Thanos.', 'https://www.youtube.com/watch?v=TcMBFSGVi1c', 'https://img.elo7.com.br/product/zoom/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg', '2019-04-26', '2024-12-01 00:44:53'),
(10, 'O Poderoso Chefão', 'A história da família Corleone e sua ascensão ao poder no crime organizado.', 'https://www.youtube.com/watch?v=sY1S34973zA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7qVveFZtjzL0dWoWnpFiFvF1yKJmLjNy5w&s', '1972-03-24', '2024-12-01 00:44:53'),
(11, 'Coringa', 'A história de Arthur Fleck, um homem com problemas mentais que se transforma no Coringa.', 'https://www.youtube.com/watch?v=zAGVQLHvwOY', 'https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/joker/10062020/342/capa-joker.jpg', '2019-10-04', '2024-12-01 00:44:53'),
(12, 'A Origem', 'Dom Cobb, um especialista em extrair segredos, deve realizar um trabalho de \"inception\".', 'https://www.youtube.com/watch?v=YoHD9XEInc0', 'https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg', '2010-07-16', '2024-12-01 00:44:53'),
(13, 'Avatar', 'Um ex-soldado é enviado a Pandora e se envolve com os habitantes nativos.', 'https://www.youtube.com/watch?v=5PSNL1qE6VY', 'https://img.elo7.com.br/product/zoom/46B928F/big-poster-filme-avatar-o-caminho-da-agua-90x60-cm-lo002-presente-geek.jpg', '2009-12-18', '2024-12-01 00:44:53'),
(14, 'Harry Potter e a Pedra Filosofal', 'Harry Potter descobre ser um bruxo e começa sua jornada na escola de magia.', 'https://www.youtube.com/watch?v=VyHV0BRtdxo', 'https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg', '2001-11-11', '2024-12-01 00:44:53'),
(15, 'O Exorcista', 'Uma jovem é possuída por um demônio, e um padre é chamado para realizar o exorcismo.', 'https://www.youtube.com/watch?v=YDGw1oH9H_M', 'https://assets.cinebelasartes.com.br/wp-content/uploads/2023/08/z8X9sQ64GPGeJi5hWQsqDqEVMan-min-scaled.jpg', '1973-12-26', '2024-12-01 00:44:53'),
(16, 'Duna', 'Em um futuro distante, Paul Atreides navega em um mundo perigoso para garantir o futuro de sua família e povo.', 'https://www.youtube.com/watch?v=n9xhJrPXop4', 'https://img.travessa.com.br/livro/GR/06/065b06ff-ada9-42ed-9dc7-426f1b0fe8b1.jpg', '2021-10-22', '2024-12-02 12:14:24'),
(17, 'Rota de fuga', 'Ray Breslin é a maior autoridade que existe quando se trata de segurança. Após analisar diversas prisões de segurança máxima, ele desenvolve um modelo à prova de fugas. No entanto, Ray acaba sendo preso, mas é enviado justamente para a prisão que ele mesmo criou. Lá, ele precisa encontrar uma brecha não imaginada até então, que possa permitir sua fuga.', 'https://youtu.be/BG11w9Iq6rE?si=ujg5zYV80uNexBYP', 'https://br.web.img3.acsta.net/pictures/210/432/21043245_20130923232024873.jpg', '2016-05-16', '2024-12-02 12:38:53'),
(19, 'É Assim Que Acaba\n', 'Na trama, Lily Bloom (Blake Lively) é uma mulher que, após vivenciar eventos traumáticos na infância, decide começar uma vida nova em Boston e tentar abrir o próprio negócio. Como consequência dessa mudança de vida, Lily acredita que encontrou o amor verdadeiro em Ryle (Justin Baldoni), um charmoso neurocirurgião. Na trama, Lily Bloom (Blake Lively) é uma mulher que, após vivenciar eventos traumáticos na infância, decide começar uma vida nova em Boston e tentar abrir o próprio negócio. Como consequência dessa mudança de vida, Lily acredita que encontrou o amor verdadeiro em Ryle (Justin Baldoni), um charmoso neurocirurgião. ', 'https://www.youtube.com/watch?v=d5JuTW0uC0s', '\nhttps://br.web.img3.acsta.net/c_310_420/img/61/b3/61b35aa40057cba4f7df23c689d6979e.PNG', '2024-08-07', '2025-01-09 14:23:48');

-- --------------------------------------------------------

--
-- Estrutura para tabela `movie_categories`
--

CREATE TABLE `movie_categories` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `movie_categories`
--

INSERT INTO `movie_categories` (`id`, `movie_id`, `category_id`) VALUES
(1, 1, 5),
(2, 1, 1),
(3, 2, 2),
(4, 2, 4),
(5, 3, 5),
(6, 3, 1),
(7, 4, 5),
(8, 4, 4),
(9, 5, 4),
(10, 5, 3),
(11, 6, 6),
(12, 6, 3),
(13, 7, 5),
(14, 7, 4),
(15, 8, 1),
(16, 8, 3),
(17, 9, 5),
(18, 9, 1),
(19, 10, 3),
(20, 10, 2),
(21, 11, 1),
(22, 11, 3),
(23, 12, 5),
(24, 12, 1),
(25, 13, 5),
(26, 13, 4),
(27, 14, 10),
(28, 14, 4),
(29, 15, 7),
(30, 15, 8),
(31, 16, 5),
(32, 16, 3),
(33, 17, 1),
(36, 19, 6);

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
(8, 'Testetesteao', 'Testao@gmail.com', '$2b$10$eF3PN0yrRi2xMtcU6NTNkekZq8pw2NtFcQ84ApTESSxU6FjlelUSa', '2024-11-26 14:14:34'),
(9, 'Testecomteste', 'Testi.com', '$2b$10$ibzFTwJtf9Nrm2yAe1qcwuv6F0Avd1B0bRJItw29Ko8AAhJsl.qWO', '2024-12-01 00:37:22'),
(10, 'Testando api', 'Testeapi.com', '$2b$10$w7QWMHyihBd7BKlI0ZHrqOPmGv5zbXvoIwPaPT9fnEhowsqZLpxQC', '2024-12-02 04:59:00'),
(11, 'Teste de geste', 'Jajsjsj@gmail.com', '$2b$10$2JFoT2rsNVaoW906UrI5w.t.dIOxXo64dCGpikYzxRzjez8XzC1k2', '2024-12-05 13:23:07'),
(12, 'gustavo', 'gustavo@gmail.com', '$2b$10$ozjou6P1BtjP.mO.Hj2vgOzeOggnsQpPqkfJSIUVcoKkSaxTDv3AC', '2025-01-02 03:03:42');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `movie_categories`
--
ALTER TABLE `movie_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
