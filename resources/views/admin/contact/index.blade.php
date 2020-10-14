@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


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
