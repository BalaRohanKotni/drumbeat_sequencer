// alert("hello")

let tempo = 120;

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
// 0: hihat 808
// 1: hihat acoustic
// 2: hihat electro
// 3: hihat digital

let track4Instrument = 0;
// Snare Tape
// Snare 808
// Snare Big
// Snare Electro

let track1 = [false, false, false, false, false, false, false, false,]
let track2 = [false, false, false, false, false, false, false, false,]
let track3 = [false, false, false, false, false, false, false, false,]
let track4 = [false, false, false, false, false, false, false, false,]

let srcKick = [
    "sounds/kick/kick-tape.wav",
    "sounds/kick/kick-808.wav",
    "sounds/kick/kick-electro.wav",
    "sounds/kick/kick-classic.wav",
];

let srcClap = [
    "sounds/clap/clap-tape.wav",
    "sounds/clap/clap-808.wav",
    "sounds/clap/clap-fat.wav",
    "sounds/clap/clap-crushed.wav",
];

let srcHiHat = [
    "sounds/hihat/hihat-808.wav",
    "sounds/hihat/hihat-acoustic.wav",
    "sounds/hihat/hihat-electro.wav",
    "sounds/hihat/hihat-digital.wav",
]

let srcSnare = [
    "sounds/snare/snare-tape.wav",
    "sounds/snare/snare-808.wav",
    "sounds/snare/snare-big.wav",
    "sounds/snare/snare-electro.wav",
]

function getPauseTimeByTempo(tempo) {
    let a = tempo / 60;
    let b = 1 / a;
    return b;
}

async function playSound() {
    const dTrack1 = document.getElementById("track-1").getElementsByClassName("rect");
    const dTrack2 = document.getElementById("track-2").getElementsByClassName("rect");
    const dTrack3 = document.getElementById("track-3").getElementsByClassName("rect");
    const dTrack4 = document.getElementById("track-4").getElementsByClassName("rect");

    let index = 0;
    while (isplaying) {
        let pTrack1 = new Howl({ src: [srcKick[track1Instrument]] });
        let pTrack2 = new Howl({ src: [srcClap[track2Instrument]] });
        let pTrack3 = new Howl({ src: [srcHiHat[track3Instrument]] });
        let pTrack4 = new Howl({ src: [srcSnare[track4Instrument]] });

        console.log("playing, time delay " + getPauseTimeByTempo(tempo) + ", index: " + index);
        console.log
            (`mode playing,\nindex ${index},\ntime-delay ${getPauseTimeByTempo(tempo)},\n${srcKick[track1Instrument]}\n${srcClap[track2Instrument]}\n${srcHiHat[track3Instrument]}`)
        console.log(track1)
        console.log(track2)
        console.log(track3)
        dTrack1[index].style.height = "55px";
        dTrack2[index].style.height = "55px";
        dTrack3[index].style.height = "55px";
        dTrack4[index].style.height = "55px";


        if (track1[index] === true) {
            pTrack1.play();
        }
        if (track2[index] === true) {
            pTrack2.play();
        }
        if (track3[index] === true) {
            pTrack3.play();
        }
        if (track4[index] === true) {
            pTrack4.play();
        }
        await sleep(getPauseTimeByTempo(tempo));

        dTrack1[index].style.height = "50px";
        dTrack2[index].style.height = "50px";
        dTrack3[index].style.height = "50px";
        dTrack4[index].style.height = "50px";

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
            if (track == 1) track1Instrument = i;
            if (track == 2) track2Instrument = i;
            if (track == 3) track3Instrument = i;
            if (track == 4) track4Instrument = i;

        }
    }
}

function handleBeatSelector(tRect, color, track) {
    for (let i = 0; i < tRect.length; i++) {
        tRect[i].onclick = function () {
            console.log(`clicked, t ${track}, ${i}`);
            if (tRect[i].style.backgroundColor === color) {
                tRect[i].style.backgroundColor = "lightgrey";
                if (track == 1) track1[i] = false;
                if (track == 2) track2[i] = false;
                if (track == 3) track3[i] = false;
                if (track == 4) track4[i] = false;
            }
            else {
                tRect[i].style.backgroundColor = color;
                if (track == 1) track1[i] = true;
                if (track == 2) track2[i] = true;
                if (track == 3) track3[i] = true;
                if (track == 4) track4[i] = true;
            }
        }
    }
}

// track 1 inst picker
const t1Modal = document.querySelector(".t1modal");
const t1InstButton = document.getElementsByClassName("t1button");
const track1Inst = document.getElementById("track-1-inst");

track1Inst.onclick = function () {
    handleInstrumentPicker(t1Modal, t1InstButton, track1Inst, 1);
}

// track 2 inst picker
const t2Modal = document.querySelector(".t2modal");
const t2InstButton = document.getElementsByClassName("t2button");
const track2Inst = document.getElementById("track-2-inst");

track2Inst.onclick = function () {
    handleInstrumentPicker(t2Modal, t2InstButton, track2Inst, 2);
}

// track 3 inst picker
const t3Modal = document.querySelector(".t3modal");
const t3InstButton = document.getElementsByClassName("t3button");
const track3Inst = document.getElementById("track-3-inst");

track3Inst.onclick = function () {
    handleInstrumentPicker(t3Modal, t3InstButton, track3Inst, 3);
}

const t4Modal = document.querySelector(".t4modal");
const t4InstButton = document.getElementsByClassName("t4button");
const track4Inst = document.getElementById("track-4-inst");

track4Inst.onclick = function () {
    handleInstrumentPicker(t4Modal, t4InstButton, track4Inst, 4);
}

// track beats 

const t1beat = document.getElementById("track-1");
const t1rects = t1beat.getElementsByClassName("rect");
handleBeatSelector(t1rects, "rgb(235, 87, 87)", "1")

const t2beat = document.getElementById("track-2");
const t2rects = t2beat.getElementsByClassName("rect");
handleBeatSelector(t2rects, "rgb(111, 207, 151)", "2")

const t3beat = document.getElementById("track-3");
const t3rects = t3beat.getElementsByClassName("rect");
handleBeatSelector(t3rects, "rgb(187, 107, 217)", "3")

// rgb(252, 170, 127)

const t4beat = document.getElementById("track-4");
const t4rects = t4beat.getElementsByClassName("rect");
handleBeatSelector(t4rects, "rgb(252, 170, 127)", "4")


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
        playSound();
    }
}