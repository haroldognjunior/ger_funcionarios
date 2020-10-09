const { Router } = require("express");
const router = Router();
const passport = require("passport");
const session = require("express-session");

// import all routers;
const authPath = require("./auth.js");
const usersPath = require("./users.js");
const employeesPath = require("./employees.js");
const seedPath = require('./seed.js');



router.use("/auth", authPath);
router.use("/users", usersPath);
router.use("/employees", employeesPath);
router.use("/seed", seedPath);





module.exports = router;