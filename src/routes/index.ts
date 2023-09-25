import { Router } from 'express';
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';
const router = Router(); 

//Home
router.get('/',pageController.home);
router.get('/dogs',pageController.dogs);
router.get('/cats',pageController.cats);
router.get('/fishes',pageController.fishes);

//Search
router.get('/search', searchController.search)

export default router; // Exportando todos router

