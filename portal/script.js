document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los botones
    const btnEchat = document.getElementById('btn-echat');
    const btnLive = document.getElementById('btn-live');

    // Redirección para E-CHAT
    if (btnEchat) {
        btnEchat.addEventListener('click', () => {
            window.location.href = 'http://192.168.100.20/echat';
        });
    }

    // Redirección para LIVE
    if (btnLive) {
        btnLive.addEventListener('click', () => {
            window.location.href = 'http://192.168.100.20/live';
        });
    }
});
