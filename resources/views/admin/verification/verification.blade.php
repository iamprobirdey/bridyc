@extends('admin.index')

@section('adminContent')
      <div id="admin-verification">
          <br>
          <br>
          <admin-verification
            :users="{{json_encode($users)}}">
        </admin-verification>
      </div>
@endsection

@section('js_code')
  <script src="{{url('js/app.js')}}"></script>
  <script src="{{url('js/adminVerification.js')}}"></script>
@endsection
