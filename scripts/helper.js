class Helper {
  playPauseAndUpdate( song ) { //method
    player.playPause( song ); // calling the method
    const totalTime = player.getDuration(); // update time
    $('#time-control .total-time').text(totalTime); // update time
  }
}

const helper = new Helper();
