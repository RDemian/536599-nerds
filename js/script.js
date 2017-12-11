var feedbackForm = document.querySelector('.feedback');
var feedbackBtn = document.querySelector('.feedback-btn');
var feedbackClose = document.querySelector('.close-feedback');
var login = feedbackForm.querySelector('.name-feedback');

feedbackBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add('feedback-show');
  login.focus();
});

feedbackClose.addEventListener('click', function () {
  feedbackForm.classList.remove('feedback-show');
});