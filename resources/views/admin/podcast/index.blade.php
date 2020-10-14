@extends('admin.index')

@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and 
activities and provide access to students and parents in particular, who are looking for 
cross-training their minds before choosing an institute or a career. The platform will allow 
students to share their learnings, learn from their peers and from the people who have already 
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance in Assam, 
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school, career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career video')


@section('adminContent')

@if (session('delete'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif

<a class="btn btn-primary" href="{{url('/admin/podcast/create')}}">Create Podcast</a>
<table class="table">
    <thead>
        <tr>
            <th scope="col">Image
            <th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Summary</th>
            <th scope="col">Youtube Link</th>
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
