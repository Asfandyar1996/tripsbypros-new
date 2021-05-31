import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const answerQuerySchema = new Schema(
  {
    cost: {
      type: Number,
      required: "Cost is required",
    },
    proposedItinerary: {
      type: String,
      required: "Proposed itinerary is required",
    },
    message: {
      type: String,
      required: "Message is required",
    },
    postedBy: {
      type: ObjectId,
      ref: "TravelAgency",
    },
    queryId: {
      type: ObjectId,
      ref: "Query",
    },
    companyName: {
      type: String,
    },
    queryOwner: {
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

export default mongoose.model("AnswerQuery", answerQuerySchema);
