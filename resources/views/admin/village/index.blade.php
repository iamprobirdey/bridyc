@extends('admin.index')

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
      <th scope="col">Slug</th>
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
          <td>{{$village->slug}}</td>
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

