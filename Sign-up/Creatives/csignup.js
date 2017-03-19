function run(){
  var chipList = document.querySelector('.chipList');
  var submit = document.querySelector('.submit');
  var addChip = document.querySelector('#add').value;
  var newChip = "<li class='chips'>" + addChip + "</li>";
  $(newChip).appendTo(chipList);
  return false;
};