@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')



<div class="card">
    <div class="card-header">Podcast creating</div>

    <a class="btn btn-primary" href="{{url('admin/podcast/')}}">Go Back to List</a>

    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif

    <div class="card-body">
        <form method="POST" action="{{ route('admin.podcast.create') }}" enctype="multipart/form-data">
            @csrf

            <div class="form-group row">
                <label for="image_path" class="col-md-4 col-form-label text-md-right">Profile Image</label>

                <div class="col-md-6">
                    <input id="image_path" type="file" class="form-control" name="image_path">

                    @error('image_path')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="thumbnail" class="col-md-4 col-form-label text-md-right">{{ __('Thumbnail') }}</label>

                <div class="col-md-6">
                    <input id="thumbnail" type="text" class="form-control @error('thumbnail') is-invalid @enderror"
                        name="thumbnail" value="{{ old('thumbnail') }}" required autocomplete="thumbnail" autofocus>

                    @error('thumbnail')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                        value="{{ old('name') }}" required autocomplete="name" autofocus>

                    @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="designation" class="col-md-4 col-form-label text-md-right">{{ __('Designation') }}</label>

                <div class="col-md-6">
                    <input id="designation" type="text" class="form-control @error('designation') is-invalid @enderror"
                        name="designation" value="{{ old('designation') }}" required autocomplete="designation"
                        autofocus>

                    @error('designation')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="standard" class="col-md-4 col-form-label text-md-right">{{ __('Summary') }}</label>
                <div class="col-md-6">
                    <input id="summary" type="text" class="form-control @error('summary') is-invalid @enderror"
                        name="summary" value="{{ old('summary') }}" required autocomplete="summary" autofocus>

                    @error('summary')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row">
                <label for="standard" class="col-md-4 col-form-label text-md-right">{{ __('Youtube Link') }}</label>
                <div class="col-md-6">
                    <input id="youtube_link" type="text"
                        class="form-control @error('youtube_link') is-invalid @enderror" name="youtube_link"
                        value="{{ old('youtube_link') }}" required autocomplete="youtube_link" autofocus>

                    @error('youtube_link')
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
