var i = 1;
$(document).click(function () {
  $("#container").append("<div id = 'heart'></div>");
  $("#button").text("продолжай")

  if (i !== 13) {
    $("#photos").prepend(
      `<img src="./img/photo${i}.jpg" style="max-width:100%;height:40%;" alt=""></img>`
    );
    i++;
  } else {
    $("#photos").remove();
    $("#button").remove();
    $("#container").append(
      `<h3>Жду тебя, кисик, здесь, в загнивающей европке, люблю целую &#128147</h3>`
    );
  }

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
