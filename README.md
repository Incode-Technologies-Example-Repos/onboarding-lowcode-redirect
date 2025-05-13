# Sample Redirect and Back
This app showcase how to create a low code app that will fetch the
url of the onboarding and redirect the user to that page, then come
back using the redirectionURL property of the workflow to fetch
the score.

The full steps between the customer site, incode's hosted flows,  and backend can be seen in this diagram.

```mermaid
sequenceDiagram
    participant i as Incode's<br>Web<br>Flows
    participant m as Customer<br>Site
    participant b as Backend
    participant a as API

    activate m
    m-->>b: Start Onboarding
    b-->>a: configurationId
    note over a: /omni/start
    a-->b: token, interviewId
    note over b: Save Token
    b-->>a: token
    note over a: /0/omni/onboarding-url
    a-->>b: url
    b-->>m: url, interviewId
    note over m: Save interviewId in localStorage
    m->>i: Redirect user to Incode's URL
    deactivate m
    
    activate i
    note over i: Do Onboarding
    note over i: Show thank you screen
    i->>m: Redirect user to customer page
    deactivate i
    
    activate m
    note over m: Show finishing page
    note over m: read interview from localStorage
    m-->>b: Fetch Score<br>interviewId
    b-->>a: token
    note over a: /0/omni/get/score
    a-->>b: overallStatus
    b-->>m: overallStatus
    note over m: Done
    deactivate m
```


# Fake Backend Server
Starting the session, getting the url and fetching the scores must be
done in the backend, to simplify development this sample includes a
fake_backend.js file that does this in the frontend.

Please be advised to replace this with a proper backend for your
production runs.

The APIKEY should never be exposed in the frontend.

# Install
First install all the required packages
```
npm install
```

# Configure
Copy `.env.example` as `.env` and configure it with the values of your flow

```
# HERE ONLY FOR DEMO PURPOSES, THE APIKEY AND THE FLOW_ID SHOULD NEVER BE IN THE FRONTEND.
VITE_FAKE_BACKEND_APIURL=https://demo-api.incodesmile.com
VITE_FAKE_BACKEND_APIKEY=
VITE_FAKE_BACKEND_FLOWID=
```

# Development
This repo is configured so run it in development by executing
```
npm run dev
```

You will get a hot reloading environment that exposes the page in
localhost and in the ip of the machine in case you want to try it
in your cellphone.

## Author

© Incode Technologies Inc. All rights reserved.