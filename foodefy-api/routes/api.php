<?php

use App\Http\Middleware\CorsMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/test', function () {
        return response()->json(['message' => 'CORS works!']);
    });

    Route::get('/foods', function () {
        return response()->json([
            ['id' => 1, 'name' => 'Pizza'],
            ['id' => 2, 'name' => 'Burger'],
            ['id' => 3, 'name' => 'Sushi']
        ]);
    });
});