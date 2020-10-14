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

<a class="btn btn-primary" href="{{url('/admin/village/create')}}">Create</a>
@if (session('status'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif
<table class="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">State Name</th>
            <th scope="col">District Name</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($villages as $village)
        <tr>
            <td>{{$village->id}}</td>
            <td>{{$village->district->state->name}}</td>
            <td>
                {{$village->district->name}}
            </td>
            <td>{{$village->name}}</td>
            <td>{{$village->code}}</td>
            <td>
                <a href="{{url('admin/village/updating/'.$village->id)}}" class="btn btn-success">Update</a>
            </td>
            {{-- <td>
            <a href="{{url('admin/village/delete/'.$village->id)}}" class="btn btn-danger">Delete</a>
            </td> --}}
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
