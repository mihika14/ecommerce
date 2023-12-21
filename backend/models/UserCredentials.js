const mongoose =  require('mongoose')

const UserCredentialSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true}
    },

  {  
    collection: "credentials" 
}
);

module.exports = mongoose.model('credentials' , UserCredentialSchema)