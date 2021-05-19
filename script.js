let track1 = 0;
// 0 : kick tape
// 1: kick 808
// 2: kick electro
// 3: kick classic

let track2 = 0;
// 0: clap tape
// 1: clap 808
// 2: clap fat
// 3: clap crushed

let track3 = 0;
// 0: hithat 808
// 1: hithat acoustic
// 2: hithat electro

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

// track 1 inst picker
const t1Modal = document.querySelector(".t1modal");
const t1InstButton = document.getElementsByClassName("t1button");
const track1Inst = document.getElementById("track-1-inst");

track1Inst.onclick = function () {
    handleInstrumentPicker(t1Modal, t1InstButton, track1Inst, track1);
}

// track 2 inst picker
const t2Modal = document.querySelector(".t2modal");
const t2InstButton = document.getElementsByClassName("t2button");
const track2Inst = document.getElementById("track-2-inst");

track2Inst.onclick = function () {
    handleInstrumentPicker(t2Modal, t2InstButton, track2Inst, track2);
}

// track 3 inst picker
const t3Modal = document.querySelector(".t3modal");
const t3InstButton = document.getElementsByClassName("t3button");
const track3Inst = document.getElementById("track-3-inst");

track3Inst.onclick = function () {
    handleInstrumentPicker(t3Modal, t3InstButton, track3Inst, track3);
}