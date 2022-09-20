import {Router} from 'express';
const router = Router();
import {getEmployees,createEmployees,updateEmployees, deleteEmployees} from '../controllers/employees.controllers.js'

router.get('/employees', getEmployees);
router.post('/employees', createEmployees);
router.put('/employees', updateEmployees)
router.delete('/employees',deleteEmployees)

export default router;