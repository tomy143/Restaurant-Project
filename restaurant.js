$(document).ready(main);
  function main() {
  $('.information').hide();
  $('.information-button').on('click', function() {
  $(this).next().slideToggle(400);
});
}
