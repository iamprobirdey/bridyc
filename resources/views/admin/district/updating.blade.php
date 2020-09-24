@extends('admin.index')

@section('title','')
@section('desc','')
@section('keywords','')


@section('adminContent')

<div class="card">
    <div class="card-header">District updating</div>

    <a class="btn btn-primary" href="{{url('admin/district/')}}">Go Back to List</a>

    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif

    @php

    @endphp

    <div class="card-body">
        <form method="POST" action="{{ url('admin/district/update/'.$district->id) }}">
            @csrf


            <div class="form-group row">
                <label for="state" class="col-md-4 col-form-label text-md-right">Select the State</label>

                <div class="col-md-6">
                    <select name="state" class="form-control" @error('state') is-invalid @enderror required>
                        @foreach ($states as $state)
                        <option value="{{$state->id}}">{{$state->name}}</option>
                        @endforeach
                    </select>

                    @error('state')
                    <span class="text-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                        value="{{ $district['name'] }}" required autocomplete="name" autofocus>

                    @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="code" class="col-md-4 col-form-label text-md-right">{{ __('Code') }}</label>

                <div class="col-md-6">
                    <input id="code" type="text" class="form-control @error('code') is-invalid @enderror" name="code"
                        value="{{ $district['code'] }}" required autocomplete="code" autofocus>

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
