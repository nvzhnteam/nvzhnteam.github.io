const btnPlayer = document.querySelectorAll('.player');
const infoPlayer = document.querySelectorAll('#infoPlayer');
const teamList = document.querySelector('.teamList');

for(let btn = 0; btn < btnPlayer.length; btn++){    
    btnPlayer[btn].addEventListener('click', playerClick);

    function playerClick () {
        if(infoPlayer[btn].classList != 'show'){
            for(let info = 0; info < infoPlayer.length; info++){
                removeInfo(infoPlayer[info]);
            };
            displayInfo(infoPlayer[btn]);
        } else {
            removeInfo(infoPlayer[btn]);
        }
    };
};

function removeInfo (infoPlayer) {
    infoPlayer.classList.remove('show');
    infoPlayer.style.display = 'none';
    teamList.style.justifyContent = 'center';
};

function displayInfo (infoPlayer){
    infoPlayer.classList.add('show')
    infoPlayer.style.display = 'flex';
    teamList.style.justifyContent = 'space-around';
};