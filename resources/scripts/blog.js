function switchCardType() {
    const switchCardType = document.querySelector('.switch-card-type');
    const watermark = document.querySelector('.watermark');

    if (switchCardType.textContent === `sign up`) {
        switchCardType.textContent = `log in`;
        watermark.textContent = `sign up`;
    } else if (switchCardType.textContent === `log in`) {
        switchCardType.textContent = `sign up`;
        watermark.textContent = `log in`;
    }
}