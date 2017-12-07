var feedbackForm = document.querySelector('.feedback');
var feedbackBtn = document.querySelector('.feedback-btn');
var feedbackClose = document.querySelector('.close-feedback');

feedbackBtn.addEventListener('click', function () {
  feedbackForm.classList.add('feedback-show');
});

feedbackClose.addEventListener('click', function () {
  feedbackForm.classList.remove('feedback-show');
});
