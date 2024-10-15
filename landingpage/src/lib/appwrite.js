import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fccdc1002957bf24e7");

export const account = new Account(client);
export const databases = new Databases(client);
