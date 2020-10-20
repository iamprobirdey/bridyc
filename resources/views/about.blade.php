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
<link rel="stylesheet" type="text/css" href="{{url('css/about.css')}}">
@endsection
@section('content')

<div class="img-fluid imgbanabout about-faq-contact">
    <div class="txtbanner">
        <h1>About Us</h1>
        <p>Know us, know our story and the reason we exist!</p>
    </div>
</div>

<div class="mt-lg-5 pt-lg-5 container about-story">
    <h6 class="text-uppercase">Bridge your chaos</h6>
    <p>Not everyone of us is blessed enough to have the right exposure before choosing our paths
        and that creates a lot of chaos. Been there, faced ourselves and we say, "NO MORE". Bridyc is a
        bi-directional platform that works for both students/parents and institutes and help them
        ease a lot of the processes. We are dedicated to empower young minds with the real life exposure and activities
        who are looking for cross-training their minds before choosing an institute or a career.
    </p>
</div>

<div class="row about-mission mt-4 mx-0 d-flex flex-column-reverse flex-sm-row">
    <div class="col-md-8 text-mission my-auto">
        <h4 class="text-uppercase">our mission</h4>
        <p>Every student is uniquely smart. We believe that the right exposure and the right information can lead them
            to
            a happy decision. Bridyc is determined to expose you to all the possible career options, the real life
            skills and activities, helps you learn, unlearn,
            relearn and share your learnings with peer group of students.</p>
    </div>
    <div class="col-md-4 imgmission pr-0 mb-5">
        <!--img src="/images/mission.png" class="rounded img-fluid" alt="our mission image"
         srcset=""-->

        <picture>
            <source media="(min-width:1281px)" srcset="/images/mission-img-large.jpg">
            <source media="(min-width:1024px)" srcset="/images/mission-img-xsmall.jpg">
            <source media="(min-width:768px)" srcset="/images/mission-img-medium.jpg">
            <source media="(min-width:481px)" srcset="/images/mission-img-small.jpg">
            <source srcset="/images/mission-img-xsmall.jpg">
            <img src="images/mission.jpg" class="rounded float-right" alt="our mission image">
        </picture>
    </div>
</div>

<div class="row about-how mx-0">
    <div class="col-md-4 pl-0">
        <picture>
            <source media="(min-width:1281px)" srcset="/images/about-man-large.jpg">
            <source media="(min-width:1024px)" srcset="/images/about-man-xsmall.jpg">
            <source media="(min-width:768px)" srcset="/images/aboutus-mediumsc.jpg">
            <source media="(min-width:481px)" srcset="/images/about-man-small.jpg">
            <source srcset="/images/aboutus-man-xxsmall.jpg">
            <img src="images/aboutus.jpg" class="" alt="how we do it image">
        </picture>

    </div>
    <div class="col-md-8 text-how my-auto">
        <h4 class="text-uppercase text-lg-right">how do we do it?</h4>
        <p>We constantly research and post about all the possible and underrated career options
            and the way to pursue them. We host podcast with people who have already crossed those
            paths and are happy and successful in their career. We do have a forum section where
            we try to have maximum discussion and also encourage students to have peer involvement
            to solve each other’s doubts. Also, with the help of one click application, we totally
            ease the process of applying to different institute at the same time.
        </p>
    </div>
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

@endsection
