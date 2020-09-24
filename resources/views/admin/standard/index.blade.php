@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

<a class="btn btn-primary" href="{{url('/admin/standard/create')}}">Create</a>
@if (session('status'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif
<table class="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Standard Name
            <th>
            <th scope="col">Update</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($standards as $item)
        <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->standard_name}}</td>
            <td>
                <a href="{{url('admin/standard/updating/'.$item->id)}}" class="btn btn-success">Update</a>
            </td>
            {{-- <td>
            <a href="{{url('admin/standard/delete/'.$item->id)}}" class="btn btn-danger">Delete</a>
            </td> --}}
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
