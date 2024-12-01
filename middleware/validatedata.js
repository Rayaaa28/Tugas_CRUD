module.exports = (req, res, next) => {
    const { nama, nrp, jurusan } = req.body;

    if (!nama || !nrp || !jurusan) {
        return res.status(400).send({ error: "Semua data harus diisi!" });
        error.status = 400; // Bad Request
        return next(error);
    }

    if (typeof nrp !== 'number') {
        const error = new Error("NRP harus berupa angka!");
        error.status = 400; // Bad Request
        return next(error);
    }
    next();
}