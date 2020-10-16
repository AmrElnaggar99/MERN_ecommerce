import bcrypt from 'bcryptjs'


const users = [{
        name: 'AdminUser',
        email: 'admin@mernshop.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Due',
        email: 'john@mernshop.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@mernshop.com',
        password: bcrypt.hashSync('123456', 10),
    }
]


export default users