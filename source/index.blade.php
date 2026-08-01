@extends('_layouts.main')

@section('title', 'Colin Fitz-Maurice')

@section('body')
<div class="p-4">
    <x-svg class="h-32 w-32 ml-3" />

    <div class="w-full space-y-4 mt-4">
        <h1 class="text-lg font-semibold">Colin Fitz-Maurice</h1>

        <h2>Shield AI <br> Ex-Apple</h2>

        <div>
            <a class="inline-block" target="_blank" href="{{ $page->social->github }}">GitHub</a>
            <br>
            <a class="inline-block" target="_blank" href="{{ $page->social->linkedin }}">LinkedIn</a>
        </div>

        <p id="email" class="inline-block hover:cursor-pointer">Email</p>
    </div>
</div>
@endsection
