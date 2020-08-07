@extends('admin.index')

@section('adminContent')


<a class="btn btn-primary" href="{{url('/admin/stream/create')}}">Create</a>
@if (session('status'))
  <div class="alert alert-success">
      {{ session('status') }}
  </div>
@endif
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Stream</th>
      <th scope="col">Update</th>

    </tr>
  </thead>
  <tbody>
    @foreach ($streams as $item)    
        <tr> 
          <td>{{$item->id}}</td>
          <td>{{$item->stream}}</td>
          <td>
            <a href="{{url('admin/stream/updating/'.$item->id)}}" class="btn btn-success">Update</a>
          </td>
          {{-- <td>
            <a href="{{url('admin/stream/delete/'.$item->id)}}" class="btn btn-danger">Delete</a>
          </td> --}}
        </tr>
      @endforeach
  </tbody>
</table>
    
@endsection
