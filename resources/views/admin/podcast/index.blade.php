@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

@if (session('status'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif

<a class="btn btn-primary" href="{{url('/admin/podcast/create')}}">Create Podcast</a>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Image</th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Summary</th>
            <th scope="col">Youtube Link</th>
            <th scope="col">Time of update</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($podcasts as $item)
        <tr>
            <td>
                <img src="{{asset('podcast/'.$item->image_path)}}" height="40" width="40"></img>
            </td>
            <td> {{ $item->thumbnail }} </td>
            <td> {{ $item->name }} </td>
            <td> {{ $item->designation }} </td>
            <td> {{ $item->summary }} </td>
            <td> {{ $item->youtube_link }} </td>
            <td> {{ $item->created_at->diffForHumans() }} </td>
            <td>
                <a href="{{url('admin/podcast/updating/'.$item->id)}}" class="btn btn-primary">Update</a>
            </td>
            <td>
                <a href="{{url('admin/podcast/delete/'.$item->id)}}" class="btn btn-danger">Delete</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
