var feedbackButton = document.querySelector(".feedback-open");
var feedbackPopup = document.querySelector(".modal-write-us");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector("form");
var userName = feedbackPopup.querySelector("[name=name]");
var userEmail = feedbackPopup.querySelector("[name=email]");
var userMessage = feedbackPopup.querySelector("[name=message]");
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  userMessage.value = '';
  if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userMessage.focus();
  } else {
    if (storageName) {
      userName.value = storageName;
      userEmail.focus();
    } else {
    userName.focus();
    }
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    void feedbackForm.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("email", userEmail.value);
  }
});


var mapLink = document.querySelector(".map-open");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (feedbackPopup.classList.contains("modal-show")) {
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
    }
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
    }
  }
});
