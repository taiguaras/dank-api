const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StrainSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

StrainSchema.plugin(mongoosePaginate);

mongoose.model('Strain', StrainSchema);