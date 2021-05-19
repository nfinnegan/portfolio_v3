//create routers for the app routes
const router = require("express").Router();
//const apiRoutes = require('./api');
const homeRoutes = require("../controllers/homeroutes");

//router.use('/api', apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
