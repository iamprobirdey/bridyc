<header>
    <nav class="navbar fixed-top p-0 mx-auto">
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#sidebarcollapse">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

      <a class="navbar-brand" href="#"><img class="imglogodash img-fluid" src="/images/circle-bridyc.png" alt="Bridyc logo" ></a>

      <ul class="nav">
        {{-- <li class="nav-item">
          <a class="nav-link accounticon" href="#">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link accounticon" data-trigger="focus" data-toggle="popover" data-placement="bottom" href="#">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </a>
        </li> --}}
        <li class="nav-item dropdown">
            <a class="btn btn-danger" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </li>
      </ul>
    </nav>
  </header>
