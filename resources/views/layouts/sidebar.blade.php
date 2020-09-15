
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
<<<<<<< HEAD
        <li class="nav-item">
        <a class="nav-link" href="{{route('channel.index',auth()->user()->channel->title)}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
=======
        <li class="nav-item active">
        <a class="nav-link" href="{{url('/user/dashboard')}}">
        <i class="fa fa-th-large sidebaricons" aria-hidden="true"></i>
>>>>>>> 19d61af7f9cecff55717c68ad3feee200ceb4d6c
            Dashboard
          </a>
        </li>
        <li class="nav-item">
<<<<<<< HEAD
          <a class="nav-link" href="{{route('channel.show',auth()->user()->channel->title)}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
=======
          <a class="nav-link" href="{{url('/user/dashboard/channel')}}">
          <i class="fa fa-desktop sidebaricons" aria-hidden="true"></i>
>>>>>>> 19d61af7f9cecff55717c68ad3feee200ceb4d6c
            Channel
          </a>
        </li>
        <li class="nav-item">
<<<<<<< HEAD
          <a class="nav-link" href="{{route('channel.edit',auth()->user()->channel->title)}}">
            <span class="material-icons sidebaricons">
              dashboard
              </span>
=======
          <a class="nav-link" href="{{url('/user/dashboard/edit')}}">
          <i class="fa fa-pencil-square sidebaricons" aria-hidden="true"></i>
>>>>>>> 19d61af7f9cecff55717c68ad3feee200ceb4d6c
              Edit Channel
          </a>
        </li>
        @php
           //dd(auth()->user()->channel->title);
        @endphp
        <li class="nav-item">
        <a class="nav-link" href="{{route('user.profile',auth()->user()->username)}}">
        <i class="fa fa-user-circle-o sidebaricons" aria-hidden="true"></i>
                Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{route('channel.achievement',auth()->user()->channel->title)}}">
            <i class="fa fa-trophy sidebaricons" aria-hidden="true"></i>
                    Achievement
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('channel.teacher',auth()->user()->channel->title)}}">
                      <i class="fa fa-users sidebaricons" aria-hidden="true"></i>
                        Teacher
                    </a>
            </li>
        @endif
      </ul>
    </div>
</div>
