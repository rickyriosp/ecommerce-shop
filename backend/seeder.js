import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import colors from 'colors';
import connectDB from './config/db.js';
import dontenv from 'dotenv';
import mongoose from 'mongoose';
import products from './data/products.js';
import users from './data/users.js';

dontenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((prod) => {
      return { ...prod, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

// Uncomment to use the script
// Warning: Will replace the current DB
// if (process.argv[2] === '-d') {
//   destroyData();
// } else {
//   importData();
// }
