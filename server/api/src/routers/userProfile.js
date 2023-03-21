import { Router } from 'express'

export default Router().get('/', async (req, res) => {
  const usersData = [
    {
      interviewer: 'peer',
      fields: ['DATA_STRUCTURES_ALGORITHMS', 'BACKEND'],
      time: [1648167213000, 1648167245000],
    },
    {
      interviewer: 'expert',
      fields: ['SYSTEM_DESIGN', 'BACKEND', 'FRONTEND'],
      time: [1648170011000, 1648170032000],
    },
    {
      interviewer: 'peer',
      fields: ['BEHAVIORAL', 'FRONTEND'],
      time: [1648172808000, 1648172830000],
    },
    {
      interviewer: 'peer',
      fields: ['DATA_SCIENCE', 'FRONTEND'],
      time: [1648175692000, 1648175713000],
    },
    {
      interviewer: 'expert',
      fields: ['DATA_STRUCTURES_ALGORITHMS', 'BACKEND'],
      time: [1648178480000, 1648178501000],
    },
    {
      interviewer: 'peer',
      fields: ['BEHAVIORAL', 'FRONTEND', 'BACKEND'],
      time: [1648181293000, 1648181314000],
    },
    {
      interviewer: 'expert',
      fields: ['SYSTEM_DESIGN', 'BACKEND'],
      time: [1648184085000, 1648184106000],
    },
    {
      interviewer: 'peer',
      fields: ['DATA_SCIENCE', 'FRONTEND'],
      time: [1648186897000, 1648186920000],
    },
    {
      interviewer: 'expert',
      fields: ['DATA_STRUCTURES_ALGORITHMS', 'SYSTEM_DESIGN', 'BACKEND'],
      time: [1648189698000, 1648189719000],
    },
    {
      interviewer: 'peer',
      fields: ['BEHAVIORAL', 'FRONTEND', 'DATA_SCIENCE'],
      time: [1648192510000, 1648192532000],
    },
  ]
  res.json(usersData)
  /**
   * TODO: forward this request to get all users to http://localhost:3005/users
   */
})
