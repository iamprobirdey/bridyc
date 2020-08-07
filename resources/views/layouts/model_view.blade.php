<div class="modal fade" id="insertInstitute">
    <div class="modal-dialog">
     
      <div class="modal-content">
        <div class="modal-header  mt-n2">
          <h5 class="modal-title">Insert your Institute*</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form action="/action_page.php">
            <div class="form-group">
              <label for="logo">Logo:</label>
              <input type="file" id="myFile">
            </div>
            <div class="form-group">
              <label for="title">Title:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext" placeholder="Enter your institute name" id="myTitle">
            </div>
            <div class="form-group">
              <label for="desc">Description:</label>
              <textarea class="form-control" rows="5" id="desc"></textarea>
            </div>
          <div class="mt-5">
          <button type="submit" class="btn btn-info float-right">Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--insert institute modal ends here-->
  
  <!--insert image modal starts here-->
  <div class="modal fade" id="insertImages">
    <div class="modal-dialog">
     
      <div class="modal-content">
        <div class="modal-header  mt-n2">
          <h5 class="modal-title">Insert Images*</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
     
        <div class="modal-body">
          <form action="/action_page.php">
            <input type="file" id="myFile">
            <div class="mt-5">
              <button type="submit" class="btn btn-info float-right">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--insert image modal ends here-->
  
  <!--contact modal starts here-->
  <div class="modal fade" id="insertcontact">
    <div class="modal-dialog">
     
      <div class="modal-content">
        <div class="modal-header  mt-n2">
          <h5 class="modal-title">Insert contact information*</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
     
        <div class="modal-body">
          <form action="/action_page.php">
            <div class="form-group">
              <label for="address">Address:</label>
              <textarea class="form-control" rows="5" id="desc"></textarea>
            </div>
            <div class="form-group">
              <label for="email">Email Id:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext" id="myEmail">
            </div>
            <div class="form-group">
              <label for="phone">Phone No:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext" id="myPhone">
            </div>
            <div class="form-group">
              <label for="fb">Facebook Page:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 socials"  id="myfacebook">
            </div>
            <div class="form-group">
              <label for="li">Linkedin Page:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 socials"  id="mylinkedin">
            </div>
            <div class="form-group">
              <label for="yt">Youtube Channel:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 socials"  id="myyoutube">
            </div>
          <div class="mt-2">
          <button type="submit" class="btn btn-info float-right">Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--contact modal ends here-->
  
  <!--additional information modal starts here-->
  <div class="modal fade" id="insertadditional">
    <div class="modal-dialog">
     
      <div class="modal-content">
        <div class="modal-header  mt-n2">
          <h5 class="modal-title">Additional Information*</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
     
        <div class="modal-body">
          <form action="/action_page.php">
            <div class="form-group">
              <label for="regd">Regd No:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext" id="myregd">
            </div>
            <div class="form-group">
              <label for="streams">Streams:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext" id="myStreams">
            </div>
            <div class="form-group">
              <label for="owner">Ownership:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext" id="myOwner">
            </div>
            <div class="form-group">
              <label for="admission">Admission Fee:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 modaltext"  id="myadmission">
            </div>
            <div class="d-flex mx-auto">
            <div class="form-group mr-5">
              <label for="monthly">Monthly Fee:</label>
              <input type="text" class="form-control mb-2 mr-sm-4 short"  id="mymonthly">
            </div>
            <div class="form-group">
              <label for="founded">Founded:</label>
              <input type="text" class="form-control mb-2 mr-sm-2 short"  id="myfounded">
            </div>
          </div>
          <div class="mt-3">
          <button type="submit" class="btn btn-info float-right">Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--social links modal ends here-->
  <!--modal ends here-->
  
  
  
  
  
  <div id="popover-content" class="shadow-lg" style="display: none;">
    <ul class="flex-column popnav">
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Change Password</a>
      </li>
      <li>
        <a href="#">Raise Ticket</a>
      </li>
    </ul>
    <hr>
    <div class="linklog"><a  href="#">Log Out</a></div>
  </div>
  