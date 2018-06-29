Features
ASP.NET Core
Entity Framework Core
Sql Server databases are supported (Check installation instrcutions for more details)
Angular
Angular CLI
SSR (Server side rendering) - Coming soon...
Login and Registration functionality using Asp.Net Identity & JWT
Extensible User/Role identity implementation
Developed a page to view a list of products with CRUD Operations, only accessable to authorized users.
Social logins support with token based authentication.
Pre-requisites
.Net core sdk
Either VSCode with C# extension OR Visual studio 2017
Nodejs

Installation
1. Clone the repo
    git clone https://github.com/haidery786/ASPNetCoreIdentityCRUD
2. Change directory
    cd ASPNetCoreIdentityCRUD
3. dotnet restore
4. Install global dependencies
    npm install protractor rimraf http-server @angular/cli -g
5. cd ClientApp
6. npm install OR yarn
7. Run 
    i) Open terminal and run `npm start`
    ii) F5 from either [VScode] (https://code.visualstudio.com/) or [Visual Studio IDE](https://www.visualstudio.com/):

8. Point to SqlServer
    
This project supports sql server databases

* Run with SqlServer:
    * To run under sql server:
        * npm run clean
        * Delete `Migrations` folder
        * To use local sql server setup as default instance. (See appsettings.json file for connection string)
        * Run `dotnet ef migrations add "InitialMigrationName"`
