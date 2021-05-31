import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const querySchema = new Schema(
  {
    destination: {
      type: String,
      required: "Destination is required",
    },
    participants: {
      type: String,
      required: "Number of participants is required",
    },
    days: {
      type: Number,
      required: "Number of days is required",
    },
    departure: {
      type: String,
      required: "Departure location is required",
    },
    information: {
      type: String,
      required: "Information is required",
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      dafault: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Query", querySchema);
