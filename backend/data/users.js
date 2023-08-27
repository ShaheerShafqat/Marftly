import bcrypt from 'bcryptjs'
const Users = [
    {
        name: 'Muhammad Saad',
        email: 'saadimalik008@gmail.com',
        password: bcrypt.hashSync('saadi7xddd', 12),
        isAdmin: true
    },
    {
        name: 'Shaheer Shafqat',
        email: 'shaheershafqat67@gmail.com',
        password: bcrypt.hashSync('shaheer67', 12),
        isAdmin: true
    },
    {
        name: 'Asad Shah',
        email: 'asadshah786@gmail.com',
        password: bcrypt.hashSync('asad786', 12),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'JohnDoe2@gmail.com',
        password: bcrypt.hashSync('doe6969', 12),
        isAdmin: false
    }

]
export default Users