import { urlEncode } from "utils/url";

const xhr = ({ url, body = null, method = "get" }) => {
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  function log(response) {
    console.log(url, response);
    return response;
  }

  let param = {
    method: method,
    headers: { "Content-Type": "application/json", Accept: "*/*" }
  };

  if (body) {
    method === ("post" || "POST" || "put" || "PUT")
      ? (param.body = JSON.stringify(body))
      : (url = `${url}?${urlEncode(body)}`);
  }

  param.credentials = "include";
  return fetch(url, param)
    .then(checkStatus)
    .then(parseJSON)
    .then(log);
};

export default xhr;
