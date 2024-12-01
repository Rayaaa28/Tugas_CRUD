let data = [];

exports.CreateData = (req, res) => {
    const{nama, nrp ,jurusan} = req.body;

    const NewData = {nama , nrp: Number(nrp), jurusan};
    data.push(NewData);

    res.status(201).send("Data berhasil ditambahkan");

}

exports.GetItems = (req ,res) =>{
    res.json(data);
    
}

exports.UpdateData = (req,res) => {
    const { id } =req.params;
    const UpdateData = req.body;
    data[id]=UpdateData;
    res.send('Data telah dirubah!');
}

exports.DeleteData = (req,res) => {
    const {id} = req.params;
    data.splice (id,1);
    res.send('Data telah dihapus!')

}