@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

<div class="card">
    <div class="card-header">Hobby updating</div>

    <a class="btn btn-primary" href="{{url('admin/hobby/')}}">Go Back to List</a>

    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif

    @php

    @endphp

    <div class="card-body">
        <form method="POST" action="{{ url('admin/hobby/update/'.$hobby->id) }}">
            @csrf
            <div class="form-group row">
                <label for="hobby" class="col-md-4 col-form-label text-md-right">{{ __('hobby') }}</label>

                <div class="col-md-6">
                    <input id="hobby" type="text" class="form-control @error('hobby') is-invalid @enderror" name="hobby"
                        value="{{ $hobby['name'] }}" required autocomplete="hobby" autofocus>

                    @error('hobby')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="code" class="col-md-4 col-form-label text-md-right">{{ __('code') }}</label>

                <div class="col-md-6">
                    <input id="code" type="text" class="form-control @error('code') is-invalid @enderror" name="code"
                        value="{{ $hobby['code'] }}" required autocomplete="code" autofocus>

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
