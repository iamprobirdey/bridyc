@extends('admin.index')

@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and 
activities and provide access to students and parents in particular, who are looking for 
cross-training their minds before choosing an institute or a career. The platform will allow 
students to share their learnings, learn from their peers and from the people who have already 
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance in Assam, 
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school, career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career video')


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
