
const db = require('../config/db');


//Model for user 
const userModel = {

    getUserData: (username) => {
        return db('users').select('*').where({ ND_HoTen: username }).first();
    },

    getUsername: (username) => {
        return db('users').where({ ND_HoTen: username }).first();
    },

    getEmail: (email) => {
        return db('users').where({ ND_Email: username }).first();
    },

    getPassword: (username) => {
        return db('NGUOI_DUNG')
            .select('ND_MatKhau')
            .where({ ND_HoTen: username })
            .first()
            .then(result => result.ND_MatKhau);
    },
    
    signup: (username, password, email, date) => {
        return db('users').insert({
            ND_HoTen: username,
            ND_MatKhau: password,
            ND_Email: email,
            ND_NgayTao: date
        })
    },

    signin: (username, password) => {
        return db('users')
       .where({ ND_HoTen: username })
    }
}

module.exports = userModel;
