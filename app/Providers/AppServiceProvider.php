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
        // Yayında olan bloglar bütün görünümlerde: ilk görünüm çizilirken bir kez sorgulanır.
        // (Açılışta sorgulanmaz: migrate gibi komutlar boş veritabanında da çalışır.)
        view()->composer('*', function ($view) {
            static $blogs = null;
            $blogs ??= Blog::where('is_published', true)->orderByDesc('created_at')->get();
            $view->with('blogs', $blogs);
        });
    }
}
