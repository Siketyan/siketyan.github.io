$(document).ready(
  function() {
    $("#intro-text").html("");

    var now = 0;
    var chars = new Array("/", "/", " ", "W", "e", "b ", "D", "e", "s", "i", "g", "n", "e", "r",
                          ",  ", "S", "o", "f", "t", "w", "a", "r", "e ", "D", "e", "v",
                          "e", "l", "o", "p", "e", "r");
    var interval = setInterval(
      function() {
        if (now == 32) clearInterval(interval);
        if (now == 1) $("#intro-text").addClass("comment");

        $("#intro-text").append(chars[now]);
        now++;
      }, 130
    );
  }
);

function add($char) {
  
}