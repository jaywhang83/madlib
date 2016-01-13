$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(index) {
      var userInput = $("input#" + index).val();
      $("." + index).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
