@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

<a class="btn btn-primary" href="{{url('/admin/language/create')}}">Create</a>
@if (session('status'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif
<table class="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Language Name
            <th>
            <th scope="col">Code
            <th>
            <th scope="col">Update</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($language as $item)
        <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->name}}</td>
            <td>{{$item->code}}</td>
            <td>
                <a href="{{url('admin/language/updating/'.$item->id)}}" class="btn btn-success">Update</a>
            </td>
            {{-- <td>
            <a href="{{url('admin/language/delete/'.$item->id)}}" class="btn btn-danger">Delete</a>
            </td> --}}
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
