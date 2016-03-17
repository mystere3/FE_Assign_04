// CASH REGISTER //

var registerTotal = 0;

$('#add-button').click(function() {
  if ($('#item').val().length > 0 && $('#cost').val().length > 0) {
    addItem();
  }
})

$('#clear-button').click(function() {
  registerTotal = 0;
  $('#itemList').html('');
  $('#total').html(registerTotal.toFixed(2));
})

function addItem() {
  var item = $('#item').val();
  var price = parseFloat($('#cost').val());
  $('#itemList').append('<li>' + item + '  $' + price.toFixed(2) + '</li>');
  // console.log(registerTotal);
  registerTotal += price;
  // console.log(registerTotal);
  $('#total').html(registerTotal.toFixed(2));
}

// TO DO LIST //

var lineNumber = 0;

$('#todo-button').click(function() {
  if ($('#todo-text').val().length > 0) {
    addListItem();
  }
})

// Remove line item

$('#todo-list').on('click', 'button', function() {
  var thisID = $(this).attr('id').substring(14);
  var li_ID = "#list-li-" + thisID;
  $(li_ID).hide();
})

$('#clear-todo-button').click(function() {
  $('#todo-list').html('');
})

function addListItem() {
  lineNumber++;
  var textInput = $('#todo-text').val();
  var li_ID = "list-li-" + lineNumber;
  var removeButton_ID = 'remove-button-' + lineNumber;
  var removeButton = '<button class=\'remove-button\' id=\'' + removeButton_ID + '\'> X </button>';
  var lineItem_html = '<li id=\'' + li_ID + '\'>' + textInput + ' ' + removeButton + '</li>';
  $('#todo-list').append(lineItem_html);

}








