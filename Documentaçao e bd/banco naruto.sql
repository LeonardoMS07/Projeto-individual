create database naruto;
use naruto;

create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar(255),
senha varchar(255),
email varchar(255),
fk_personagem int,
foreign key (fk_personagem) references personagem(id_personagem),
fk_cla int,
foreign key (fk_cla) references cla(id_cla)

);

create table cla(
id_cla int primary key auto_increment,
nome_cla varchar(100)
);

create table personagem(
id_personagem int primary key auto_increment,
nome_personagem varchar(255)
);

insert into personagem values (null,'Naruto'),
(null,'Itachi'),
(null,'Kakashi'),
(null,'Sasuke'),
(null,'Shikamaru'),
(null,'Gaara'),
(null,'Hinata'),
(null,'Jiraya'),
(null,'Minato'),
(null,'Madara'),
(null,'Pain'),
(null,'Obito'),
(null,'Rock Lee'),
(null,'Sakura'),
(null,'Neji');

select * from personagem;


insert into cla values(null,'Uchiha'),
(null,'Uzumaki'),
(null,'Senju'),
(null,'Hyuuga'),
(null,'Namikaze'),
(null,'Nara'),
(null,'Hataque'),
(null,'Inuzuka');

select * from cla;
