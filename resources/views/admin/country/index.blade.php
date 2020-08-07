
@extends('admin.index')

@section('adminContent')

@if($countries->isEmpty())
  <a class="btn btn-primary" href="{{url('/admin/country/create')}}">Create</a>
@endif
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
    @foreach ($countries as $country)    
        <tr> 
          <td>{{$country->id}}</td>
          <td>{{$country->name}}</td>
          <td>{{$country->code}}</td>
          <td>{{$country->slug}}</td>
          <td>
            <a href="{{url('admin/country/updating/'.$country->id)}}" class="btn btn-success">Update</a>
          </td>
        </tr>
      @endforeach
  </tbody>
</table>    
@endsection

