const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
const cors = require("cors");
app.use(cors());

const { JWT_SECRET, MONGO_URL } = require("./config");

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

require("./models/UserCredentials");
const User = mongoose.model("credentials");

app.post("/createuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      password: hashedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  const userCredential = await User.findOne({ email });
  if (!userCredential) {
    return res.json({ error: "User not found" });
  }
  const isPasswordValid = await bcrypt.compare(
    password,
    userCredential.password
  );
  if (isPasswordValid) {
    const token = jwt.sign({ userId: userCredential._id }, JWT_SECRET);
    return res.status(201).json({ status: "ok", token });
  }
  res.status(401).json({ status: "error", error: "Invalid password" });
});

require("./models/CartItems");
const CartItems = mongoose.model("cart");

app.get("/cartitems", function (req, res, next) {
  CartItems.find({})
    .then(function (cartitems) {
      res.status(200).send(cartitems).json("data fetched");
    })
    .catch(next);
});

app.delete("/cartitems/:id", function (req, res, next) {
  CartItems.findOneAndDelete({ _id: req.params.id }).then(function (cartitems) {
    res.send(cartitems);
  });
});

app.post("/additem", async (req, res) => {
  try {
    const { price } = req.body;
    await CartItems.create({
      price,
    });
    res.status(200).json({ status: "ok", message: "Item added in cart" });
  } catch (error) {
    res.status(400).json({ status: "error", error: "Internal error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
