@extends('admin.index')

@section('adminContent')

<a class="btn btn-primary" href="{{url('/admin/board/create')}}">Create</a>
@if (session('status'))
  <div class="alert alert-success">
      {{ session('status') }}
  </div>
@endif
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Board Name<th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    @foreach ($boards as $item)    
        <tr> 
          <td>{{$item->id}}</td>
          <td>{{$item->name}}</td>
          <td>
            <a href="{{url('admin/board/updating/'.$item->id)}}" class="btn btn-success">Update</a>
          </td>
          
        </tr>
      @endforeach
  </tbody>
</table>
    
@endsection

