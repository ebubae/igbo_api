import express from 'express';
import {
  getWords,
  getWord,
  putWord,
  postWord,
} from '../controllers/words';
import {
  getExamples,
  getExample,
  putExample,
  postExample,
} from '../controllers/examples';

const router = express.Router();

/**
 * @swagger
 * /words:
 *   get:
 *     description: Get words in dictionary
 *     tags:
 *      - production
 *     parameters:
 *      - name: keyword
 *        description: keyword for querying words
 *        in: query
 *        required: false
 *        type: string
 *      - name: page
 *        description: page for results
 *        in: query
 *        required: false
 *        type: integer
 *      - name: range
 *        description: page for results using [x,y] syntax
 *        in: query
 *        required: false
 *        type: string
 *     responses:
 *      200:
 *         description: OK
 *
 *   post:
 *     description: Creates a new Word document
 *     tags:
 *      - development
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: The word that will be created in the database
 *         schema:
 *           type: object
 *           properties:
 *             word:
 *               type: string
 *             wordClass:
 *               type: string
 *             definitions:
 *               type: array
 *               items:
 *                 type: string
 *             variations:
 *               type: array
 *               items:
 *                 type: string
 *     responses:
 *      200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                type: string
 *
 * /words/{wordId}:
 *   get:
 *     description: Returns a single Word object from the database
 *     tags:
 *      - production
 *     consumes:
 *       - application/json
 *     parameters:
 *        - in: path
 *          name: wordId
 *          required: true
 *          schema:
 *            type: string
 *          description: the word id
 *     responses:
 *      200:
 *         description: OK
 *
 * /examples:
 *   get:
 *     description: Get examples in dictionary
  *     tags:
 *      - production
 *     parameters:
 *      - name: keyword
 *        description: keyword for querying examples
 *        in: query
 *        required: false
 *        type: string
 *      - name: page
 *        description: page for results
 *        in: query
 *        required: false
 *        type: integer
 *      - name: range
 *        description: page for results using [x,y] syntax
 *        in: query
 *        required: false
 *        type: string
 *     responses:
 *      200:
 *         description: OK
 *
 *   post:
 *     description: Creates a new Example document
 *     tags:
 *      - development
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: The example that will be created in the database
 *         schema:
 *           type: object
 *           properties:
 *             igbo:
 *               type: string
 *             english:
 *               type: string
 *             associatedWords:
 *               type: array
 *               items:
 *                 type: string
 *
 * /examples/{exampleId}:
 *   get:
 *     description: Returns a single Example object from the database
 *     tags:
 *      - production
 *     consumes:
 *       - application/json
 *     parameters:
 *        - in: path
 *          name: exampleId
 *          required: true
 *          schema:
 *            type: string
 *          description: the example id
 *     responses:
 *      200:
 *         description: OK
 */
router.get('/words', getWords);
router.get('/words/:id', getWord);
router.get('/examples', getExamples);
router.get('/examples/:id', getExample);

if (process.env.NODE_ENV !== 'production') {
  router.post('/words', postWord);
  router.put('/words/:id', putWord);
  router.post('/examples', postExample);
  router.put('/examples/:id', putExample);
}

export default router;
