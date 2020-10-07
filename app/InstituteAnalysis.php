<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\SchemalessAttributes;

class InstituteAnalysis extends Model
{
    protected $fillable = ['channel_id', 'most_viewed_count', 'user_ip_address'];
    public $casts = [
        'extra_attributes' => 'array',
    ];
    public function getExtraAttributesAttribute(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'extra_attributes');
    }

    public function scopeWithExtraAttributes(): Builder
    {
        return SchemalessAttributes::scopeWithSchemalessAttributes('extra_attributes');
    }
}
