const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const ongCotroller = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router()

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), sessionController.create)

routes.get('/ongs', ongCotroller.index)

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), ongCotroller.create)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), profileController.index)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incidentController.index)

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  })
}), incidentController.create)

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), incidentController.delete)

// ESPECIFIC
routes.get('/ongs/:id', ongCotroller.email)

routes.get('/starter', (request, response) => {
  return response.json([
    {
      id: 1,
      image: "html+css",
      title: "HTML5+CSS3",
      brightness: .7
    },

    {
      id: 2,
      image: "JS",
      title: "JavaScript",
      brightness: .4
    },
  ])
})

routes.get('/advanced', (request, response) => {
  return response.json([
    {
      id: 3,
      image: "Echma",
      title: "EchmaScript6",
      brightness: .4
    },

    {
      id: 4,
      image: "NJS",
      title: "NodeJS",
      brightness: .4
    },

    {
      id: 5,
      image: "RJS",
      title: "ReactJS",
      brightness: .4
    },

    {
      id: 6,
      image: "RJS",
      title: "ReactNative",
      brightness: .4
    }
  ])
})

module.exports = routes
