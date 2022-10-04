import initStripe from "stripe";
import { getServiceSupabase } from '../../utils/supabaseClient';


const handler = async (req, res) => {


  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send('You are not authorized to call the API');
  }

  const supabase = getServiceSupabase();
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const test = await req.body 
  console.log("REQ BODY-", test);

  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });



  // console.log("REQ BODY-", customer);
  // console.log("REQUEST BODY RECORD-", req.body.record);
  // console.log("CUST ID-", customer.id);
  // console.log("RECORD ID-", req.body.record.id);


  await supabase
    .from("profiles")
    .update({
      stripe_customer: customer.id,
    })
    .eq("id", req.body.record.id);

  res.send({ message: `stripe customer creaded: ${customer.id}` });
};

export default handler;
