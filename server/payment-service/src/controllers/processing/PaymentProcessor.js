
import { getPaymentMethodByUserId } from '../controllers/PaymentMethodController'
import Match from '../../../../matching-service/models/Match'

class paymentProcessor {
  constructor(payerId, payeeId, matchId) {
    this.payerId = payerId
    this.payeeId = payeeId
    this.matchId = matchId
  }

  async processPayment() {
    const match = await fetchMatch()
    if (!match) {
      return { success: false, message: "match cannot be fetched" }
    }

    const payer = await fetchPaymentMethod(payerId)
    if (!payer || payer.error) {
      return { success: false, message: "payer account cannot be fetched" }
    }

    const payee = await fetchPaymentMethod(payeeId)
    if (!payee || payee.error) {
      return { success: false, message: "payee account cannot be fetched" }
    }
    
    if (match.isPaid || match.fee == 0) {
      return { success: false, message: "match does not require payment" }
    }
    else {
      const result = request(payer, payee, match.fee)
      const processedResult = processResult(result)
      return processedResult
    }
  }

  async fetchMatch(matchId) {
    // TODO: how to fetch info from another service?
    const match = await Match.findById(matchId)
    return match
  }

  async fetchPaymentMethod(userId) {
    const user = await getPaymentMethodByUserId(userId)
    return user
  }

  async request(payer, payee, amount) {
    console.log('Mock API request made.')
    console.log(payer, payee, amount)
    const time = Date.now()
    return { success: true, payer, payee, amount, time }
  }
  
  processResult(result) {
    return result
  }

}