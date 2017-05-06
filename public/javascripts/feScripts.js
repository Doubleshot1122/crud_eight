console.log("feScripts loaded");

$('#addressDropDown').change(() => {
  let selectedAddress = $('#addressDropDown option:selected').text().split(',')
  if ($('#addressDropDown').val()>0) {
    $('#line1').val(selectedAddress[0].trim())
    $('#line2').val(selectedAddress[1].trim())
    $('#city').val(selectedAddress[2].trim())
    $('#state').val(selectedAddress[3].trim())
    $('#zip').val(selectedAddress[4].trim())

  }
})
