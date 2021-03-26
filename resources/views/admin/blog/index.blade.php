@extends('admin.index')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('adminContent')

<a class="badge badge-primary" href="{{route('admin.blog.category.create')}}">Create Category</a>
<a class="badge badge-success" href="{{url('admin/blog/create')}}">Create Blog</a>



@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
{{-- <script src="{{url('js/blog.js')}}"></script> --}}

@endsection
