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
<link rel="stylesheet" type="text/css" href="{{url('css/blogs.css')}}">
@endsection
@section('content')
<br>
<br>
<br>
<br>
<div class="blog1" id="blog-wrapper">

      <div class="blog-content-wrapper">
      <div class="container">
      <div class="row">
      <div class="col-lg-12">
      <div class="d-flex">
            <h4 class="">bridYC blog posts</h4>
            <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
      </div>
      <hr class="mt-n1">
          <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
      </div>
      </div>
      </div>
      </div>

      <div class="blog-sidebar">
          <ul>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          <li> vdkjvnkdnvk</li>
          
          </ul>
      </div>
            
</div>
@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

<script type="text/javascript">
 function openNav(){
     var wrapper = document.getElementById("blog-wrapper");
     wrapper.classList.add("toggled");
 }
</script>
@endsection
