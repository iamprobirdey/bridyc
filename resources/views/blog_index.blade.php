@extends('student.layouts.master')

@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and
activities and provide access to students and parents in particular, who are looking for
cross-training their minds before choosing an institute or a career. The platform will allow
students to share their learnings, learn from their peers and from the people who have already
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance
in Assam,
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school,
career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website
link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for
students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career
video')


@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/faq.css')}}">
@endsection
@section('content')
</br>
</br>
</br>
</br>
<div class="container">
    <div class="row">
        <div class="col-sm-4">
            @foreach ($posts as $post)
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="blog/{{$post->image_path}}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{$post->title}}</h5>
                    <p class="card-text">{{$post->description}}</p>
                    <a href="blogs/{{$post->slug}}" class="btn btn-primary">Read More</a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

@endsection
