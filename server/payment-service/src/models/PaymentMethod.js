
import mongoose, { Schema } from 'mongoose'

const PaymentMethodSchema = new Schema({
  // uuid of person
  person: {
    required: true,
    type: String
  },
  // TODO: payment methods
})

export default mongoose.model('PaymentMethods', PaymentMethodSchema)
