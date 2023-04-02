/**
 * middleware to verify the userID in query param matches with the decoded jwt token userID
 * PUT /users/:userId/personal-identity
 * PUT /users/:userId/interviewer-details
 * ...
 * we want to check that this userId matches with the one in the decoded jwt token
 */

import { validate } from '../utils/token'

/** This middleware function extracts the authentication token from the request header,
 * and sets the user ID in the request body.
 */
export const verifyUserIdParam = async (req, res, next) => {
  // Extract the authentication token from the request header.
  const authHeader = req.header('authorization')

  // Extract the token value from the header.
  const token = authHeader.split(' ')[1]

  // Validate the token to get the decoded payload, which includes the user ID.
  const decodedToken = validate(token)
  // If the userId in query params matches with the user Id in decoded token then continue the chain
  if (decodedToken.uid === req.params.userId) {
    return next()
  }
}
