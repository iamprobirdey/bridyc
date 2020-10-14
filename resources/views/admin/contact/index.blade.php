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

<table class="table">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Date</th>
            <th scope="col">Enquiry done</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($contacts as $item)
        <tr>
            <td> {{ $item->name }} </td>
            <td> {{ $item->email }} </td>
            <td> {{ $item->phone }} </td>
            <td> {{ $item->message }} </td>
            <td> {{ $item->created_at->diffForHumans() }} </td>
            <td>
                @if ($item->enquired === 'not-checked')
                <a class="btn btn-danger" href="{{ route('enquiry',$item->id) }}" onclick="event.preventDefault();
                                document.getElementById('contact-enquiry-form').submit();">
                    Enquiry pending
                </a>
                <form id="contact-enquiry-form" action="{{ route('enquiry',$item->id) }}" method="POST"
                    style="display: none;">
                    @csrf
                </form>
                @else
                <button class="btn btn-success">Done enquiry</button>
                @endif
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
