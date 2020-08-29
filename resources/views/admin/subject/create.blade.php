@extends('admin.index')

@section('adminContent')

<div class="card">
    <div class="card-header">Board creating</div>

    <a class="btn btn-primary" href="{{url('admin/subject/')}}">Go Back to List</a>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    <div class="card-body">
        <form method="POST" action="{{ route('admin.subject.create') }}">
            @csrf

            <div class="form-group row">
                <label for="subject" class="col-md-4 col-form-label text-md-right">{{ __('subject') }}</label>

                <div class="col-md-6">
                    <input id="subject" type="text" class="form-control @error('subject') is-invalid @enderror" name="subject" value="{{ old('subject') }}" required autocomplete="subject" autofocus>

                    @error('subject')
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

