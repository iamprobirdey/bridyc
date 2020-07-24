<div id="sidebarcollapse" class="col-lg-2 collapse d-lg-block sidebar shadow-lg">
    <div class="left-sidebar">
      <ul class="nav flex-column sidebar-nav">
            @if (
                $verification->status === 0 ||
                $verification->status === 1 ||
                $verification->status === 3
            )
            @php
                //redirect('user/dashboard/verification');
            @endphp
        <li class="nav-item">
          <a class="nav-link active" href="{{url('/user/dashboard/verification')}}">
              <span class="material-icons sidebaricons">
                dashboard
                </span>
                Verification
            </a>
          </li>
        @else
        <li class="nav-item">
        <a class="nav-link active" href="{{url('/user/dashboard')}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="{{url('/user/dashboard/channel')}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
            Channel
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="{{url('/user/dashboard/edit')}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
              Edit Channel
          </a>
        </li>
        @endif
      </ul>
    </div>
</div>
