# Invoice Payment Process

## Technologies Used
- Camunda Platform 7
- Maven
- Angular

## Setup
1. Clone and Import as maven project into your IDE
2. If this is the first time, you should:
- run the command ```mvn clean``` so your build will start from a clean slate.

## Run Camunda Process Engine
1. Compiles code and runs it with command ```mvn spring-boot: run```
2. By default, the home page is at **localhost:8080/** and username/password is **admin/admin**

## Run custom backend application
1. ```cd ./BackendApplication```
2. ```mvn spring-boot: run```
Access URL: http://localhost:3000

## Run ui component
1. ```cd ./ui```
2. ```npm install```
3. ```npm start```
4. Default user to login is **User/password**
Access URL: http://localhost:4200
