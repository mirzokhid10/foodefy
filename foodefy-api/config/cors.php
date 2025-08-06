<?php

return [
    'paths' => ['/*', 'sanctum/csrf-cookie', 'admin/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // Vue Vite frontend
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
