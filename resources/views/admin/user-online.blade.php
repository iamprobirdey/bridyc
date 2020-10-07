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
            <th scope="col">Activity</th>
            <th scope="col">Logged In</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($users as $user)
        <tr>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td>
                @if(\Carbon\Carbon::parse($user->last_activity)->diffForHumans() <= 10) <span class="text-success">
                    Online</span>
                    @else
                    <span class="text-secondary">Offline</span>
                    @endif
            </td>
            <td>{{ \Carbon\Carbon::parse($user->last_activity)->diffForHumans() }}</td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
