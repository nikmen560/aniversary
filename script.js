var i = 1;
$(":header").click(function () {
  $("#container").append("<div id = 'heart'></div>");
  
  $("#photos").prepend(`<img src="./img/photo${i}.jpg" style="max-width:100%;height:40%;" alt=""></img>`);
  i++;
  

  anime({
    targets: "#heart",
    scale: function (el, index) {
      return anime.random(0.3, 0.5);
    },

    rotate: {
      value: function (el, index) {
        return anime.random(-40, 40);
      },
      duration: function (el, index) {
        return anime.random(400, 2000);
      },
      easing: "easeInOutExpo",
    },
    delay: 50,
    translateX: function (el, index) {
      return anime.random(10, 50);
    },
    translateY: function (el, index) {
      return anime.random(10, 100);
    },
    direction: "alternate",
    elasticity: 300,
    loop: true,
  });

  $("#heart").css("left", Math.random() * 260);
  $("#heart").css("top", Math.random() * 240);

});
