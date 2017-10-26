// Importing Passport, strategies, and config
const passport = require('passport'),  
User = require('../models/user'),
config = require('./main'),
JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt,
LocalStrategy = require('passport-local');