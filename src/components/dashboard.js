var React = require('react');
const GDAX = require('gdax');
var Distribution = require('./distribution.js');
// const GDAX = require('gdax');

// const callback = (error, response, data) => {
//   if (error)
//     return console.dir(error);
//   return console.dir(data);
// }

// const passPhrase = "saiop147";
// const apiKey = "bfa6cb687e64c56ec803f28803ec3070";
// const base64secret = "NN/XFvp2rXWMKF0oBrVLUHPaAW3eW0YkbETGKdGmvv3Kuy8j13DQptMAwTIVozLUPiisFnQL5a24VO6F+FfQfA==";
// const apiURI = "https://api.gdax.com";
// const authenticatedClient = new GDAX.AuthenticatedClient(apiKey, base64secret, passPhrase, apiURI);

// const ETH_USD = "ETH-USD";
// const LTC_USD = "LTC-USD";
// const websocket = new GDAX.WebsocketClient([LTC_USD]);
// const websocketCallback = (data) => {
//   if(!(data.type === "done" && data.reason === "filled"))
//     return;

//   if(data.price === undefined)
//     return;

//   console.log(data.price);
// };

// websocket.on('message', websocketCallback);

const publicClient = new GDAX.PublicClient();

const callback = (error, response, data) => {
  if (error)
    return console.dir(error);
  return console.dir(data);
}
const passPhrase = "saiop147";
const apiKey = "bfa6cb687e64c56ec803f28803ec3070";
const base64secret = "NN/XFvp2rXWMKF0oBrVLUHPaAW3eW0YkbETGKdGmvv3Kuy8j13DQptMAwTIVozLUPiisFnQL5a24VO6F+FfQfA==";
const apiURI = "https://api.gdax.com";
const authenticatedClient = new GDAX.AuthenticatedClient(apiKey, base64secret, passPhrase, apiURI);

const ETH_USD = "ETH-USD";
const LTC_USD = "LTC-USD";

const websocket = new GDAX.WebsocketClient([LTC_USD]);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
    const websocketCallback = (data) => {
      if(!(data.type === "done" && data.reason === "filled"))
        return;
      if(data.price === undefined)
        return;
      console.log(data.price);
    };

    websocket.on('message', websocketCallback);

    this.state = {
      price: 0
    }
  }

  render() {
    return (
      <div className="container">
        <br/>
        <Distribution />
      </div>
    );
  }
};

module.exports = Dashboard