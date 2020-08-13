const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://sp.dobest@gmail.com:D0best42o@https://cloud.mongodb.com/v2/5f337fe406598c6da7c05f98#clusters/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
await client.connect();
await listDatabases(client);
try {
    await client.connect();

    await listDatabases(client);
 
} catch (e) {
    console.error(e);
}
finally {
    await client.close();
}

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://sp.dobest@gmail.com:D0best42o@https://cloud.mongodb.com/v2/5f337fe406598c6da7c05f98#clusters/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
