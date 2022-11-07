CREATE DATABASE fretes;
use fretes;

CREATE TABLE usuarios (
id_usuario INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(100)
);

CREATE TABLE clientes (
id_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
cpf VARCHAR(15) NOT NULL,
categoria_cnh VARCHAR (3) NOT NULL,
cnh VARCHAR(15) NOT NULL,
telefone VARCHAR(20) NOT NULL,
cep VARCHAR(10) NOT NULL,
estado VARCHAR(50) NOT NULL,
cidade VARCHAR(50) NOT NULL,
bairro VARCHAR(30) NOT NULL,
logradouro VARCHAR(50) NOT NULL,
numero VARCHAR(4) NOT NULL,
id_usuario INT NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
);

CREATE TABLE veiculos (
id_veiculo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
modelo_veiculo VARCHAR(100),
ano_veiculo INT,
foto_veiculo1 VARCHAR(200),
foto_veiculo2 VARCHAR(200),
foto_veiculo3 VARCHAR(200),
id_motorista INT UNSIGNED NOT NULL,
FOREIGN KEY (id_motorista) REFERENCES clientes(id_cliente)
);

CREATE TABLE servicos (
id_servico INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_cliente INT UNSIGNED NOT NULL,
id_veiculo INT UNSIGNED NOT NULL,
tipo_viagem VARCHAR(30) NOT NULL,
auto_descricao VARCHAR(100) NOT NULL,
foto_motorista VARCHAR(200),
preco INT(100),
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
FOREIGN KEY (id_veiculo) REFERENCES veiculos(id_veiculo)
);

CREATE TABLE servicos_contratados (
id_servico_contratado INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
id_cliente_contratante INT UNSIGNED NOT NULL,
id_servico INT UNSIGNED NOT NULL,
distancia VARCHAR(100),
data_viagem DATE,
preco_final VARCHAR(100),
horario VARCHAR(5),
FOREIGN KEY (id_cliente_contratante) REFERENCES clientes(id_cliente),
FOREIGN KEY (id_servico) REFERENCES servicos(id_servico)
);