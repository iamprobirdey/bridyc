
<div id="sidebarcollapse" class="col-lg-2 collapse d-lg-block shadow-lg">
    <div class="left-sidebar">
      <ul class="nav flex-column">
            @if (
                $verificationStatus === 0 ||
                $verificationStatus === 2
            )
        <li class="nav-item active">
          <a class="nav-link " href="{{url('/user/dashboard/verification')}}">
          <i class="fa fa-check-square sidebaricons" aria-hidden="true"></i>
                Verification
            </a>
          </li>
        @else
        @php
            $channelTitle = auth()->user()->channel->title;
        @endphp
        <li class="nav-item active">
        <a class="nav-link" href="{{url('/user/dashboard/'.$channelTitle)}}">
        <i class="fa fa-th-large sidebaricons" aria-hidden="true"></i>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{url('/user/dashboard/channel/'.$channelTitle)}}">
          <i class="fa fa-desktop sidebaricons" aria-hidden="true"></i>
            Channel
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{url('/user/dashboard/edit/'.$channelTitle)}}">
          <i class="fa fa-pencil-square sidebaricons" aria-hidden="true"></i>
              Edit Channel
          </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="{{route('user.profile',auth()->user()->username)}}">
        <i class="fa fa-user-circle-o sidebaricons" aria-hidden="true"></i>
                Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{route('channel.achievement',$channelTitle)}}">
            <i class="fa fa-trophy sidebaricons" aria-hidden="true"></i>
                    Achievement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('channel.teacher',$channelTitle)}}">
                      <i class="fa fa-users sidebaricons" aria-hidden="true"></i>
                        Teacher
                    </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('channel.feature',$channelTitle)}}">
                      <i class="fa fa-users sidebaricons" aria-hidden="true"></i>
                        New Feature
                    </a>
            </li>
        @endif
      </ul>
    </div>
</div>
