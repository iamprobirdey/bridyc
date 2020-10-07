@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

<div class="card">
    <div class="card-header">Stream creating</div>

    <a class="btn btn-primary" href="{{url('admin/stream/')}}">Go Back to List</a>

    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif

    <div class="card-body">
        <form method="POST" action="{{ route('admin.stream.create') }}">
            @csrf

            <div class="form-group row">
                <label for="stream" class="col-md-4 col-form-label text-md-right">{{ __('Stream') }}</label>

                <div class="col-md-6">
                    <input id="stream" type="text" class="form-control @error('stream') is-invalid @enderror"
                        name="stream" value="{{ old('stream') }}" required autocomplete="stream" autofocus>

                    @error('stream')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                        {{ __('Submit') }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

@endsection
