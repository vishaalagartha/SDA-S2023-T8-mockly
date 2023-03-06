import mongoose from 'mongoose'

export const connect = async (
  url = `mongodb://root:example@mongo:27017/`,
  name = 'mockly'
) => {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: name,
    authSource: 'admin',
  })

  await mongoose.connection.on('error', (err) => {
    console.error(err)
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running.'
    )
    process.exit()
  })

  await mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
  })
}

export const close = async () => {
  mongoose.connection.close()
}
