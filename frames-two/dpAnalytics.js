(function () {
  if (!window.foobar) {
    window.foobar = "testing";
  }

  function onMessage(event) {
    // Use the transfered port to post a message back to the main frame
    event.ports[0].postMessage("Message from the IFrame");
  }

  let config = {
    dim1: "dima",
  };

  function initialize(config) {
    console.log(
      `dpAnalytics initialized with config: ${JSON.stringify(config)}...`
    );
  }

  window.addEventListener("message", onMessage);
  initialize(config);
})();

const domain = "http://127.0.0.1:8080";

const payload = {
  Header: { dim1: "dima" },
  Payload: { dim2: "dimb" },
};

function postMessage(message) {
  parent.postMessage(`${message}: ${JSON.stringify(payload)}...`, domain);
}

parent.postMessage("dpAnalytics is loaded in iframe", domain);
