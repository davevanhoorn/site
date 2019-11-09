const fetch = require("node-fetch")

exports.handler = function(event, context, callback) {
  const emailAddress = event.queryStringParameters.email
  const apiKey = `apikey ${process.env.MAILCHIMP_API_KEY}`
  const listId = process.env.MAILCHIMP_LIST_ID

  if (listId === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "Missing Mailchimp List ID in Netlify environment variables.",
      }),
    })
    return
  }

  if (process.env.MAILCHIMP_API_KEY === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "Missing Mailchimp API key in Netlify environment variables.",
      }),
    })
    return
  }

  if (!emailAddress) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: "Missing email address",
      }),
    })
    return
  }

  fetch(`https://us10.api.mailchimp.com/3.0/lists/${listId}/members/`, {
    method: "POST",
    headers: {
      Authorization: apiKey,
    },
    body: JSON.stringify({
      email_address: emailAddress,
      status: "subscribed",
    }),
  })
    .then(x => x.json())
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: "Email address added" }),
      })
    })
}
