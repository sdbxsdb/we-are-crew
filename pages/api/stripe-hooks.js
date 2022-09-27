import initStripe from "stripe";
import { buffer } from "micro";
import { getServiceSupabase } from "../../utils/supabaseClient";

export const config = { api: { bodyParser: false } };

const handler = async (req, res) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
  const signature = req.headers["stripe-signature"];
  const signingSecret = process.env.STRIPE_SIGNING_SECRET;
  const reqBuffer = await buffer(req);

  const supabase = getServiceSupabase();

  let event;

  try {
    event = stripe.webhooks.constructEvent(reqBuffer, signature, signingSecret);
  } catch (error) {
    console.log("ERROR-", error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  let intent = null;


  switch (event.type) {
    case "payment_intent.succeeded":
      await supabase
        .from("profiles")
        .update({
          paid: true,
        })
        .eq("stripe_customer", event.data.object.customer);
  }
  

  console.log("EVENT RECIVED-", event);

  res.send({
    recieved: true,
  });
};

export default handler;
