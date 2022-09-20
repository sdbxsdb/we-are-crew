const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // console.log("REQ-", req.body);
  // console.log("RES-", res.statusCode);

  const { planId, token, stripeID } = await req.body;

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      console.log("PLAN - ", planId);

      await stripe.checkout.sessions
        .create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: planId,
              quantity: 1,
              // user: user.id
            },
          ],
          mode: "payment",
          success_url: `${req.headers.origin}/paymentSuccess?=true`,
          cancel_url: `${req.headers.origin}/paymentCancelled?=true`,
        })
        .then((response) => {
          console.log("REQ HEADER-", req.headers.origin);
          res.status(200).json({ redirectURL: response.url });
          // res.send("REQ HEADERS ORIGIN-", req.headers.origin);
        });
    } catch (err) {
      console.log("ERROR-", err);
      // res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
