<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\SchemalessAttributes;
use Illuminate\Database\Eloquent\Builder;
use Spatie\Activitylog\Traits\LogsActivity;
use App\ModelRelationship\ChannelAffair;

class Channel extends Model
{
    use ChannelAffair;
    protected $fillable = [
        'user_id',
        'state_id',
        'district_id',
        'village_id',
        'language_id',
        'title',
    ];
    public $casts = [
        'extra_attributes' => 'array',
    ];

    protected static $logAttributes = [
        'user_id',
        'state_id',
        'district_id',
        'village_id',
        'language_id',
        'title',
        'user.name',
        'user.id',
        'state.name',
        'district.name',
        'village.name',
        'language.name',
        'standard.standard_name',
        'board.name'

    ];

    protected static $logOnlyDirty = true;



    public function getExtraAttributesAttribute(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'extra_attributes');
    }

    public function scopeWithExtraAttributes(): Builder
    {
        return SchemalessAttributes::scopeWithSchemalessAttributes('extra_attributes');
    }

    public function getStatusAttribute($value)
    {
        return $value == 1;
    }
}
