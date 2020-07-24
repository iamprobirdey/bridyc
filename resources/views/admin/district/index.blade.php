@extends('admin.index')

@section('adminContent')

<a class="btn btn-primary" href="{{url('/admin/district/create')}}">Create</a>
@if (session('status'))
  <div class="alert alert-success">
      {{ session('status') }}
  </div>
@endif
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">State</th>
      <th scope="col">Name</th>
      <th scope="col">Code</th>
    </tr>
  </thead>
  <tbody>
    @foreach ($districts as $district)    
        <tr> 
          <td>{{$district->id}}</td>
          <td>
              {{$district->state->name}}
          </td>
          <td>{{$district->name}}</td>
          <td>{{$district->code}}</td>
          <td>
            <a href="{{url('admin/district/updating/'.$district->id)}}" class="btn btn-success">Update</a>
          </td>
          {{-- <td>
            <a href="{{url('admin/district/delete/'.$district->id)}}" class="btn btn-danger">Delete</a>
          </td> --}}
        </tr>
      @endforeach
  </tbody>
</table>    

@endsection
