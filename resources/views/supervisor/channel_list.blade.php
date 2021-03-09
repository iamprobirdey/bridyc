@extends('supervisor.index')


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


@section('supervisorContent')


{{--

    <th scope="col">Id</th>
    <th scope="col">Date</th>
    <th scope="col">Institute Name</th>
    <th scope="col">Download</th>
    <th scope="col">View</th> --}}


<table class="table table-bordered table-responsive">
    <thead>
        <tr>
            <th scope="col-1" scope="col">ID</th>
            <th scope="col-3" scope="col">Date</th>
            <th scope="col-4" scope="col">School/College Name</th>
            <th scope="col-2" scope="col">View</th>
            <th class="col-2" scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($supervisorData as $item)
        <tr>
            <th scope="row">{{$item->id}}</th>
            <td>{{$item->created_at->diffForHumans()}}</td>
            <td>{{$item->channel->title}}</td>
            <td>
                <a class="btn btn-primary" href="{{url('supervisor/view/' . $item->id)}}">
                    <img class="svgAction" src="/images/custom/icons/eye.svg" alt=""></a>
            </td>
            <td>
                <a class="btn btn-success" href="{{url('supervisor/pdf/' . $item->id)}}">
                    <img class="svgAction" src="/images/custom/icons/download.svg" alt=""></a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>



@endsection