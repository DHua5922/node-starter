import mongoose from "mongoose";

export const connectToMongoDB = (uri: string) => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
    } as any);
    console.log("Mongo DB Connected . . .");
  } catch (err) {
    console.error(err);
  }
};
