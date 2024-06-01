const express = require('express');
const { getByType, isTypeValid } = require('./controllers');

const router = express.Router();

/**
 * @swagger
 * /api/getByType:
 *   get:
 *     summary: Get items by type
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Type of the item
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 */
router.get('/api/getByType', getByType);

/**
 * @swagger
 * /api/isTypeValid:
 *   get:
 *     summary: Check if a type is valid
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Type to check
 *     responses:
 *       200:
 *         description: Validity of the type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isValid:
 *                   type: boolean
 */
router.get('/api/isTypeValid', isTypeValid);

module.exports = router;
