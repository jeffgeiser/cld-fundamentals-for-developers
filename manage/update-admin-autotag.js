require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.update("abby", {
    tags: "track",
    categorization: "google_tagging",
    auto_tagging: 0.5
  })
  .then(updateResult => console.log(updateResult))
  .catch(error => console.error(error));
