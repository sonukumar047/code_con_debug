  const mybtn1 = document.getElementById("mybtn1");
  const mybtn2 = document.getElementById("mybtn2");
  const mybtn3 = document.getElementById("mybtn3");
  const mybtn4 = document.getElementById("mybtn4");

  mybtn1.addEventListener("click",function(e){
    const selectedOption = document.getElementById("conversionOption").value;
    const codeInput = document.getElementById("codeInput").value;

    const url = 'http://localhost:8080/bot/chat2';
const requestBody = {
  prompt: `convert this given code ${codeInput} into ${selectedOption}`
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  body: JSON.stringify(requestBody), // Convert the JavaScript object to JSON string
};

    console.log(selectedOption);
    console.log(codeInput);
    e.preventDefault();
    //const request = new Request(`http://localhost:8080/bot/chat?prompt=convert this given code ${codeInput} into ${selectedOption}`);
    fetch(url,requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      document.getElementById("responseDiv").innerText = data.content;
    })
    .catch((error) => {
      console.error(error);
    });
  });

  mybtn2.addEventListener("click",function(e){
    
    const codeInput = document.getElementById("codeInput").value;
    
    console.log(codeInput);

    const url = 'http://localhost:8080/bot/chat2';
const requestBody = {
  prompt: `please correct this code  ${codeInput}`
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  body: JSON.stringify(requestBody), // Convert the JavaScript object to JSON string
};

    e.preventDefault();
    //const request = new Request(`http://localhost:8080/bot/chat?prompt=please correct this code  ${codeInput}`);
    fetch(url,requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      document.getElementById("responseDiv").innerText = data.content;
    })
    .catch((error) => {
      console.error(error);
    });
  });

  mybtn3.addEventListener("click",function(e){
    
    const codeInput = document.getElementById("codeInput").value;
    
    const url = 'http://localhost:8080/bot/chat2';
const requestBody = {
  prompt: `optimize this code ${codeInput}`
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  body: JSON.stringify(requestBody), // Convert the JavaScript object to JSON string
};

    console.log(codeInput);
    e.preventDefault();
    //const request = new Request(`http://localhost:8080/bot/chat?prompt=can you optimize this code ${codeInput}`);
    fetch(url,requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      document.getElementById("responseDiv").innerText = data.content;
    })
    .catch((error) => {
      console.error(error);
    });
  });

  mybtn4.addEventListener("click",function(e){
  
    const codeInput = document.getElementById("codeInput").value;
    
    const url = 'http://localhost:8080/bot/chat2';
const requestBody = {
  prompt: `give me the time Complecity of this code ${codeInput}`
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  body: JSON.stringify(requestBody), // Convert the JavaScript object to JSON string
};

    console.log(codeInput);
    e.preventDefault();
    //const request = new Request(`http://localhost:8080/bot/chat?prompt=give me the time Complecity of this code ${codeInput}`);
    fetch(url,requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      document.getElementById("responseDiv").innerText = data.content;
    })
    .catch((error) => {
      console.log("error in your code");
      console.error(error);
    });
  });
