class Helper {
  playPauseAndUpdate( song ) { //method
    player.playPause( song ); // calling the method
    const totalTime = player.getDuration();
    $('#time-control .total-time').text(totalTime);
  }
}

const helper = new Helper();
