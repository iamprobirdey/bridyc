@extends('student.layouts.master')

@section('title', 'BUY.SELL.RENT Preowned Items Online in the UAE|YallaBargain')
@section('desc', 'An online marketplace to buy, sell, rent used/pre-owned and unique products for both individuals and
businesses in the UAE. Listings are completely free. The main categories include Used Electronics, Pre-owned Furniture,
Preloved Fashion & Accessories, Unique Home Decor & Garden Items, Select Music & Books, Sports & Fitness Equipment,
Collectibles, Baby & Toy Rentals, free motor & property classifieds & more. YallaBargain.com - BUY.SELL.RENT.Pre-owned -
DO IT ALL')
@section('keywords', 'Buy Used Items in the UAE, Buy Pre-owned Products in the UAE, Sell used items online, sell used
items dubai, rent products online in dubai, hire products in the UAE, sell used electronics online in dubai, sell used
furniture in the uae, buy luxury pre-owned products in UAE, Used Electronics dubai, Pre-owned Furniture sharjah,
Preloved Fashion & Accessories uae, Unique Home Decor & Garden Items dubai,Music & used Books buy online, Sports &
Fitness Equipment rentals dubai, Collectibles, Baby & Toy Rentals, free motor & property classifieds in UAE')

@section('s_url', url('/'))
@section('s_type', '')
@section('s_title', 'BUY.SELL.RENT Preowned Items Online in the UAE|YallaBargain')
@section('s_desc', 'An online marketplace to buy, sell, rent used/pre-owned and unique products for both individuals and
businesses in the UAE. Listings are completely free. The main categories include Used Electronics, Pre-owned Furniture,
Preloved Fashion & Accessories, Unique Home Decor & Garden Items, Select Music & Books, Sports & Fitness Equipment,
Collectibles, Baby & Toy Rentals, free motor & property classifieds & more. YallaBargain.com - BUY.SELL.RENT.Pre-owned -
DO IT ALL')
@section('s_img', url('/storage/menu-banners/May2018/0CP0rMbxhKP915c7z6Fp.jpg'))

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/index.css')}}">
@endsection
@section('content')

<banner>

    <div class="img-fluid imgban">
        <div class="txtbanner">
            <h1>Exposure to the realities of the world is very important</h1>
            <p class="sitevalue">Learn | Share | Engage | Find Institute</p>
            <p>And we charge you <strong>Nothing</strong></p>
            <br>
            <a href="{{route('about')}}" class="p-2 p-md-3">Read More</a>
        </div>
    </div>
    <div class="container focusplace">
        <div class="row">
            @if ($podcast != null)

            <div class="col-lg-4">
                <img class="imgguest shadow-lg" src="{{asset('podcast/'.$podcast->image_path)}}" alt="guest photo">
            </div>
            <div class="col-md-8">
                <div class="videosection">
                    <h2>"{{$podcast->thumbnail}}"</h2>
                    <div class="guest mx-auto mt-3">
                        <h2>Guest: {{$podcast['name']}}</h2>
                        <h6>{{$podcast->designation}}</h6>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        {{$podcast->created_at->diffForHumans()}} | 16 min | Season 1
                    </div>
                    <br>
                    <p>
                        {{$podcast->summary}}
                    </p>

                    <button class="btn playbtn" data-toggle="modal" data-src="{{$podcast->youtube_link}}"
                        data-target="#podcastModal"><img src="/images/play.svg"> Watch Now</button>
                </div>
            </div>
            @endif
        </div>
    </div>
</banner>

<div class="modal fade" id="podcastModal">
    <div class="modal-dialog poddialog">
        <div class="modal-content">
            <div class="modal-body podbody">
                <button type="button" class="close closevideo" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                        allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>



<!--div id="channel">
    <channel :channel="{{json_encode($channel)}}"></channel>
</div>

<br>
<section>
    <div class="container-fluid">
        <div class="row aboutdiv mx-auto">
            <div class="col-lg-3">
                <img src="images/aboutimg.png" alt="girl sitting home" class="imgdes">
            </div>
            <div class="col-lg-9 aboutdesc">
                <h4>Find your institute here!</h4>
                <hr>
                <p>
                    Bridyc helps students get admission in the school of their
                    choice, we provide information to students and parents regarding the best
                    courses, Graduation, Post-graduation and other education programmes available.
                    We arrange meetings with the concerned college
                    officials to ease up the college admission process.
                </p>
            </div>
        </div>
    </div>
</section-->

<br>
<section>
    <div class="container-fluid">
        <div class="aboutdesc mx-auto">
            <h4>SCHOOLS AND COLLEGES</h4>

            <p>
                Look out for the right institute for you or your kids. Visit the institute you like
                and find out more about them.
            </p>
        </div>
    </div>
</section>


<div id="channel">
    <channel :channel="{{json_encode($channel)}}"></channel>
</div>

@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/channel.js')}}"></script>

@endsection
