<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Blog;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
     public function boot(): void
    {
        // Yayında olan blogları global olarak paylaş
        $blogs = Blog::where('is_published', true)
            ->orderByDesc('created_at')
            ->get();

        view()->share('blogs', $blogs);
    }
}
