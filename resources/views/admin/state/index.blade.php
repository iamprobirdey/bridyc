
@extends('admin.index')

@section('adminContent')

    
<a class="btn btn-primary" href="{{url('/admin/state/create')}}">Create</a>
@if (session('status'))
  <div class="alert alert-success">
      {{ session('status') }}
  </div>
@endif
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Code</th>
      <th scope="col">Slug</th>
    </tr>
  </thead>
  <tbody>
    @foreach ($states as $state)    
        <tr> 
          <td>{{$state->id}}</td>
          <td>{{$state->name}}</td>
          <td>{{$state->code}}</td>
          <td>{{$state->slug}}</td>
          <td>
            <a href="{{url('admin/state/updating/'.$state->id)}}" class="btn btn-success">Update</a>
          </td>
          {{-- <td>
            <a href="{{url('admin/state/delete/'.$state->id)}}" class="btn btn-danger">Delete</a>
          </td> --}}
        </tr>
      @endforeach
  </tbody>
</table>    
@endsection

