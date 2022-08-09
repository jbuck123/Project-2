// import {Howl, Howler} from 'howler';
// const {Howl, Howler} = require('howler');

var sfx = {
    push: new Howl({
        src: [

        ]
    })
}

var music = { 
    overworld: new Howler({
      src: ['../howler_page/hidatsa_clip.mp3'],
        html5: true
    })
};
 

(function() {
    document.querySelector(".play-music").addEventListener("click", ()=> {
        console.log("I was clicked")
        if (!music.overworld.playing()) {
        music.overworld.play();
        }
    })
    document.querySelector(".stop-music").addEventListener("click", ()=> {
        music.overworld.pause();
    })

})();