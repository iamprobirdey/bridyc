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


{{-- <th scope="col">Id</th>
    <th scope="col">Date</th>
    <th scope="col">Institute Name</th>
    <th scope="col">Download</th>
    <th scope="col">View</th> --}}


<table class="table table-bordered table-responsive">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">School/College Name</th>
            <th class="col-5" scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($supervisorData as $item)
        <tr>

            <th scope="row">1</th>
            <td>{{$item->channel->title}}</td>
            <td>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {{-- <a class="dropdown-item" href="#">View</a> --}}
                        <a class="dropdown-item" href="#">Download</a>
                    </div>
                </div>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
