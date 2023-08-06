let a = confirm("Krishna please Click on the Screen Once.... after clicking OK")
  var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        r_size +
        "px;height:" +
        r_size +
        "px;left:" +
        r_left +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        r_bg +
        ",1);-webkit-animation:love " +
        r_time +
        "s ease;-moz-animation:love " +
        r_time +
        "s ease;-ms-animation:love " +
        r_time +
        "s ease;animation:love " +
        r_time +
        "s ease'></div>"
    );

    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        (r_size - 10) +
        "px;height:" +
        (r_size - 10) +
        "px;left:" +
        (r_left + r_num) +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        (r_bg + 25) +
        ",1);-webkit-animation:love " +
        (r_time + 5) +
        "s ease;-moz-animation:love " +
        (r_time + 5) +
        "s ease;-ms-animation:love " +
        (r_time + 5) +
        "s ease;animation:love " +
        (r_time + 5) +
        "s ease'></div>"
    );
  }, 500);

  var i = 0;
  var txt1 =
    "Hi Krishna.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           >You are more handsome than spring flowers, < if I were talented,  <<                  I would write hundreds of poems < dedicated to your beauty....! <<                           You are better than the best because...!                                                     > with your beauty and sweet, caring heart, nobody beats you to it...!                                                                                 >You are Beautifull <Smiling star Krishna😀.....! |                  <<<< You can win anybodies heart with your Smile...!";
  var speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {
      if (txt1.charAt(i) == "<")
        document.getElementById("text1").innerHTML += "</br>";
      else if (txt1.charAt(i) == ">")
        document.getElementById("text1").innerHTML = "";
      else if (txt1.charAt(i) == "|") {
        $(".bg_heart").css(
          "background-image",
          "url('../../Downloads/1169130.png')"
        );
      } else document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
let start = ()=>{
 let audio = document.querySelector("audio")
 audio.autoplay = true;
 audio.src = "./piano.mp3";
 document.body.appendChild(audio);
}