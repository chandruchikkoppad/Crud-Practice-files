const { MongoClient } = require("mongodb");

// MongoDB Atlas connection string
const uri = 'mongodb+srv://chandruchikkoppa:chandruTODO5@cluster0.3lkrp1u.mongodb.net/?retryWrites=true&w=majority';

// Database and collection names
const dbName = "Cluster0";
const collectionName = "todo5";

// Function to establish a connection to MongoDB Atlas
async function connectToMongoDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Return the connected client and database
    return {
      client,
      db: client.db(dbName),
    };
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  }
}

// Function to insert a document
async function insertDocument(data) {
  const { client, db } = await connectToMongoDB();

  try {
    // Insert the document into the collection
    const result = await db.collection(collectionName).insertOne(data);
    console.log("Document inserted:", result.insertedId);
  } catch (error) {
    console.error("Error inserting document:", error);
  } finally {
    // Close the connection
    client.close();
  }
}

// Function to update a document
async function updateDocument(filter, update) {
  const { client, db } = await connectToMongoDB();

  try {
    // Update the document in the collection
    const result = await db
      .collection(collectionName)
      .updateOne(filter, update);
    console.log("Document updated:", result.modifiedCount);
  } catch (error) {
    console.error("Error updating document:", error);
  } finally {
    // Close the connection
    client.close();
  }
}

// Function to delete a document
async function deleteDocument(filter) {
  const { client, db } = await connectToMongoDB();

  try {
    // Delete the document from the collection
    const result = await db.collection(collectionName).deleteOne(filter);
    console.log("Document deleted:", result.deletedCount);
  } catch (error) {
    console.error("Error deleting document:", error);
  } finally {
    // Close the connection
    client.close();
  }
}

// Function to retrieve documents
async function getDocuments() {
  const { client, db } = await connectToMongoDB();

  try {
    // Retrieve all documents from the collection
    const documents = await db.collection(collectionName).find().toArray();
    console.log("Retrieved documents:", documents);
  } catch (error) {
    console.error("Error retrieving documents:", error);
  } finally {
    // Close the connection
    client.close();
  }
}

// Usage examples

// Insert a document
const data = { todo: "Sample task" };
insertDocument(data);

// Update a document
const filter = { todo: "Sample task" };
const update = { $set: { todo: "Updated task" } };
updateDocument(filter, update);

// Delete a document
const deleteFilter = { todo: "Updated task" };
deleteDocument(deleteFilter);

// Retrieve documents
getDocuments();
