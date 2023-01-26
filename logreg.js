window.onload = function() {
    // Get the form element
    var form = document.getElementById("loginForm");
  
    // Add event listener for form submit
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent default form action
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      console.log(username);
      console.log(password);
      console.log("...........................")
      // Get user data from JSON file
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "users.json", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var userdata = JSON.parse(xhr.responseText);
          console.log(userdata);
          console.log(userdata[0].username);
      console.log(userdata[0].password);
          // Compare user data from JSON file to login information
          for (var i = 0; i < userdata.length; i++) {
            console.log(userdata[i].username);
      console.log(userdata[i].password);

      console.log(":::...........................:::")
            if (username === userdata[i].username && password === userdata[i].password) {
              alert("Login successful!");
              return;
            }
          }
          alert("Invalid login information. Please try again.");
        }
      }
      xhr.send();
    });
  }
  