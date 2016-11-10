splitAddresses = function() {
  var address = $(".entryAddress");

  address.each(function() {
    var content = $(this).html().split(",");

    $(this).html("");

    for (var i = 0; i < content.length; i++) {
      $(this).append("<p>&nbsp;&nbsp;&nbsp;" + content[i] + "</p>");
    }
  });
};

setEditAddress = function() {
  var address = $("#entry_address_1").val();
  var content = address.split(",");

  for (var i = 0; i < content.length; i++) {
    $("#entry_address_" + (i + 1)).val(content[i]);
  }
};

main = function() {
  splitAddresses();
  setEditAddress();
};

$(main);
