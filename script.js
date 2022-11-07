console.log("piyush");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs-1/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs_1 = [
  {
    songName: "Blue Bird",
    filePath: "songs-1/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "DEATH Note",
    filePath: "songs-1/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "FLY HIGH",
    filePath: "songs-1/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Good Morning World",
    filePath: "songs-1/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Guren No Yumiya",
    filePath: "songs-1/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Gurenge",
    filePath: "songs-1/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Hikaru Nara",
    filePath: "songs-1/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Kyouran Hey Kids",
    filePath: "songs-1/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Love Dramatic Feat Rikka Ihara",
    filePath: "songs-1/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Unravel-Tokyo Ghoul",
    filePath: "songs-1/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs_1[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs_1[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs-1/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs_1[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs-1/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs_1[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs-1/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs_1[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
