import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const travelAgencySchema = new Schema(
  {
    companyName: {
      type: String,
      trim: true,
      required: "Company name is required",
    },
    streetAddress: {
      type: String,
      trim: true,
      required: "Street address is required",
    },
    city: {
      type: String,
      trim: true,
      required: "City is required",
    },
    province: {
      type: String,
      trim: true,
      required: "Province is required",
    },
    postalCode: {
      type: Number,
      required: "Postal code is required",
    },
    introduction: {
      type: String,
      required: "Introduction is required",
    },
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },

    // firstName: {
    //   type: String,
    //   trim: true,
    //   required: "First name is required",
    // },
    // lastName: {
    //   type: String,
    //   trim: true,
    //   required: "Last name is required",
    // },

    email: {
      type: String,
      trim: true,
      required: "Email is required",
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
      required: "Phone number is required",
    },
    password: {
      type: String,
      trim: true,
      min: 6,
      max: 64,
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

travelAgencySchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log("BCRYPT HASH ERROR ", err);
        return next(error);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

travelAgencySchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("COMPARE PASSWORD ERROR", err);
      return next(err, false);
    }
    console.log("MATCH PASSWORD", match);
    return next(null, match);
  });
};

export default mongoose.model("TravelAgency", travelAgencySchema);
