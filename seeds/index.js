const express = require('express');
const Hotel = require('../models/hotel');
const mongoose = require('mongoose');
const hotels = require('./hotels');
mongoose.connect('mongodb://127.0.0.1:27017/refratherm');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("Database connected");
});

hotels.map(async (hotelData) => {
    const hotel = new Hotel(hotelData);
    await hotel.save();
})
