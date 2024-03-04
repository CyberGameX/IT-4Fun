function searchFunction(search_input_id, ul_id) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(search_input_id);
    filter = input.value.toUpperCase();
    ul = document.getElementById(ul_id);
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }