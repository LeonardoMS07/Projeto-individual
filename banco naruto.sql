create database naruto;
use naruto;

create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar(255),
senha varchar(255),
email varchar(255),
);

create table cla(
id_cla int primary key auto_increment,
nome_cla varchar(100)
);

create table personagem(
id_personagem int primary key auto_increment,
nome_personagem varchar(255),
fk_cla int,
foreign key (fk_cla) references cla(id_cla)
);

create table personagem_favorito(
fk_usuario int,
foreign key (fk_usuario) references usuario(id_usuario),
fk_personagem int,
foreign key (fk_personagem) references personagem(id_personagem),
fk_cla_escolha int,
foreign key (fk_cla_escolha) references cla(id_cla),
primary key(fk_usuario,fk_personagem,fk_cla_escolha)
);
