let track1Instrument = 0;
// 0 : kick tape
// 1: kick 808
// 2: kick electro
// 3: kick classic

let track2Instrument = 0;
// 0: clap tape
// 1: clap 808
// 2: clap fat
// 3: clap crushed

let track3Instrument = 0;
// 0: hithat 808
// 1: hithat acoustic
// 2: hithat electro

let track1 = track2 = track3 = [false, false, false, false, false, false, false, false,]

let tempo = 120;

let audio = new Audio("my-sounds/hihat/hihat-digital.wav")
let audio1 = new Audio("my-sounds/clap/clap-808.wav")
let audio2 = new Audio("my-sounds/snare/snare-big.wav")

let howl1 = new Howl({
    src: ["my-sounds/kick/kick-808.wav"]
})
let howl2 = new Howl({
    src: ["my-sounds/snare/snare-big.wav"]
})
let howl3 = new Howl({
    src: ["my-sounds/clap/clap-808.wav"]
})

function getPauseTimeByTempo(tempo) {
    let a = tempo / 60;
    let b = 1 / a;
    return b;
}

async function playSound() {
    const dTrack1 = document.getElementById("track-1").getElementsByClassName("rect");
    const dTrack2 = document.getElementById("track-2").getElementsByClassName("rect");
    const dTrack3 = document.getElementById("track-3").getElementsByClassName("rect");

    let index = 0;
    while (isplaying) {
        console.log("playing, time delay " + getPauseTimeByTempo(tempo) + ", index: " + index);

        dTrack1[index].style.height = "53px";
        dTrack2[index].style.height = "53px";
        dTrack3[index].style.height = "53px";


        if (track1[index] === true) {
            howl1.play();
        }
        if (track2[index] === true) {
            howl2.play();
        }
        if (track3[index] === true) {
            howl3.play();
        }
        await sleep(getPauseTimeByTempo(tempo));

        dTrack1[index].style.height = "50px";
        dTrack2[index].style.height = "50px";
        dTrack3[index].style.height = "50px";


        index++;
        if (index > 7) {
            index = 0;
        }
    }
}
function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function handleInstrumentPicker(modal, modal_button, trackInst, track) {
    console.log(modal)
    modal.style.display = "flex";
    for (let i = 0; i < modal_button.length; i++) {
        modal_button[i].onclick = function () {
            modal.style.display = "none";
            let picked_inst = modal_button[i].innerHTML;
            trackInst.innerHTML = picked_inst;
            track = i;
        }
    }
}

function handleBeatSelector(tRect, color, track) {
    for (let i = 0; i < tRect.length; i++) {
        tRect[i].onclick = function () {
            if (tRect[i].style.backgroundColor === color) {
                tRect[i].style.backgroundColor = "lightgrey";
            }
            else {
                tRect[i].style.backgroundColor = color;
                track[i] = true;
                console.log(track)
            }
        }
    }
}

// track 1 inst picker
const t1Modal = document.querySelector(".t1modal");
const t1InstButton = document.getElementsByClassName("t1button");
const track1Inst = document.getElementById("track-1-inst");

track1Inst.onclick = function () {
    handleInstrumentPicker(t1Modal, t1InstButton, track1Inst, track1Instrument);
}

// track 2 inst picker
const t2Modal = document.querySelector(".t2modal");
const t2InstButton = document.getElementsByClassName("t2button");
const track2Inst = document.getElementById("track-2-inst");

track2Inst.onclick = function () {
    handleInstrumentPicker(t2Modal, t2InstButton, track2Inst, track2Instrument);
}

// track 3 inst picker
const t3Modal = document.querySelector(".t3modal");
const t3InstButton = document.getElementsByClassName("t3button");
const track3Inst = document.getElementById("track-3-inst");

track3Inst.onclick = function () {
    handleInstrumentPicker(t3Modal, t3InstButton, track3Inst, track3Instrument);
}

// track beats 

const t1beat = document.getElementById("track-1");
const t1rects = t1beat.getElementsByClassName("rect");
handleBeatSelector(t1rects, "rgb(235, 87, 87)", track1)

const t2beat = document.getElementById("track-2");
const t2rects = t2beat.getElementsByClassName("rect");
handleBeatSelector(t2rects, "rgb(111, 207, 151)", track2)

const t3beat = document.getElementById("track-3");
const t3rects = t3beat.getElementsByClassName("rect");
handleBeatSelector(t3rects, "rgb(187, 107, 217)", track3)

const tempoSlider = document.getElementById("tempo");
const tempoNumerical = document.getElementById("tempo-numerical");

tempoSlider.oninput = function () {
    tempoNumerical.innerHTML = tempoSlider.value;
    tempo = tempoSlider.value;
    console.log(getPauseTimeByTempo(tempo));
}

// The Drum Beat Player

let isplaying = false;

const playPause = document.getElementById("play-pause");
playPause.onclick = function () {
    if (playPause.innerHTML === "Play") {
        console.log("playing");
        playPause.innerHTML = "Pause";
        isplaying = true;
        playSound();
    }
    else {
        console.log("paused")
        playPause.innerHTML = "Play";
        isplaying = false;
        // playSound();
    }
}