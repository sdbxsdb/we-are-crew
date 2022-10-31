import Cookies from 'cookies'

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function Handler(req, res) {
  
  const cookies = new Cookies(req, res)

   // Get a cookie
  const stripe_customer_from_cookie =  cookies.get('stripe_customer')
  // console.log("TEST-", stripe_customer_from_cookie);


  const { planId, token, stripeID } = await req.body;

  if (req.method === "POST") {
    
    try {
      // Create Checkout Sessions from body params.
      // console.log("PLAN - ", planId);

      await stripe.checkout.sessions
        .create({
          customer: stripe_customer_from_cookie,
          line_items: [
            {
              price: planId,
              quantity: 1,
            },
          ],
          mode: "payment",
          allow_promotion_codes: true,
          success_url: `${process.env.CLIENT_URL}/paymentSuccess?=true`,
          cancel_url: `${process.env.CLIENT_URL}/paymentCancelled?=true`,
        })
        .then((response) => {
          // console.log("REQ HEADER-", req.headers.origin);
          res.status(200).json({ redirectURL: response.url });
          // res.send("REQ HEADERS ORIGIN-", req.headers.origin);
        });
    } catch (err) {
      // console.log("ERROR-", err);
      // res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
