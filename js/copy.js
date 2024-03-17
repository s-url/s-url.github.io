// 버튼 요소 가져오기
const copyButton = document.getElementById('copyButton');

// 버튼에 클릭 이벤트 리스너 추가
copyButton.addEventListener('click', function() {
    // 복사할 텍스트를 가져오기
    const textToCopy = document.getElementById('afterUrl');

    // 텍스트 선택
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // 모바일에서도 동작하도록 범위 설정

    // 클립보드에 복사
    document.execCommand('copy');

    // 선택 해제 (선택된 텍스트를 해제하여 사용자가 복사했음을 확인할 수 있도록 함)
    window.getSelection().removeAllRanges();

    // 복사 완료 메시지
    alert('Text copied to clipboard: ' + textToCopy.value);
});