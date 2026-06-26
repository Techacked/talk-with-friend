const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("Error: MONGO_URI is not set in environment variables.".red.bold);
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Mongo connection failed: ${error.message}`.red.bold);

    // Helpful hint specifically for Atlas SRV DNS failures
    if (typeof error.message === "string" && error.message.includes("querySrv ENOTFOUND")) {
      console.error(
        "Atlas SRV lookup failed (querySrv ENOTFOUND). Verify MONGO_URI hostname/subdomain (cluster*.mongodb.net) and ensure you are using mongodb+srv://"
          .yellow.bold
      );
    }

    process.exit(1);
  }
};

module.exports = connectDB;

