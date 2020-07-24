@extends('admin.index')

@section('adminContent')

<div class="card">
    <div class="card-header">Langugae updating</div>

    <a class="btn btn-primary" href="{{url('admin/language/')}}">Go Back to List</a>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    @php
        
    @endphp

    <div class="card-body">
        <form method="POST" action="{{ url('admin/language/update/'.$language->id) }}">
            @csrf
            <div class="form-group row">
                <label for="language" class="col-md-4 col-form-label text-md-right">{{ __('Language Name') }}</label>

                <div class="col-md-6">
                    <input id="language" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $language['name'] }}" required autocomplete="language" autofocus>

                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="language" class="col-md-4 col-form-label text-md-right">{{ __('Language Code') }}</label>

                <div class="col-md-6">
                    <input id="language" type="text" class="form-control @error('code') is-invalid @enderror" name="code" value="{{ $language['code'] }}" required autocomplete="language" autofocus>

                    @error('code')
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

