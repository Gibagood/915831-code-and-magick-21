(function setup() {
  const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  const COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  const EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  const quantityWizards = 4;

  const userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  const similarListElement = document.querySelector('.setup-similar-list');
  const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  const randomIndex = function randomIndex(lngth) {
    const randomNum = Math.floor(Math.random() * lngth);
    return randomNum;
  };

  const renderWizard = function renderWizard() {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = `${WIZARD_NAMES[randomIndex(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[randomIndex(WIZARD_SURNAMES.length)]}`;

    wizardElement.querySelector('.wizard-coat').style.fill = COAT_COLOR[randomIndex(COAT_COLOR.length)];

    wizardElement.querySelector('.wizard-eyes').style.fill = EYES_COLOR[randomIndex(EYES_COLOR.length)];
    return wizardElement;
  };

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < quantityWizards; i += 1) {
    fragment.appendChild(renderWizard(i));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}());
