// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const model = require("../model/product");
//const products = data.products;
const Product = model.Product;

// Using async/await
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const result = await product.save();
    res
      .status(201)
      .json({ message: "Product created successfully", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({ message: "find sucessfully", data: products });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Product.findById(id);
    res.status(200).json({
      sucess: true,
      message: "sucessfull",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      sucess: true,
      message: "sucessfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "failed to delete",
    });
  }
};
