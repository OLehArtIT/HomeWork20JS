function redirect() {
      var inputUrl = document.getElementById("inputUrl").value;
      var url;

      if (!/^https?:\/\//i.test(inputUrl)) {
        url = "http://" + inputUrl; 
      } else {
        url = inputUrl;
      }

      window.open(url);
    }

    function checkProtocol() {
      var inputUrl = document.getElementById("inputUrl").value;

      if (!/^https?:\/\//i.test(inputUrl)) {
        alert("Протокол не указан");
      } else {
        alert("Протокол указан");
    }
}