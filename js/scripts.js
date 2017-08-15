function countUpBy(countTo, countBy) {
  if (countTo > 0 && countBy > 0 && countTo >= countBy) {
    var counts = [];
    for (var i = countBy; i <= countTo; i+=countBy) {
      counts.push(i);
    }
    return counts;
  } else { // Invalid input
    return undefined;
  }
}

$(document).ready(function () {
  $('#counts').submit(function (event) {
    event.preventDefault();
    var countTo = parseInt($('#count-to').val());
    var countBy = parseInt($('#count-by').val());
    var counts = countUpBy(countTo, countBy);
    if (counts) {
      counts.forEach(function(count) {
        $(".answer").append("<li>" + count + "</li>");
      });
    } else {
      $(".invalid-input").show();
    }
  });
});
