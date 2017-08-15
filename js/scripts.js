function countUpBy(countTo, countBy) {
  var counts = [];
  for (var i = countBy; i <= countTo; i+=countBy) {
    counts.push(i);
  }
  return counts;
}

$(document).ready(function () {
  $('#counts').submit(function (event) {
    event.preventDefault();
    var countTo = parseInt($('#count-to').val());
    var countBy = parseInt($('#count-by').val());
    var counts = countUpBy(countTo, countBy);
    alert(counts);
  });

});
