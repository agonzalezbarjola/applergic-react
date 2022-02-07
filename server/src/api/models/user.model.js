const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
/* const { validationPassword } = require('../../utils/validators/validations') */
const { setError } = require("../../utils/error/error");

const userSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    phone: { type: String, trim: true, required: true, unique },
    password: { type: String, trim: true, required: true },
    emergencyContact: {
      name: { type: String, default: "" },
      phone: { type: Number, default: "" },
      email: { type: String, default: "" },
      insurance: {
        company: { type: String, default: "" },
        noPolicy: { type: String, default: "" },
      },

    allergens: [{ type: mongoose.Types.ObjectId, ref: "Allergens" }],
    },
    fav: [{ type: mongoose.Types.ObjectId, ref: "Products" }],
    diaryList: [{
        product:  { type: mongoose.Types.ObjectId, ref: "Products" },
        date: { type: String, default: Date.now },
        notes: { type: String, default: "" }
      }],
  },
  { timestamps: true }
);

/* userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(setError(400, "La contraseña no tiene los minimos requeridos"));
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
}); */

const User = mongoose.model("users", userSchema);
module.exports = User;
