# Mongo DB CRUD operation
- https://www.tutorialspoint.com/mongodb/index.htm
- 
## Introducing MongoDB
- Mongo DB is a No Sql database
- It stores data as json object
- It dont have scheme or able
- While retrieving data from mongo db, it directly returns Json object. so there is no transformation of data from Object to json object like other databases.
## Installing MongoDB on MAC
- Mongo db removed from home brew, so follow the below steps to install mongo db
- ```
    brew services stop mongodb
    brew uninstall mongodb

    brew tap mongodb/brew
    brew install mongodb-community
    brew services start mongodb-community
    ```
-    
## Mongo Installation and setup in mac
- /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
- brew tap mongodb/brew
- brew install mongodb-community
- **Preparation for Catlina**
- sudo mkdir -p /System/Volumes/Data/data/db
- sudo chown -R `id -un` /System/Volumes/Data/data/db
- **Start Using MongoDb**
- brew services run mongodb-community
- check if mongo db is running
    - brew services list
- stop Mongo DB
    - brew services stop mongodb-community
## Set Up a local connection
- Check version of Mongo DB
    - mongo --version      
## Download and install MongoDb Compass
- https://www.mongodb.com/try/download/compass        
## Connecting to MongoDB
- https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- mongodb+srv://dbUser:D0best@cluster0.0ck4m.mongodb.net/test
## Schemas
- a
## Models
- a
## Saving a Document
- a
## Querying Documents
- a
## Comparison Query Operators
- a
## Logical Query Operators
- a
## Regular Expressions
- a
## Counting
- a
## Pagination
- a
## Exercise 1
- a
## Exercise 2
- a
## Exercise 3
- a
## Update Document- Query First
- a
## Updating a Document - Update First
- a
## Removing Documents
- a 


