/** configurando o multer para receber as imagens */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'../public/images/profile');
    },
    filename: function (req, file, cb) {
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})
const uploadFile = multer ({storage});

module.exports = uploadFile;
