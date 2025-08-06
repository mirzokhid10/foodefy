<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert(
            [
                [
                    'name' => 'Admin',
                    'username' => 'admin',
                    'email' => 'admin@example.com',
                    'role' => 'admin',
                    'phone' => '081234567890',
                    'status' => 'active',
                    'password' => Hash::make('admin123'),

                ],
                [

                    'name' => 'User',
                    'username' => 'user',
                    'email' => 'user@example.com',
                    'role' => 'user',
                    'phone' => '081234567890',
                    'status' => 'active',
                    'password' => Hash::make('user123'),

                ]
            ],
        );
    }
}