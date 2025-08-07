var audioElements = document.querySelectorAll('.infoAbout');
var audioArray = Array.from(audioElements).map((audio, index) => {
  return {
    element: audio,
    index: index,
    src: audio.getAttribute('src'),
    type: audio.getAttribute('type'),
    controls: audio.hasAttribute('controls')
  };
});

var infoAboutElements = document.getElementsByClassName('infoAbout');

for (var i = 0; i < audioArray.length; i++) {
  var pElement = document.createElement('p');

  // Извлекаем последнюю часть пути после последнего "/"
  var srcParts = audioArray[i].src.split('/');
  var lastPathSegment = srcParts[srcParts.length - 1];

  // Устанавливаем текст равным последней части пути
  pElement.textContent = lastPathSegment;

  pElement.classList.add('nameMusic');

  var clonedElement = pElement.cloneNode(true);
  clonedElement.classList.add('nameMusic');

  infoAboutElements[i].insertAdjacentElement('afterend', clonedElement);
}



// Получаем ссылку на элемент с id "infoAboutMusic"
var infoAboutMusicElement = document.getElementById('infoAboutMusic');

// Изменяем текстовое содержание элемента
infoAboutMusicElement.textContent = `Fuck Duck`;





