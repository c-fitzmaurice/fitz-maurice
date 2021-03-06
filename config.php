<?php

return [
    'production' => false,
    'baseUrl' => 'https://fitz-maurice.com',
    'email' => 'colin@fitz-maurice.com',
    'site' => [
        'title' => 'Colin Fitz-Maurice',
        'description' => 'Full-stack Laravel and Vue developer living in Philadelphia',
    ],
    'social' => [
        'twitter' => 'https://twitter.com/C_FitzMaurice',
        'github' => 'https://github.com/c-fitzmaurice',
        'linkedin' => 'https://www.linkedin.com/in/colinfitzmaurice',
        'happycog' => 'https://twitter.com/happycog',
    ],
    'services' => [
        'analytics' => 'UA-48741641-4',
        'disqus' => 'colin-fitz-maurice',
        'cloudinary' => 'fitz',
    ],
    'collections' => [
        'projects' => [
            'path' => 'projects/{filename}',
        ],
        'posts' => [
            'path' => 'posts/{filename}',
            'sort' => '-date',
            'extends' => '_layouts.post',
            'section' => 'postContent',
            'isPost' => true,
            'comments' => true,
            'tags' => [],
        ],
        'tags' => [
            'path' => 'tags/{filename}',
            'extends' => '_layouts.tag',
            'section' => '',
            'name' => function ($page) {
                return $page->getFilename();
            },
        ],
    ],
    'excerpt' => function ($page, $limit = 250, $end = '...') {
        return $page->isPost
            ? str_limit_soft(content_sanitize($page->getContent()), $limit, $end)
            : null;
    },
    'imageCdn' => function ($page, $path) {
        return "https://res.cloudinary.com/{$page->services->cloudinary}/{$path}";
    },
];
