function handleGetFormData() {

  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  let formData = {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status
  };

  return formData;
}

function isNumber(string) {
  return !isNaN((string));
}


function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  return formData !== null &&
         isNumber(formData.zipCode) &&
         document.getElementById("status").checked === true;
}

function submit() {
  const pesan = document.getElementById('warning');

  if (!validateFormData(handleGetFormData())) {
    pesan.innerHTML = 'Periksa form anda sekali lagi';
  } else {
    pesan.innerHTML = '';
  }
}

const form = document.getElementById("submit-form");
form.addEventListener('click', submit);

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");








