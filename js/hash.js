// CRC32 테이블 생성
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
    let crc = i;
    for (let j = 0; j < 8; j++) {
        crc = (crc & 1) ? (crc >>> 1) ^ 0xEDB88320 : crc >>> 1;
    }
    crcTable[i] = crc;
}

// CRC32 계산 함수
function crc32(str) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        crc = (crc >>> 8) ^ crcTable[(crc ^ char) & 0xFF];
    }
    return (crc ^ 0xFFFFFFFF) >>> 0; // unsigned
}

// 6자리 해시 생성 함수
function to6DigitHash(str) {
    const crc = crc32(str).toString(16); // CRC32 값을 16진수 문자열로 변환
    return crc.slice(0, 8); // 처음 6자리만 반환
}

// 테스트
// const hash = to6DigitHash("https://hairo.unikorea.go.kr/party/Bbs.do");
// console.log(hash); // 출력 예시: "a1b2c3"