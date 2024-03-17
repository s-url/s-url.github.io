const changeButton = document.getElementById('changeButton');
const afterForm = document.getElementById('afterForm');
const beforeUrl = document.getElementById('beforeUrl');
const afterUrl = document.getElementById('afterUrl');

const urlRegex = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

changeButton.addEventListener('click', function() {
    if(checkedUrl()) {
        let hash = to6DigitHash(beforeUrl.value);
        afterUrl.value = "https://s-url.github.io?s=" + hash;
        afterForm.classList.remove('d-none');
    } else {
        alert(`url을 확인해주세요.\n[ ${beforeUrl.value} ]`);
    }
});

function checkedUrl() {
    return urlRegex.test(beforeUrl.value);
}