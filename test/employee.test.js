const request = require('supertest');
const express = require('express');
const express = require('mongoose');

const app = express();

describe('Test of Employee Router' , () => {
    beforeAll((done) => {
        mongoose.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then ((db) => {
            console.log('Connection ...');
            done();
        }).catch((err) => {
            console.error(err);
            process.exit(1);
        })
    })

    afterAll(() => {
        mongoose.disconnect().then (() => {
            console.log('Disconnecting...');
            done();
        });

    })


})

