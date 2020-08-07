@extends('admin.index')

@section('adminContent')

<div class="card">
    <div class="card-header">Board creating</div>

    <a class="btn btn-primary" href="{{url('admin/standard/')}}">Go Back to List</a>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    <div class="card-body">
        <form method="POST" action="{{ route('admin.standard.create') }}">
            @csrf

            <div class="form-group row">
                <label for="standard" class="col-md-4 col-form-label text-md-right">{{ __('Standard') }}</label>

                <div class="col-md-6">
                    <input id="standard" type="text" class="form-control @error('standard') is-invalid @enderror" name="standard" value="{{ old('standard') }}" required autocomplete="standard" autofocus>

                    @error('standard')
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

