//import
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

console.log(iframe);
console.log(player);
// console.log(STORAGE_KEY);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('STORAGE_KEY', JSON.stringify(data.seconds));
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('STORAGE_KEY'));
