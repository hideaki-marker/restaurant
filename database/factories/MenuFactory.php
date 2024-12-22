<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menu>
 */
class MenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categorys = ['React', 'Vue', 'Laravel'];
        return [
            //
            'name' => $this -> faker -> realText(10),
            'price' => $this -> faker -> randomNumber(),
            'explain' => $this -> faker -> realText(50),
        ];
    }
}
