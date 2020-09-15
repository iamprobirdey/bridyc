
<header>
    <nav class="navbar navbar-expand-md shadow-sm fixed-top px-3">
      <a class="navbar-brand" href="{{url('/')}}"><img class="imglogo img-fluid" src="/images/bridyc white logo.png" alt="Bridyc logo" ></a>

      <button class="navbar-toggler collapsed" type="button" data-toggle="slide-collapse" data-target="#collapsibleNavbar" aria-expanded="false">
        <i class="fa fa-bars colbtn" aria-hidden="true"></i>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <button type="button" class="close closemenu" aria-label="Close">
               <span aria-hidden="true">&times;</span>
          </button>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{url('/')}}"> Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('/application')}}"> Application</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('/faq')}}"> FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{url('/contact')}}"> Contact Us</a>
                </li>
            </ul>

            @if (auth()->check() && auth()->user()->isStudent())
                <a class="btn btn-primary" href="{{url('/edit/profile/'.auth()->user()->username)}}">Profile</a>
            @endif


            @if (auth()->check() && auth()->user()->isInstitute())
                <a class="btn btn-primary" data-trigger="focus" data-toggle="popover" data-placement="bottom" href="{{route('channel.index',auth()->user()->channel->title)}}">
                    Dashboard
                </a>
            @endif
            @if (Auth::check())
                <a class="btn btn-danger" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            @else
                <button type="button" id="lognsign" class="btn ml-auto navbtn" data-toggle="modal" data-target="#regForm">Login/Register</button>
            @endif
      </div>
      </nav>
</header>
