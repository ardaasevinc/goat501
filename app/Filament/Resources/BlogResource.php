<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Models\Blog;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Bloglar';
    protected static ?string $pluralModelLabel = 'Bloglar';
    protected static ?string $modelLabel = 'Blog';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(12)
                    ->schema([
                        // Sol taraf (4 kolon) — Görsel
                        FileUpload::make('img')
                            ->label('Blog Görseli')
                            ->disk('uploads')
                            ->directory('blog')
                            ->visibility('public')
                            ->image()
                            ->imageEditor()
                            ->imageResizeMode('cover')
                            ->imageCropAspectRatio('16:9')
                            ->hint('1920x1080 boyutunda, .webp formatında yükleyin')
                            ->columnSpan(4),

                        // Sağ taraf (8 kolon) — İçerik
                        Forms\Components\Group::make([
                            TextInput::make('sub_title')
                                ->label('Alt Başlık')
                                ->maxLength(255)
                                ->placeholder('Alt başlık girin...'),

                            TextInput::make('main_title')
                                ->label('Ana Başlık')
                                ->required()
                                ->maxLength(255)
                                ->placeholder('Ana başlık girin...'),

                            RichEditor::make('desc')
                                ->label('İçerik')
                                ->fileAttachmentsDisk('uploads')
                                ->fileAttachmentsDirectory('blog/richeditor')
                                ->toolbarButtons([
                                    'bold',
                                    'italic',
                                    'underline',
                                    'strike',
                                    'bulletList',
                                    'orderedList',
                                    'link',
                                    'undo',
                                    'redo',
                                ])
                                ->columnSpanFull(),

                            Toggle::make('is_published')
                                ->label('Yayında mı?')
                                ->default(true),
                        ])->columnSpan(8),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('img')
                    ->label('Görsel')
                    ->disk('uploads')
                    ->circular(),

                TextColumn::make('sub_title')
                    ->label('Alt Başlık')
                    ->searchable()
                    ->toggleable(),

                TextColumn::make('main_title')
                    ->label('Ana Başlık')
                    ->searchable()
                    ->toggleable(),

                ToggleColumn::make('is_published')
                    ->label('Yayında mı?'),

                TextColumn::make('created_at')
                    ->label('Oluşturulma')
                    ->dateTime('d.m.Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
