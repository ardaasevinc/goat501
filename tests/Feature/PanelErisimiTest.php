<?php

namespace Tests\Feature;

use App\Models\User;
use Filament\Pages\Auth\Login;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

/**
 * Yönetim paneline (/admin) yalnızca PANEL_ERISIM_EPOSTALARI listesindeki e-postalar girer.
 */
class PanelErisimiTest extends TestCase
{
    use RefreshDatabase;

    private function kullanici(string $eposta): User
    {
        return User::factory()->create(['email' => $eposta, 'password' => bcrypt('dogru-sifre')]);
    }

    public function test_listedeki_eposta_panele_girer_buyuk_kucuk_harf_farketmez(): void
    {
        config(['auth.panel_epostalari' => ['Yonetici@Ornek.test']]);

        $this->actingAs($this->kullanici('yonetici@ornek.test'))->get('/admin')->assertOk();
    }

    public function test_listede_olmayan_kullanici_panele_giremez(): void
    {
        config(['auth.panel_epostalari' => ['yonetici@ornek.test']]);

        $this->actingAs($this->kullanici('baskasi@ornek.test'))->get('/admin')->assertForbidden();
    }

    public function test_liste_bossa_kimse_giremez(): void
    {
        config(['auth.panel_epostalari' => []]);

        $this->actingAs($this->kullanici('yonetici@ornek.test'))->get('/admin')->assertForbidden();
    }

    public function test_listede_olmayan_kullanici_dogru_sifreyle_de_giris_yapamaz(): void
    {
        config(['auth.panel_epostalari' => ['yonetici@ornek.test']]);
        $user = $this->kullanici('baskasi@ornek.test');

        Livewire::test(Login::class)
            ->fillForm(['email' => $user->email, 'password' => 'dogru-sifre'])
            ->call('authenticate')
            ->assertHasFormErrors(['email']);

        $this->assertGuest();
    }
}
