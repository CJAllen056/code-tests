splitAddresses = function() {
  var address = $(".entryAddress");

  address.each(function() {
    var content = $(this).html().split(",");

    $(this).html("");

    for (var i = 0; i < content.length; i++) {
      $(this).append("<p>" + content[i] + "</p>");
    }
  });
};

main = function() {
  splitAddresses();
};

$(main);
