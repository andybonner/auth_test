module.exports = {  
// Secret key for JWT signing and encryption
'secret': 'code monkey',
// Database connection information
'database': process.env.MONGODB_URI || "mongodb://localhost/auth_test",
// Setting port for server
'port': process.env.PORT || 3000
}