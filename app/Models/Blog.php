<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'sub_title',
        'main_title',
        'desc',
        'img',
        'is_published',
    ];
}
