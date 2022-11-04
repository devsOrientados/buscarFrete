/** configurando o multer para receber as imagens */
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'buscarFrete/public/images/profile');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname+Date.now())
    }
})
const uploadFile = multer ({storage:storage});

module.exports = uploadFile;