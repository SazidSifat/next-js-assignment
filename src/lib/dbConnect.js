import { MongoClient, ServerApiVersion } from "mongodb";

export const dbConnect = (dbCollection) => {
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db("myShop").collection(dbCollection);
};
