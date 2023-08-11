import { render, html } from 'lit/html.js';
import { resumeAudioContext } from '@ircam/resume-audio-context';
import '@ircam/sc-components';

console.info('> self.crossOriginIsolated', self.crossOriginIsolated);

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

(async function main() {
  await resumeAudioContext(audioContext);

  render(html`
    <h2>Hello</h2>
    <sc-bang
      @input="${e => {
        const osc = audioContext.createOscillator();
        osc.connect(audioContext.destination);
        osc.frequency.value = 200;
        osc.start();
        osc.stop(audioContext.currentTime + 0.05);
      }}"
    ></sc-bang>
  `, document.body);
}());
