import initStripe from 'stripe';

const handler = async (req, res) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
  const signature = req.headers['stripe-signature'];
  const signingSecret = process.env.STRIPE_SIGNING_SECRET;

  let event

  try{
   event = stripe.webhooks.constructEvent(req, signature, signingSecret)
  } catch(error){
    console.log(error);
    return res.status(400).send(`Webhook Error: ${error.message}`)
  }
  console.log("EVENT RECIVED-", event);

  res.send({recieved: true});

}

export default handler