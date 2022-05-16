const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup");
const formEditCloseIcon = document.querySelector(".form__close-icon");
const profileEditForm = document.querySelector("#form");
const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__job");
const profileNameInput = form.querySelector(".form__input_name");
const profileJobInput = form.querySelector(".form__input_job");
const cardEditIcon = document.querySelector(".card__icon");

function openPopup() {
  profileEditPopup.classList.add("popup_is-opened");
}

function closePopup() {
  profileEditPopup.classList.remove("popup_is-opened");
}

profileEditButton.addEventListener("click", function () {
  openPopup();
  profileNameInput.value = profileNameElement.textContent;
  profileJobInput.value = profileJobElement.textContent;
});

formEditCloseIcon.addEventListener("click", function () {
  closePopup();
});

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = event.target.name.value;
  const jobValue = event.target.job.value;

  profileNameElement.textContent = nameValue;
  profileJobElement.textContent = jobValue;

  closePopup();
});