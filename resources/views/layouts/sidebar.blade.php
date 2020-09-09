
<div id="sidebarcollapse" class="col-lg-2 collapse d-lg-block shadow-lg">
    <div class="left-sidebar">
      <ul class="nav flex-column sidebar-nav">
            @if (
                $verificationStatus === 0 ||
                $verificationStatus === 2
            )
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
        <a class="nav-link" href="{{url('/user/dashboard')}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{url('/user/dashboard/channel')}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
            Channel
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{url('/user/dashboard/edit')}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
              Edit Channel
          </a>
        </li>
        @php
           //dd(auth()->user()->channel->title);
        @endphp
        <li class="nav-item">
        <a class="nav-link active" href="{{route('user.profile',auth()->user()->username)}}">
              <span class="material-icons sidebaricons">
                dashboard
                </span>
                Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="{{route('channel.achievement',auth()->user()->channel->title)}}">
                  <span class="material-icons sidebaricons">
                    dashboard
                    </span>
                    Achievement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="{{route('channel.teacher',auth()->user()->channel->title)}}">
                      <span class="material-icons sidebaricons">
                        dashboard
                        </span>
                        Teacher
                    </a>
            </li>
        @endif
      </ul>
    </div>
</div>
