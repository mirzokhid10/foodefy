<?php

use App\Http\Controllers\Admin\Auth\AdminController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::post('/login', [AdminController::class, 'login'])->name('login');
});