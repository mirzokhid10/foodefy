<?php

use App\Http\Controllers\Frontend\UserController;
use App\Http\Middleware\CorsMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum', 'user'])->group(function () {});
// Route::get('/users', [UserController::class, 'index']);     // For GET (list users)
// Route::post('/users', [UserController::class, 'store']);    // For POST (create user)
