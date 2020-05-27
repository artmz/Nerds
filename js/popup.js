var contactUsBtn = document.querySelector(".contact-us-btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-close");

contactUsBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-feedback-show");
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-feedback-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-feedback-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-feedback-show");
        }
    }
});
