@extends('admin.index')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection

@section('adminContent')



<a class="btn btn-primary" href="{{route('admin.blog.category.index')}}">Go Back to List</a>


@if (session('status'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif

<form method="POST" action="{{ route('admin.blog.category.create') }}">
    @csrf

    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('name') }}</label>

        <div class="col-md-6">
            <input type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                value="{{ old('name') }}" required autocomplete="name" autofocus>

            @error('name')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>
    <div class="form-group row ">
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary">
                {{ __('Submit') }}
            </button>
        </div>
    </div>
</form>

@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>

@endsection
