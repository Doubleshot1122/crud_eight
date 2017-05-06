var edit = profile.user_name ? `${profile.user_name}?_method=PUT`: ''


results.forEach(element => {
  <div class="row">
    <div class="col-md-6">
      <h3><%='element.first_name + " " +  element.last_name'%></h3>
      <p>Phone: <%= element.phone_number%></p>
      <p>Email Address: <%= element.email_address%></p>
      <p>Address 2</p>
      <a href="#">DELETE</a>
      <hr>
    </div>
  </div><!-- row end  -->
})


<p><%= results[0].first_name + " " + results[0].last_name%></p>
