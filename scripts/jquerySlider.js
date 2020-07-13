$("#minPrice,#maxPrice").on('change', function () {
  let minPriceRange = parseInt($("#minPrice").val().replace(/\s/g, ''));

  let maxPriceRange = parseInt($("#maxPrice").val().replace(/\s/g, ''));

  if (minPriceRange > maxPriceRange) {
    $('#maxPrice').val(formatANumberToString(minPriceRange));
    maxPriceRange = minPriceRange;
  }

  $("#slider-range").slider({
    values: [minPriceRange, maxPriceRange]
  });

  $("#minPrice").val(formatANumberToString(minPriceRange));
  $("#maxPrice").val(formatANumberToString(maxPriceRange));

});

function formatANumberToString(num) {
  return num.toString().replace(/\B(?=(?:\d{3})+$)/g, ' ');
}

$("#slider-range").slider({
  range: true,
  min: 0,
  max: 1000000,
  step: 1000,
  values: [1000, 1000000],
  slide: function (event, ui) {
    let minPrice = formatANumberToString(ui.values[0]);
    let maxPrice = formatANumberToString(ui.values[1]);
    $("#minPrice").val(minPrice);
    $("#maxPrice").val(maxPrice);
  }
});

const values = $('#slider-range').slider('values');
$("#minPrice").val(formatANumberToString(values[0]));
$("#maxPrice").val(formatANumberToString(values[1]));

