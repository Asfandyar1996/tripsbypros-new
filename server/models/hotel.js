import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const hotelSchema = new Schema(
  {
    title: {
      type: String,
      required: "Title is Required",
    },
    content: {
      type: String,
      required: "Content is Required",
      maxlength: 10000,
    },
    location: {
      type: String,
    },
    price: {
      type: Number,
      required: "Price is Required",
      trim: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "TravelAgency",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
    bed: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    itinerary: {
      type: String,
    },
    // ratings: {
    //   type: Number,
    //   default: 0,
    // },
    // category: {
    //   type: String,
    //   required: "Category is required",
    //   enum: {
    //     values: ["Public", "Private"],
    //   },
    // },
    // numOfReviews: {
    //   type: Number,
    //   default: 0,
    // },
    // reviews: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     rating: {
    //       type: Number,
    //       required: true,
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    createdAt: {
      type: Date,
      dafault: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
