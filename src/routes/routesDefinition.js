/**
   * @swagger
   * /user/name/{userName}:
   *   get:
   *     tags:
   *      - "User"
   *     summary: "Get user by name"
   *     security:
   *      - Secret: []
   *      - Email: []
   *     produces:
   *       - object
   *     description: Retrieves user by name
   *     parameters:
   *      - name: userName
   *        in: path
   *        required: true
   *        type: string
   *     responses:
   *       200:
   *         description: Correct user Sent
   *       401:
   *         description: Invalid Secret
   *       404:
   *         description: User not found
   */

/**
   * @swagger
   * /user/id/{userId}:
   *   get:
   *     tags:
   *      - "User"
   *     summary: "Get user by id"
   *     security:
   *      - Secret: []
   *      - Email: []
   *     produces:
   *       - object
   *     description: Retrieves user by id
   *     parameters:
   *      - name: userId
   *        in: path
   *        required: true
   *        type: string
   *     responses:
   *       200:
   *         description: Correct user Sent
   *       401:
   *         description: Invalid Secret
   *       404:
   *         description: User not found
   */
  
/**
   * @swagger
   * /policy/policyId/{policyId}:
   *   get:
   *     tags:
   *      - "Policy"
   *     summary: "Get policy by id"
   *     security:
   *      - Secret: []
   *      - Email: []
   *     produces:
   *       - object
   *     description: Retrieves policy by id
   *     parameters:
   *      - name: policyId
   *        in: path
   *        required: true
   *        type: string
   *     responses:
   *       200:
   *         description: Correct policy Sent
   *       401:
   *         description: Invalid Secret
   *       404:
   *         description: Policy not found
   */

/**
   * @swagger
   * /policy/name/{userName}:
   *   get:
   *     tags:
   *      - "Policy"
   *     summary: "Get policy by client name"
   *     security:
   *      - Secret: []
   *      - Email: []
   *     produces:
   *       - object
   *     description: Retrieves policy by id
   *     parameters:
   *      - name: userName
   *        in: path
   *        required: true
   *        type: string
   *     responses:
   *       200:
   *         description: Correct policy Sent
   *       401:
   *         description: Invalid Secret
   *       404:
   *         description: Policy not found
   */

/**
   * @swagger
   * /history:
   *   get:
   *     tags:
   *      - "History"
   *     summary: "Get request history"
   *     security:
   *      - Secret: []
   *      - Email: []
   *     produces:
   *       - object
   *     description: Retrieves request history
   *     responses:
   *       200:
   *         description: Correct history Sent
   *       401:
   *         description: Invalid Secret
   *       404:
   *         description: History not found
   */
  

