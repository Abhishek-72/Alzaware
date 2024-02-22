document.getElementById('image-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const image = document.createElement('img');
      image.src = e.target.result;
      document.getElementById('uploaded-image').innerHTML = '';
      document.getElementById('uploaded-image').appendChild(image);
    }
    reader.readAsDataURL(file);
  }
});
function showResult(resultText) {
  var resultSection = document.getElementById('result-section');
  resultSection.innerText = resultText;
}
