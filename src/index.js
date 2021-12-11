import "core-js/stable";
import "regenerator-runtime/runtime";
import { render, html } from 'lit-html';
import { resumeAudioContext } from '@ircam/resume-audio-context';
// import '@ircam/simple-components/sc-toggle.js';

console.info('> self.crossOriginIsolated', self.crossOriginIsolated);

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

(async function main() {
  await resumeAudioContext(audioContext);

  render(html`
    <h2>js-prototyping-template</h2>
  `, document.body);
}());

