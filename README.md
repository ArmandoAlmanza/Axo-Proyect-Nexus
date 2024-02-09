# Axo Proyect Nexus

Techs that I use.

-   NodeJs (ReactJs)
-   Java (Spring Boot)
-   Go (Gin)
-   PostgreSQL

This project is not dockerized (for now) so if you want to run this repo you need the following things.

| Technology | Link                                                                                                                                                                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NodeJs     | [NodeJS Last version](https://nodejs.org/en/download/current)                                                                                                                                                                                      |
| Java       | (For Mac Java) [Java 8](https://www.java.com/es/download/apple.jsp)<br><br>(For Mac JDK v17) [JDK v17](https://www.oracle.com/mx/java/technologies/downloads/#jdk17-mac) |
| Maven      | [Empaquetador de Java](https://maven.apache.org/download.cgi)                                                                                                                                                                                        |
| Go         | [GoLang](https://go.dev/doc/install)                                                                                                                                                                                                              |
| PostgreSQL | [PostgreSQL](https://www.postgresql.org/download/)                                                                                                                                                                                          |

You need to download everything to run this app (until i dockerized).

## Once you already have all

You need to run the followings commands.

## Commands

Remember that you need to install all the packages

For NextJs just do a npm i

For python you need to create the virtualenv in server

## _Clone the repo_

As you know we need to clone the repo (you won't be able to push to the main branch if you're not colab).

```sh
cd (path of the folder that you want the project)

git clone https://github.com/ArmandoAlmanza/Axo-Proyect-Nexus.git

cd axo-proyect-nexus
```

## _Client_

For "run" the client you need to navigate into the client folder **If you follow the steps above you already in "axo-proyect-nexus folder**

```sh
cd client

npm i && npm run dev
```

With that you only need to run the command for the dev server.  
But as you already know, we have 2 server, one for java and another for Go so, let's start with Java.

## _User Server_

To deploy the user server you only to follow the commands

```sh
cd server/users

./mvnw spring-boot:run

```

## _Projects Server_

To deploy the project server you only to follow the commands (for this example we are in root folder, if you are on users folder just do an "cd ..")

```sh
cd server/proyects

go mod download

go run main.go

```

## _PostgreSQL_

I don't want to upload my database model in .sql so, teacher, just ask me to pass you the file and exec every command in there xd.  
<br>
But for run postgresql with an default user.

```sh
psql -U postgres
```


<hr>
