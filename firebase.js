function getStartToken() {
  console.log("hhha");
  messaging
    .getToken()
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
      } else {
        // Show permission request.
        RequestPermission();
      }
    })
    .catch((err) => {
      console.log(err);
      RequestPermission();
    });
}

async function RequestPermission() {
  await messaging.requestPermission();
  getStartToken();
}
getStartToken();
