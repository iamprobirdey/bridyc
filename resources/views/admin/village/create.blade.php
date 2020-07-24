@extends('admin.index')

@section('adminContent')


<div class="card">
    <div class="card-header">Village creating</div>

    <a class="btn btn-primary" href="{{url('admin/village/')}}">Go Back to List</a>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    <div class="card-body">
        <form method="POST" action="{{ route('admin.village.create') }}">
            @csrf

            <div class="form-group row">
                <label for="district" class="col-md-4 col-form-label text-md-right">Select the District</label>

                <div class="col-md-6">
                    <select name="district" class="form-control" 
                    @error('district') is-invalid @enderror required>
                        <option value="">Select a district</option>
                        @foreach ($districts as $district)
                            <option value="{{$district->id}}">{{$district->name}}</option>
                        @endforeach
                      </select>

                    @error('district')
                        <span class="text-danger" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

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
                    <input id="code" type="text" class="form-control @error('code') is-invalid @enderror" name="code" value="{{ old('code') }}" required autocomplete="code" autofocus>

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

