const express = require('express');
const orm = require('./config/orm');

orm.selectAll();
orm.insertOne('byPass');
orm.updateOne(2);