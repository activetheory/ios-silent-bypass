const EVENTS = ['auxclick', 'click', 'contextmenu', 'dblclick', 'keydown', 'keyup', 'mousedown', 'mouseup', 'touchend'];

export default class SilentHack {
  constructor() {
    this.trying = false;
    this.state = 'blocked';
    this.audioFile = this.createAudioData();

    EVENTS.forEach((evtName) => {
      window.addEventListener(evtName, this.tryUnblock.bind(this), { capture: true, passive: true });
    });
  }

  tryUnblock() {
    if (this.state === 'allowed' || this.trying) return;
    this.createHTMLAudio();
  }

  createAudioData() {
    const rate = 48000;
    const arrayBuffer = new ArrayBuffer(10);
    const dataView = new DataView(arrayBuffer);

    dataView.setUint32(0, rate, true);
    dataView.setUint32(4, rate, true);
    dataView.setUint16(8, 1, true);

    const missingCharacters = window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer))).slice(0, 13);

    return `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${missingCharacters}AgAZGF0YQcAAACAgICAgICAAAA=`;
  }

  createHTMLAudio() {
    this.trying = true;

    let audio = document.createElement('audio');

    audio.setAttribute('x-webkit-airplay', 'deny');
    audio.preload = 'auto';
    audio.loop = true;
    audio.src = this.audioFile;
    audio.load();

    audio.play().then(
      () => {
        this.state = 'allowed';
      },
      () => {
        this.state = 'blocked';
        audio.src = 'about:blank';
        audio.load();
        audio = null;
        this.trying = false;
      }
    );
  }

  destroy() {
    EVENTS.forEach((evtName) => {
      window.removeEventListener(evtName, this.tryUnblock.bind(this), { capture: true, passive: true });
    });
  }

  get allowed() {
    return this.state === 'allowed';
  }
}
