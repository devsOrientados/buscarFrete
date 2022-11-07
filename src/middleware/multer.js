/** configurando o multer para receber as imagens */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,__dirname+'../../../public/images/profile');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
})
const uploadFile = multer ({storage:storage});

module.exports = uploadFile;