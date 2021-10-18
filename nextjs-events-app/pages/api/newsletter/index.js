import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address received",
      });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb://myadmin:myadmin@localhost:27017/newsletter?authSource=admin"
    );
    if (client) {
      console.log("Successfully connected to mongodb!");
      const db = client.db();
      const response = await db.collection("emails").insertOne({
        email,
      });
      console.log(response);
      client.close();
    }

    console.log("Sign up email received ", email);
    res.status(201).json({
      message: "SUCCESS",
    });
  } else {
    res.status(400).json({
      message: "Unsupported HTTP Method",
    });
  }
}

export default handler;
