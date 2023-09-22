let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");
let predictGender = () => {
  let name = document.getElementById("inputname").value;
  let error = document.getElementById("error");
  let finalURL = url + name;
  console.log(name);
  console.log(finalURL);
  wrapper.innerHTML = "";
  error.innerHTML = "";
  //Check if input field is not empty and the entered name does not contain anything but alphabets.
  if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
    fetch(finalURL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let div = document.createElement("div");
        div.setAttribute("id", "info");
        div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/> <h1 id="gender">${data.gender}</h1><h4 id="prob">Probability: ${data.probability}</h4>`;
        wrapper.append(div);
        if (data.gender == "female") {
          div.classList.add("female");
          document
            .getElementById("gender-icon")
            .setAttribute("src", "./svg/female.svg");
        } else {
          div.classList.add("male");
          document
            .getElementById("gender-icon")
            .setAttribute("src", "./svg/male.svg");
        }
      });
    document.getElementById("name").value = "";
  } else {
    error.innerHTML = "Enter a valid name with no spaces";
  }
};

document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);




// Form Validation Send Button with Sweet alert 
// This Script you can uses when you jquary cdn link in head tag
// This cdn is    :  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
$("#submit").click(function(){
  var inputname = $("#inputname").val();

  if(inputname == ''){
      swal({
          title: "Fields Empty",
          text: "Please write a message",
          icon: "warning",
          button: "Ok",
        });
  }
  else{
      swal({
          title: "Success",
          text: "Click ok Button",
          icon: "success",
          button: "Ok",
        });
  }
});