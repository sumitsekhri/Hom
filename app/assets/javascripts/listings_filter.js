$(function(){


  // $('#pets_btn').on('click', function(){
  //   console.log('checked');
  //   if ($('#pets_btn').is(':checked')){
  //     $('.pets:contains(false)').parent('tr').hide();
  //   } else  {
  //     $('.pets:contains(false)').parent('tr').show();

  //   }
  // });

  $('#filter_form').on('submit', function(event){
    event.preventDefault;
    var city = $('#city').val();
    var input = $(this).serialize();
    
    $.ajax({
      url: '/listings/results?' + input, 
      dataType: "json", 
      success: function(data, status){

        $('#listing_results').html("");
        if (data){
          data.forEach(function(result){
            var tr = $("<tr>");
            var td = $("<td>").text(result.user_id).appendTo(tr);
            var td = $("<td>").text(result.square_footage).appendTo(tr);
            var td = $("<td>").text(result.bedroom).appendTo(tr);
            var td = $("<td>").text(result.bathroom).appendTo(tr);
            var td = $("<td>").text(result.price).appendTo(tr);
            var td = $("<td>").text(result.address).appendTo(tr);
            var td = $("<td>").text(result.furnished).appendTo(tr);
            var td = $("<td>").text(result.pets).appendTo(tr);
            var td = $("<td>").text(result.smoking).appendTo(tr);
            var td = $("<td>").text(result.floor_number).appendTo(tr);
            var td = $("<td>").text(result.parking_space).appendTo(tr);
            var td = $("<td>").text(result.storage_space).appendTo(tr);
            var td = $("<td>").text(result.balcony).appendTo(tr);
            var td = $("<td>").text(result.available_date).appendTo(tr);
            var td = $("<td>").text(result.minimum_lease).appendTo(tr);
            var td = $("<td>").text(result.image).appendTo(tr);
            var td = $("<td>").text(result.title).appendTo(tr);
            var td = $("<td>").text(result.rental_type).appendTo(tr);
            var td = $("<td>").text(result.description).appendTo(tr);
            tr.appendTo('#listing_results')
          });
        }
      }
    })

    return false;
    });

});