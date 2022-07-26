const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const circuitRoutes = require('../modules/circuits/circuit.routes');
const driversRoutes = require('../modules/drivers/driver.routes');
const racesRoutes = require('../modules/races/racer.routes');
const teamRoutes = require('../modules/teams/team.routes');

router.use('/users',userRoutes);
router.use('/circuits',circuitRoutes);
router.use('/drivers',driversRoutes);
router.use('/races',racesRoutes);
router.use('/teams',teamRoutes);

module.exports = router;