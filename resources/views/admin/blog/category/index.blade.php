@extends('admin.index')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('adminContent')
<a class="badge badge-primary" href="{{route('admin.blog.index')}}">Go back to Blog</a>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($categories as $item)
        <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->name}}</td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>

@endsection
