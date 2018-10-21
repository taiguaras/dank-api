const mongoose = require ('mongoose');

const Strain = mongoose.model("Strain");


module.exports = {
    async index(req, res){
        const {page=1} = req.query;
        const strains = await Strain.paginate({}, {page, limit: 5} );

        return res.json(strains);
    },

    async show(req, res){
        const strain = await Strain.findById(req.params.id);

        return res.json(strain);
    },

    async store(req, res){
        const strain = await Strain.create(req.body);

        return res.json(strain);
    },

    async update(req, res){
        const strain = await Strain.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(strain);
    },

    async destroy(req, res){
        await Strain.findByIdAndRemove(req.params.id);
        
        return res.send();
    },
    

    
}; 