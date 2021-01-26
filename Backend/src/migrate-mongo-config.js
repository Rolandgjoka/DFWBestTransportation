
const DB_USER='rohan';
const DB_PASS='rohan1234';
const DB_NAME='vikalp';
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.hswhn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const config = {
    mongodb: {
    
        url: DB_URL,

        
        databaseName: DB_NAME,

        options: {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        }
    },

  
    migrationsDir: './src/db/migrations/',

    
    changelogCollectionName: 'changelog',

    
    migrationFileExtension: '.js'
};
console.log(config.migrationsDir);

module.exports = config;
