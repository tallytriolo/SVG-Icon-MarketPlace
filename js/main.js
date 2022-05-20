// JavaScript starts


(() => {
    console.log('WOW! Javascript is working!');

    // let icon = document.querySelector('#icon')
    let tambourine1 = document.querySelector('#tambourine1')
    let tambourine2 = document.querySelector('#tambourine2')
    let tambourine3 = document.querySelector('#tambourine3')
    let candombeDrum = document.querySelector('#candombeDrum')
    let cymbal = document.querySelector('#cymbal')
    let maracas = document.querySelector('#maracas')
    let mic = document.querySelector('#mic')
    let noise = document.querySelector('#noise')
    let repinique = document.querySelector('#repinique')
    let snareDrum = document.querySelector('#snareDrum')
    let twinHorned = document.querySelector('#twinHorned')
    let ukulele = document.querySelector('#ukulele')

    function logMyId() {
        debugger; //pauses code execution at this line

        // log the element's ID to the console window
        console.log('Icon',this.id);
    }

    // icon.addEventListener('click', logMyId);
    tambourine1.addEventListener('click', logMyId)
    tambourine2.addEventListener('click', logMyId)
    tambourine3.addEventListener('click', logMyId)
    candombeDrum.addEventListener('click', logMyId)
    cymbal.addEventListener('click', logMyId)
    maracas.addEventListener('click', logMyId)
    mic.addEventListener('click', logMyId)
    noise.addEventListener('click', logMyId)
    repinique.addEventListener('click', logMyId)
    snareDrum.addEventListener('click', logMyId)
    twinHorned.addEventListener('click', logMyId)
    ukulele.addEventListener('click', logMyId)
})();
