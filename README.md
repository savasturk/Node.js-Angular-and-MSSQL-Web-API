# Node.js-Angular-and-MSSQL-Web-API
All database operations were placed in repository layer. It calls stored procedures which are defined in database. I used type-orm with Node.js. I have written interfaces(models) for modelling and passing data through layers. For both front-end and back-end I used typescript.

With new techonology and techniques, asynchronous codes gain much more attention. Because, a developer can write code like synchronous but code will work asynchronous. This is very important, because cpu intensive or IO operations will not block thread or main thread in program. The developer can inrease the throughput.
Another advatage of Node.js has got cross-platform support, and it is open source project. Also npm packages can be downloaded from anywhere which has got internet connection, this is a pros for Node.js

Another layer is api. In this layer, I placed business logic codes. For example, extreact data from post, delete, put or get method, adn then send it to repository for database process, then return a value or a message about the process.
The service layer is written for front-end. The logic is like subscribing a newspaper. Make a request and then subscribe the service, then wait for reply. This feature provides loading static HTML elements and if it si fetced load other elements.
The component layer was used for managing front-end operations, like button event handling, routing, calling services, drawing...
The HTML layer was used for presentation. 
All layers can be seen in the prject navigation-bar. All layers are seperated clearly. For example api layer can be changed without changing other layer

System Constraints

In the front-end, css was not used. In the database, the main constraint is update operations. In the project I maintain an interface, so sometimes it causes some problems like data inconsistency. Maybe the data in the view is not updated or the main table is not updated.
All data must be send in JSON format. Because I used typescript in the project. TypeScipt was designed for web developing, so all interfaces and objects can be represented like a JSON object.
