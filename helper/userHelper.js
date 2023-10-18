const bcrypt = require('bcrypt');




exports.hashPassword = async(password)=>{
    try {
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password,saltRound);
        return hashPassword;
    } catch (error) {
        console.log(error)
        
    }
}


exports.comparePassword  = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}


































