const rootURL = "https://artful-iudex.herokuapp.com/";

const get = (api) => {
  return new Promise((resolve, reject) => {
    const url = `${rootURL}${api}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      if (resp.status && resp.status === 200) {
        return resolve(resp.json());
      } else {
        handleError(resp);
        return reject(resp);
      }
    });
  });
};

const handleError = async (resp) => {
  const status = resp.status;
  const error = await resp.json().then((resp) => {
    console.error(resp);
    switch (status) {
      case 400:
      default:
        console.log("Error accessing the api :: Error :: ", resp.message);
        break;
    }
    return resp;
  });
  return error;
};

export default get;
