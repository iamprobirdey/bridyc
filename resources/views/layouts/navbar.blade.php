<header>
    <nav class="navbar fixed-top p-0 mx-auto border-gradient border-gradient-color">
      <button class="navbar-toggler collapsed" data-toggle="slide-collapse" data-target="#sidebarcollapse" aria-expanded="false">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

      <a class="navbar-brand" href="/"><img class="imglogodash img-fluid" src="/images/circle-bridyc.png" alt="Bridyc logo" ></a>

      <ul class="nav">
        {{-- <li class="nav-item">
          <a class="nav-link accounticon" href="#">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </a>
        </li> --}}
        @if (Auth::check())
            <a class="btn btn-danger mr-3" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                <i class="fa fa-sign-out" aria-hidden="true"></i> {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        @endif
      </ul>
    </nav>
  </header>
