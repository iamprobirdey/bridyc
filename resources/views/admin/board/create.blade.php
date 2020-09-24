@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

<div class="card">
    <div class="card-header">Board creating</div>

    <a class="btn btn-primary" href="{{url('admin/board/')}}">Go Back to List</a>

    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif

    <div class="card-body">
        <form method="POST" action="{{ route('admin.board.create') }}">
            @csrf

            <div class="form-group row">
                <label for="board" class="col-md-4 col-form-label text-md-right">{{ __('board') }}</label>

                <div class="col-md-6">
                    <input id="board" type="text" class="form-control @error('board') is-invalid @enderror" name="board"
                        value="{{ old('board') }}" required autocomplete="board" autofocus>

                    @error('board')
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
