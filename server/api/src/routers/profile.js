import { Router } from 'express'
import fetch from 'node-fetch'
import { validate } from '../utils/token'

const router = Router()
const BASE_URL = 'http://mockly-profile-service:3005/users'
const HEADERS = {
  'Content-Type': 'application/json',
}

// GET /users
// Get user by ID
router.get('/', async (request, response) => {
  try {
    const authHeader = request.header('authorization')
    const token = authHeader.split(' ')[1]
    const decodedToken = validate(token)
    const resp = await fetch(`${BASE_URL}/${decodedToken.uid}`, {
      headers: HEADERS,
    })
    const user = await resp.json()
    response.json(user)
  } catch (e) {
    response.status(500).send('Internal Server Error')
  }
})

// PUT /users/personal-identity
// Update personal identity fields for a user
router.put('/personal-identity', async (request, response) => {
  const authHeader = request.header('authorization')
  const token = authHeader.split(' ')[1]
  const decodedToken = validate(token)
  try {
    const { body } = request
    body.userId = decodedToken.uid
    const resp = await fetch(`${BASE_URL}/personal-identity`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: HEADERS,
    })
    const updatedUser = await resp.json()
    response.status(resp.status).json(updatedUser)
  } catch (e) {
    response.status(500).send('Internal Server Error')
  }
})

// PUT /users/personal-information/:id
// Update personal information fields for a user
router.put('/personal-information', async (request, response) => {
  try {
    const { body } = request
    const resp = await fetch(`${BASE_URL}/personal-information`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: HEADERS,
    })
    const updatedUser = await resp.json()
    response.json(updatedUser)
  } catch (e) {
    response.status(500).send('Internal Server Error')
  }
})

// POST /users/education
// Create a new education entry for a user
router.post('/education', async (request, response) => {
  try {
    const { body } = request
    const resp = await fetch(`${BASE_URL}/education`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: HEADERS,
    })
    const newEducation = await resp.json()
    response.json(newEducation)
  } catch (e) {
    response.status(500).send('Internal Server Error')
  }
})

// PUT /users/education
// Update an existing education entry for a user
router.put('/education', async (request, response) => {
  try {
    const { body } = request
    const resp = await fetch(`${BASE_URL}/education`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: HEADERS,
    })
    const updatedEducation = await resp.json()
    response.json(updatedEducation)
  } catch (e) {
    response.status(500).send('Internal Server Error')
  }
})

// DELETE /users/education
// Delete an existing education entry for a user
router.delete('/education', async (request, response) => {
  try {
    const { body } = request
    const resp = await fetch(`${BASE_URL}/education`, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: HEADERS,
    })
    response.sendStatus(resp.status)
  } catch (e) {
    response.status(500).send('Internal Server Error')
  }
})

// POST /users/skills
// Create a new skill for a user
router.post('/skills', async (req, res) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const resp = await fetch(`${baseUrl}/skills`, options)
    const skill = await resp.json()
    res.json(skill)
  } catch (e) {
    res.status(500)
  }
})

// DELETE /users/skills
// Delete a skill for a user
router.delete('/skills', async (req, res) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const resp = await fetch(`${baseUrl}/skills`, options)
    if (resp.ok) {
      res.status(204).send()
    } else {
      res.status(resp.status)
    }
  } catch (e) {
    res.status(500)
  }
})

// POST /users/courses
// Create a new course entry for a user
router.post('/courses', async (req, res) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const resp = await fetch(`${baseUrl}/courses`, options)
    const course = await resp.json()
    res.json(course)
  } catch (e) {
    res.status(500)
  }
})

// DELETE /users/courses/:id
// Delete an existing course entry for a user
router.delete('/courses/:id', async (req, res) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const resp = await fetch(`${baseUrl}/courses/${req.params.id}`, options)
    if (resp.ok) {
      res.status(204).send()
    } else {
      res.status(resp.status)
    }
  } catch (e) {
    res.status(500)
  }
})

// POST /users/projects
// Create a new project entry for a user
router.post('/projects', async (req, res) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const resp = await fetch(`${baseUrl}/projects`, options)
    const project = await resp.json()
    res.json(project)
  } catch (e) {
    res.status(500)
  }
})

// PUT /users/projects
// Update an existing project entry for a user
router.put('/projects', async (req, res) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const resp = await fetch(`${baseUrl}/projects`, options)
    const project = await resp.json()
    res.json(project)
  } catch (e) {
    res.status(500)
  }
})

// DELETE /users/projects
// Delete an existing project entry for a user
router.delete('/projects', async (request, response) => {
  const { body } = request
  const options = { method: 'DELETE', body: JSON.stringify(body), headers }
  try {
    const resp = await fetch(`${baseUrl}/projects`, options)
    const project = await resp.json()
    response.json(project)
  } catch (e) {
    response.status(500)
  }
})

// POST /users/experiences
// Create a new experience entry for a user
router.post('/experiences', async (request, response) => {
  const { body } = request
  const options = { method: 'POST', body: JSON.stringify(body), headers }
  try {
    const resp = await fetch(`${baseUrl}/experiences`, options)
    const experience = await resp.json()
    response.json(experience)
  } catch (e) {
    response.status(500)
  }
})

// PUT /users/experiences
// Update an existing experience entry for a user
router.put('/experiences', async (request, response) => {
  const { body } = request
  const options = { method: 'PUT', body: JSON.stringify(body), headers }
  try {
    const resp = await fetch(`${baseUrl}/experiences`, options)
    const experience = await resp.json()
    response.json(experience)
  } catch (e) {
    response.status(500)
  }
})

// DELETE /users/experiences
// Delete an existing experience entry for a user
router.delete('/experiences', async (request, response) => {
  const { body } = request
  const options = { method: 'DELETE', body: JSON.stringify(body), headers }
  try {
    const resp = await fetch(`${baseUrl}/experiences`, options)
    const experience = await resp.json()
    response.json(experience)
  } catch (e) {
    response.status(500)
  }
})

// PUT /users/summary
// Update the summary field for a user
router.put('/summary', async (request, response) => {
  const { body } = request
  const options = { method: 'PUT', body: JSON.stringify(body), headers }
  try {
    const resp = await fetch(`${baseUrl}/summary`, options)
    const user = await resp.json()
    response.json(user)
  } catch (e) {
    response.status(500)
  }
})

// GET /users/interviewer
// Retrieves a list of interviewers and their associated skills
// Returns an array of objects, each containing the interviewer's name and their skills
router.get('/interviewer', async (req, res) => {
  const baseUrl = `${baseUrl}interviewer`
  const options = { method: 'GET', headers }
  try {
    const resp = await fetch(baseUrl, options)
    const data = await resp.json()
    res.json(data)
  } catch (e) {
    res.status(500)
  }
})

export default router
