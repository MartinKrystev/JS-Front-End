function lockedProfile() {

    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((b) => {
        b.addEventListener('click', toggleInfo);
    });
    
    function toggleInfo(e) {
        let btn = e.currentTarget;
        let currentProfile = btn.parentElement;
        let children = Array.from(currentProfile.children);
        let infoDiv = children[9];
        let unlockRadioBtn = children[4];

        if(unlockRadioBtn.checked) {
            if(btn.textContent === 'Show more') {
                infoDiv.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                infoDiv.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }

    };
}