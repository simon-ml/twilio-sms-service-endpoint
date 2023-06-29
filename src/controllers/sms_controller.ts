import { Twilio } from "twilio";

async function send_sms({
  sms_to,
  sms_from,
  sms_body,
  account_sid,
  auth_user,
  auth_token,
  messaging_service_sid,
}: {
  sms_to: string;
  sms_from: string;
  sms_body: string;
  account_sid: string;
  auth_user: string;
  auth_token: string;
  messaging_service_sid: string;
}): Promise<boolean> {
  if (!account_sid || !auth_token || !auth_user || !sms_to) {
    console.log("You are missing one of the variables you need to send a sms.");
    return false;
  }
  if (!sms_from && !messaging_service_sid) {
    console.log(
      "You need to provide either a 'sms_from' number or a " +
        "'messaging_service_sid' to send a sms."
    );
    return false;
  }
  const client = new Twilio(auth_user, auth_token, {
    accountSid: account_sid,
  });

  let message: any = {
    to: sms_to,
    body: sms_body,
    from: messaging_service_sid,
  };

  await client.messages
    .create(message)
    .then((message) => console.log(message.sid));

  return true;
}

export default { send_sms };
