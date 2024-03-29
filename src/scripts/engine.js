const pianoKeys= document.querySelectorAll(".piano-keys .key");
const volumeSlider= document.querySelector(".volume-slider input");
const keysCheck= document.querySelector(".keys-check input");

let mapedKeys= [];
let audio= new Audio("src/tunes/a.wav");

const playTune= key => {
    audio.src= `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey= document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>
        clickedKey.classList.remove("active")
    , 150);
};

pianoKeys.forEach(pianoKey => {
    pianoKey.addEventListener("click", () => playTune(pianoKey.dataset.key));
    mapedKeys.push(pianoKey.dataset.key);
});

document.addEventListener("keydown", e => {
    if(keysCheck.checked && mapedKeys.includes(e.key))
        playTune(e.key);
});

const handleVolume= e => {
    audio.volume= e.target.value;
};

const showHideKeys= (e) => {
    pianoKeys.forEach(pianoKey => {
        pianoKey.classList.toggle("hide");
    });
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);