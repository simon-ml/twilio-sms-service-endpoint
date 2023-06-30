# twilio-sms-service-endpoint

## Description

This service provides an HTTP endpoint, specifically `/v1/sms` that accepts `POST` requests. It is designed to facilitate the sending of SMS messages through the Twilio platform. To utilize this service, clients are required to include a field named `input` in the request body, which contains a structured set of data.

## Data structure

The `input` data structure must adhere to the following format:

```[json]
{
    "input": {
        "sms_to" : "+49123123123",
        "sms_body": "Very cool SMS text",
        "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "auth_user": "SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "auth_token": "***********************************",
        "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
}
```
Within this structure, the following fields are expected:

- __sms_to:__ This field should contain the recipient's phone number, specified in international format (e.g., "+49123123123").
- __sms_body:__ This field holds the text message content that will be sent via SMS.
- __account_sid:__ The Account SID (identifier) associated with your Twilio account. It uniquely identifies your account and can be obtained from the Twilio dashboard.
- __auth_user:__ The authentication user (username) used for Twilio API authentication. It is associated with your Twilio account and should also be available from your Twilio dashboard.
- __auth_token:__ The authentication token used for Twilio API authentication. Similar to the Account SID, this token can be obtained from the Twilio dashboard and is used in combination with the authentication user.
- __messaging_service_sid:__ The Messaging Service SID (identifier) associated with your Twilio messaging service. This SID is used to send messages through a specific messaging service and can be retrieved from your Twilio dashboard.

By sending an HTTP POST request to the specified endpoint (`/v1/sms`) and including the required fields within the `input` structure, clients can leverage our service to seamlessly send SMS messages using the Twilio platform.