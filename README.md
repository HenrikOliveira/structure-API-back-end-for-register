![20240815_150427](https://github.com/user-attachments/assets/e03fc2fb-235b-435d-86c6-fc3701babe8b)

![20240815_150540](https://github.com/user-attachments/assets/df63b6fa-2c72-417c-88a1-0909962057a2)




>API tecnologias  back end

 **BACK-END* ;)
---> Node.js, express, primsa, MongoDB, JavaScript, json,  <----
 
 
 **API de usuarios --->
     - Criar um usuario 
     - Listar todos os usuarios
     - editar um usuario(s)
     - Deletar**

***IMPORTANTA PARA FUNCIONAR****

--> Inicialize o projeto instalando as bibliotecas com as dependencias corretmnte 
-----> SIGA OS COMANDOS 
-------> configure e crie um banco de dados em MongoDB, siga e instale as configurações com o Prisma 
---------> Crie um Banco de dados Não relacional com MongoDB com um usuario e senha para alterar o .env e conectar com prisma 
 -----------> configure seu .env apos instalar o prisma 

 ****COMANDOS***

 --->  npm init -y  
 -----> npm i express
 -------> node --watch server.js -- para rodar o server no http://localhost:3000/usuarios
 ---------> npm install prisma --save-dev
------------->  npx prisma init ---> para iniciar a conexão com banco de dados e criar os arquivos necessários 
como o .env
depois siga ---->  npx prisma db push --->> para avisar que o banco de dados está configurado 
Tambem é obrigátorio a instalação no db client com -----> npm install @prisma/client

---------------------->  npx prisma studio


****IMPORTANTE PARA REPARO CASO TROQUE O ESTADO DE STRING PARA INT OU OUTROS ACESSE VIA TERMINAL SIGA AS INSTRUÇÕES CORRETAMENTE***
----> Instale o mongosh em seu C:// ou linux 

------> Apos instalar com as intruções em cloud Mongodb em --> shell conexões 


acesso a banco de dados pelo terminal 

PS C:\Users\Usuario\Downloads\mongosh-2.2.15-win32-x64\bin> .\mongosh "mongodb+srv://usuarios.d2tob.mongodb.net/" --apiVersion 1 --username "SEU NOME"
Enter password: ****************
Current Mongosh Log ID: 66bd1b135280c89f50228fb4
Connecting to:          mongodb+srv://<credentials>@usuarios.d2tob.mongodb.net/?appName=mongosh+2.2.15
Using MongoDB:          7.0.12 (API Version 1)
Using Mongosh:          2.2.15

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

Atlas atlas-w9kpy0-shard-0 [primary] test> show dbs
usuarios  108.00 KiB
admin     296.00 KiB
local       8.68 GiB
Atlas atlas-w9kpy0-shard-0 [primary] test> show usuarios
MongoshInvalidInputError: [COMMON-10001] 'usuarios' is not a valid argument for "show".
Atlas atlas-w9kpy0-shard-0 [primary] test> show admin
MongoshInvalidInputError: [COMMON-10001] 'admin' is not a valid argument for "show".
Atlas atlas-w9kpy0-shard-0 [primary] test> cat usuarios
Uncaught:
SyntaxError: Missing semicolon. (1:3)

> 1 | cat usuarios
    |    ^
  2 |

Atlas atlas-w9kpy0-shard-0 [primary] test> use usuarios
switched to db usuarios
Atlas atlas-w9kpy0-shard-0 [primary] usuarios> show collections
User
Atlas atlas-w9kpy0-shard-0 [primary] usuarios> db.User.find().pretty()
[
  {
     _id: ObjectId('*************'),
    email: '***********',
    name: '****',
    age: '**'
  },
  {
     _id: ObjectId('*************'),
    email: '***********',
    name: '****',
    age: '**'
  },
  {
    _id: ObjectId('*************'),
    email: '***********',
    name: '****',
    age: '**'
  },
  {
      _id: ObjectId('*************'),
    email: '***********',
    name: '****',
    age: '**'
  },
  {
    _id: ObjectId('66bcff1d4f1098707f68bc61'),
    name: 'calça cagada',
    email: 'froalaoggg@ddi.com',
    age: Long('46')
  },
  {
      _id: ObjectId('*************'),
    email: '***********',
    name: '****',
    age: '**'
  }
]
Atlas atlas-w9kpy0-shard-0 [primary] usuarios> db.User.updateMany(

...     {},
...     [
...         {
...             $set: {
...                 age: {
...                     $cond: {
...                         if: { $isNumber: "$age" },
...                         then: { $toString: "$age" },
...                         else: "$age"                    }
...                 }
...             }
...         }
...     ]
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 6,
  modifiedCount: 3,
  upsertedCount: 0
}
Atlas atlas-w9kpy0-shard-0 [primary] usuarios>

