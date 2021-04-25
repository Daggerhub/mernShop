import bcrypt from 'bcryptjs'

const users = [

    {
        name : 'admin user',
        email : 'admin@example.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin : true,
    },

    { 
        name : 'john doe',
        email : 'john@example.com',
        password: bcrypt.hashSync('12345',10)
    }

]

export default users