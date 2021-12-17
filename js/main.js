$(document).ready(function () {
  $("#btn").click(function () {
    $.get("https://akademia108.pl/api/ajax/get-post.php").done(function (data) {
      let parId = $("<p></p>").text(`Post ID: ${data.id}`);
      let parUserId = $("<p></p>").text(`User ID: ${data.userId}`);
      let parTitle = $("<p></p>").text(`Title: ${data.title}`);
      let parBody = $("<p></p>").text(`Body: ${data.body}`);

      let jqBody = $("body");

      jqBody.append(parId);
      jqBody.append(parUserId);
      jqBody.append(parTitle);
      jqBody.append(parBody);
    });

    $.getJSON(" https://akademia108.pl/api/ajax/get-post.php").done(function (
      data
    ) {
      let parId = $("<p></p>").text(`Post ID: ${data.id}`);
      let parUserId = $("<p></p>").text(`User ID: ${data.userId}`);
      let parTitle = $("<p></p>").text(`Title: ${data.title}`);
      let parBody = $("<p></p>").text(`Body: ${data.body}`);

      let jqBody = $("body");

      jqBody.append(parId);
      jqBody.append(parUserId);
      jqBody.append(parTitle);
      jqBody.append(parBody);
    });
  });
});
