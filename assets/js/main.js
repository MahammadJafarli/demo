
$(document).ready(function(){
  // $(function() {
  //     $('.birthdate').daterangepicker({
  //         singleDatePicker: true,
  //         showDropdowns: true
  //     },
  //     function(start, end, label) {
  //         var years = moment().diff(start, 'years');
  //         alert("You are " + years + " years old.");
  //     });
  // });
  $('.birthdate').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    startDate:'01/01/2016',
    endDate:'01/01/2130',
  });
});
