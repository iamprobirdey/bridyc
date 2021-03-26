@extends('admin.index')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
@endsection

@section('adminContent')

<a class="badge badge-primary" href="{{route('admin.blog.category.create')}}">Create Category</a>

<a class="badge badge-success" href="{{route('admin.blog.index')}}">Return to Blog</a>

@if (session('status'))
<div class="alert alert-success">
    {{ session('status') }}
</div>
@endif
</br>
</br>
</br>
</br>
</br>
</br>
<form method="POST" action="{{ route('admin.blog.create') }}" enctype="multipart/form-data">
    @csrf

    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-primary">{{ __('Title') }}</label>

        <div class="col-md-12">
            <input type="text" class="form-control @error('title') is-invalid @enderror" name="title"
                value="{{ old('title') }}" required autocomplete="title" autofocus>

            @error('title')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="image_path" class="col-md-4 col-form-label text-primary">Blog Image</label>

        <div class="col-md-6">
            <input id="image_path" type="file" class="form-control" name="image_path" accept="image/*">

            @error('image_path')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="category" class="col-md-12 col-form-label text-primary">Select the Category <span
                class="text-dark">(Hold Control key from the keyboard for multiple select)</span> </label>

        <div class="col-md-12">
            <select name="category[]" multiple="" class="form-control " @error('Category') is-invalid @enderror
                required>
                @foreach ($categories as $category)
                <option value="{{$category->id}}">{{$category->name}}</option>
                @endforeach
            </select>

            @error('category')
            <span class="text-danger" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-primary">{{ __('Blog') }}</label>
        <div class="col-md-12">
            <textarea id="summernote" name="content" required></textarea>
        </div>
    </div>


    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-primary">{{ __('Keyword') }}</label>

        <div class="col-md-12">
            <input type="text" class="form-control @error('keyword') is-invalid @enderror" name="keyword"
                value="{{ old('keyword') }}" required autocomplete="keyword" autofocus>

            @error('keyword')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>


    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-primary">{{ __('Description') }}</label>

        <div class="col-md-12">
            <textarea type="text" class="form-control @error('description') is-invalid @enderror" name="description"
                value="{{ old('description') }}" required autocomplete="description" autofocus></textarea>

            @error('description')
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
@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
{{-- <script src="{{url('js/blog.js')}}"></script> --}}


{{-- Testing  --}}
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
</script>

<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

<script>
    $('#summernote').summernote({
    placeholder: 'Hello Bootstrap 4',
    tabsize: 2,
    height: 100
  });


</script>
@endsection
