import Player from '@vimeo/player';
import throttle from "lodash.throttle";
// import { Vimeo } from 'vimeo';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const timeCurrent = 'videoplayer-current-time';

const lStorSet = function (evt) {
    console.log(evt.seconds);
    const startSec = Number(evt.seconds);
    localStorage.setItem(timeCurrent, startSec);
}
player.on('timeupdate', throttle(lStorSet, 1000));
player.setCurrentTime(localStorage.getItem(timeCurrent) || 0)
