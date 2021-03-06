import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('play', function() {
    console.log('played the video!');
});
player.getVideoTitle().then(function (title) {
    console.log('title: ', title);
});

player.on('timeupdate', throttle(event => {
    console.log(event.seconds);
    localStorage.setItem('videoplayer-current-time', event.seconds)
}, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));