import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'


dotenv.config()
connectDB()

const importData = async() => {
    try {
        // Clean the database before importing
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // insert the users into the database, and have them as an array
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        // make the adminUser, the user of all products
        const sampleProducts = products.map(product => {
                return {
                    ...product,
                    user: adminUser
                }
            })
            // insert the sampleProducts to db
        await Product.insertMany(sampleProducts)

        console.log('Data imported successfully.'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed.'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse)
        process.exit(1)
    }
}

// Have node backend/seeder import data by default and destroy data only if -d is passed.
if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}