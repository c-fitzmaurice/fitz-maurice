<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}" class="overscroll-none">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta name="referrer" content="always">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <meta name="description" content="{{ $page->description }}">
        <title>{{ $page->title }}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        @viteRefresh()
        <link rel="stylesheet" href="{{ vite('source/_assets/css/main.css') }}">
        {{-- <script defer type="module" src="{{ vite('source/_assets/js/main.js') }}"></script> --}}
    </head>
    <body class="text-gray-900 font-sans antialiased leading-tight overscroll-none">
        <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div class="absolute left-[72%] top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-0 md:translate-x-[-8%] md:translate-y-[-28%] lg:-rotate-25 -rotate-45 md:landscape:top-[10%] md:portrait:top-[25%] lg:translate-x-[-2%] transition-all duration-700 ease-in-out transform-gpu will-change-[left,top,transform] motion-reduce:transition-none">
                <x-svg class="w-[200vw] md:w-[120vw] h-auto opacity-5" />
            </div>
        </div>
        @yield('body')
        @unless($page->production)
        <div class="fixed right-1 bottom-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-600/40 p-3 font-mono text-xs text-white">
            <div class="block sm:hidden">xs</div>
            <div class="hidden sm:block md:hidden">sm</div>
            <div class="hidden md:block lg:hidden">md</div>
            <div class="hidden lg:block xl:hidden">lg</div>
            <div class="hidden xl:block 2xl:hidden">xl</div>
            <div class="hidden 2xl:block">2xl</div>
        </div>
        @endunless
    </body>
    @include('_partials.script')
</html>