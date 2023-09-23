import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';
const router = Router(); 

router.get('/',(req, res)=>{
    res.send('home');
});

export default router; // Exportando todos router

