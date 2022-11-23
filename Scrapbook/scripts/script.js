document.querySelector('header .fa-bars').addEventListener('click', function () {
  document.querySelector('header nav').classList.toggle('open')
})

document.querySelector('header .fa-times').addEventListener('click', function () {
  document.querySelector('header nav').classList.toggle('open')
})



function changeImg() {
  var image = document.getElementById('myImg');
  if (image.src.match("./images/Mug.svg")) {
      image.src = "./images/Coffee2.svg";
  }
  else {
      image.src = "./images/Mug.svg";
  }
}


vara = new Vara(
  "#container", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
);

vara.ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
      console.log((this).parent(".paper").index())
  });
});
