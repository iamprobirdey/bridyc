<header>
    <nav class="navbar fixed-top p-0 mx-auto border-gradient border-gradient-color">
      <button class="navbar-toggler collapsed d-lg-none" data-toggle="slide-collapse" data-target="#sidebarcollapse" aria-expanded="false">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

      <a class="navbar-brand" href="/"><img class="imglogodash img-fluid" src="/images/circle-bridyc.png" alt="Bridyc logo" ></a>

      <ul class="nav">
        {{-- <li class="nav-item">
          <a class="nav-link accounticon" href="#">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </a>
        </li> --}}
        @if (Auth::guard('admin')->check())
            <li class="nav-item ">
                <a class="btn btn-danger" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </li>
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
        @endif
      </ul>
    </nav>
  </header>
