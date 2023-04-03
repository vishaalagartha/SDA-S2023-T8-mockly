import PaymentProcessor from "./PaymentProcessor"

class PaypalProcessor extends PaymentProcessor {
  async request(payer, payee, amount) {
    const time = Date.now()
    // TODO: interact with paypal
    return { success: true, payer, payee, amount, time }
  }
  
  processResult(result) {
    // TODO: process paypal result
    return result
  }

} 