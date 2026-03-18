const ImageController = (req, res, next,file) => {
  console.log("Image API hit successfully");
console.log("file coming from frontend",file)

  res.status(200).json({
    message: "API working"
  });
};

module.exports = ImageController;