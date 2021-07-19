const feedbackBtn = document.querySelector(".btn-feedback");
const feedbackPopup = document.querySelector(".modal");
const feedbackCloseBtn = feedbackPopup.querySelector(".modal-close");
const feedbackLogin = feedbackPopup.querySelector(".modal-login");
const feedbackEmail = feedbackPopup.querySelector(".modal-email");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackOverlay = document.querySelector(".feedback-overlay");
let isStorageSupport = true;
let storage= "";

try {
  storage = localStorage.getItem("modal-login");
} catch (err) {
  isStorageSupport = false;
}

feedbackBtn.addEventListener ("click",function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackOverlay.classList.add("feedback-overlay-visible");
  if(storage) {
    feedbackLogin.value = storage;
    feedbackEmail.focus();
  } else {
  feedbackLogin.focus();
  }
});

feedbackCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  feedbackOverlay.classList.remove("feedback-overlay-visible");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value || !feedbackEmail.value) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-error");
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("modal-login-login", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
 if (evt.key === "Escape") {
   if (feedbackPopup.classList.contains("modal-show")) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
    feedbackOverlay.classList.remove("feedback-overlay-visible");
   }
 }
});
