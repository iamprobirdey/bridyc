
<header>
    <nav class="navbar navbar-expand-lg shadow-sm fixed-top px-3">
      <a class="navbar-brand" href="{{url('/')}}"><img class="imglogo img-fluid" src="/images/circle-bridyc.png" alt="Bridyc logo" ></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <i class="fa fa-bars colbtn" aria-hidden="true"></i>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="{{url('/')}}">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('/application')}}">Application</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('/faq')}}">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('/contact')}}">Contact Us</a>
          </li>
        </ul>
        @if (auth()->check() && auth()->user()->user_type === 'institute')
          <a class="btn btn-primary" data-trigger="focus" data-toggle="popover" data-placement="bottom" href="/user/dashboard">
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
