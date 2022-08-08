import {Howl, Howler} from 'howler';
const {Howl, Howler} = require('howler');


// var sound = new Howl({
//     src: ['https://www.dropbox.com/s/vdgccnl2zepun76/hidatsa_clip.mp3?dl=0/'],
//     volume: 0.8
//   });
  
//   sound.play();

  $(function(){

	var howler_example = new Howl({
		src: ['https://www.dropbox.com/s/vdgccnl2zepun76/hidatsa_clip.mp3?dl=0/'],
		volume: 0.5
	});

	$("#howler-play").on("click", function(){
		howler_example.play();
	});

	$("#howler-pause").on("click", function(){
		howler_example.pause();
	});

	$("#howler-stop").on("click", function(){
		howler_example.stop();
	});

	$("#howler-volup").on("click", function(){
		var vol = howler_example.volume();
		vol += 0.1;
		if (vol > 1) {
			vol = 1;
		}
		howler_example.volume(vol);
	});

	$("#howler-voldown").on("click", function(){
		var vol = howler_example.volume();
		vol -= 0.1;
		if (vol < 0) {
			vol = 0;
		}
		howler_example.volume(vol);
	});

});