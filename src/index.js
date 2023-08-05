  const redirectButton = document.getElementById("redirect");
  const checkButton = document.getElementById("check");
  const urlInput = document.getElementById("input");
  
  redirectButton.addEventListener("click", handleButton);
  checkButton.addEventListener("click", handleButton);
  
  function handleButton(event) {
      const inputUrl = urlInput.value;
      let redirectURL = inputUrl;
      let alertMessage = "";
      
      if (event.target === redirectButton) {
          redirectURL = /^https?:\/\//i.test(inputUrl) ? inputUrl : `http://${inputUrl}`;
          window.location.href = redirectURL;
      } else if (event.target === checkButton) {
          alertMessage = /^https?:\/\//i.test(inputUrl) ? "Протокол уже указан." : "Протокол отсутствует. Добавьте протокол http или https.";
          alert(alertMessage);
      }
  }
;