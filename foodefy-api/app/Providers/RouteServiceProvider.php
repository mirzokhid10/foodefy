<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class RoleServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Route::middleware('web')->group(base_path('routes/api.php'));

        Route::middleware(['web', 'auth', 'role:admin'])
            ->prefix('admin')
            ->as('admin.')
            ->group(base_path('routes/admin.php'));
    }
}
