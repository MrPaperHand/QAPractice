const { createUser } = require('../controllers/auth.js');
const User = require('../models/User.js');

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();

    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

test('creates a new user in the database', async () => {
    const email = "testuser@gmail.com";
    const password = "testpassword"

    const newUser = await createUser(email, password);

    const foundUser = await User.findOne({email: newUser.email});

    expect(foundUser).toBeTruthy();
    expect(foundUser.email).toBe(email);
    expect(foundUser.password).toBe(password);

});

// describe('My registration', ()=>{

//     test.todo('Can create new user');
// })