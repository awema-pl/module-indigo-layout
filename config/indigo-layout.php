<?php

return [

    //This key pass to vuejs config
    'frontend' => [
        'dev' => env('APP_DEBUG', false),
//        'key' =>  env('PKGKIT_CDN_KEY', 'undefined'),
        'theme' => [
            'metaColor' => [
                'dark' => '#2a2a2a',
                'light' => '#ffffff',
            ]
        ],
        'stickyParams'=> [
            // all pages stores the `limit` param
            //   '*'=>'limit',
            // `/contacts` page stores `provider` and `tab` params, additionally to `limit`
            // '/contacts'=> ['provider', 'tab'],
            // all pages like '/account/', '/account/orders', etc. will store all given params
            // '/account/*'=> '*'
        ],

    ],

    'name' => env('APP_NAME', 'Awema.PL'),

    'page-map-offset' => -20,

    'url' => env('APP_URL', 'https://example.com'),

    // Render icon on external link: list of your all domains where will be showed the website
    'environment_urls' => [env('APP_URL', 'https://example.com')],

    'logo' => env('APP_LOGO', '/assets/awema-pl/indigo-layout/img/logo.png'),

    'fonts' => ['https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700'],

    'custom_styles' => '
        :root:not([data-dark=true]) {
            --tc_aside_gradient: linear-gradient(0deg, #222d30 0%,#222d30);
            --tc_aside_gradient_header: linear-gradient(90deg,#222d30 0%,#222d30);
            --tc_header_bg: #5c9cd0;
        }
      
    ',

    'auth_bg_left' => env('APP_URL') . '/assets/awema-pl/indigo-layout/img/background/bg-'.rand(1, 3).'.jpg',

    'auth_bg_full' => env('APP_URL') .'/assets/awema-pl/indigo-layout/img/background/bg-'.rand(1, 3).'.jpg',

    'dist' => [
        'js/main.js',
        'js/main.legacy.js',
        'css/main.css'
    ],
    'chart_colors' => [
        'light-blue' => 'rgba(55,179,196,0.6)', // '#37b3c4',
        'blue' => 'rgba(63,135,199,0.6)', //'#3f87c7',
        'dark-blue' => 'rgba(63,75,181,0.6)', //'#3f4bb5',
        'violet' => 'rgba(135, 43, 188, 0.6)',
        'pink' => 'rgba(224,93,112,0.6)', //'#e05d70',
        'yellow' => 'rgba(191,139,47,0.6)', //'#bf8b2f',
        'orange' => 'rgba(169,84,37,0.6)', //'#a95425',
        'red' => 'rgba(188,43,77,0.6)', //'#bc2b4d',
        'green' => 'rgba(19,174,69,0.6)', //'#13ae45',
        'grey' => 'rgba(204,204,204,0.2)', //'#cccccc'
    ],

    'nav' => [
        'expanded' => false
    ],

    'search' => [
        'url' => 'search',
        'name' => 'query'
    ],

    'show_footer_copyright' => true,
];
