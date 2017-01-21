<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Patient::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'national_code' => $faker->numberBetween(4000000,5000000),
        'idcrd_number' => $faker->numberBetween(4000000,5000000),
        'birt_hdate' => $faker->date($format = 'Y-m-d', $max = '-20 years'),
        'father_name' => $faker->name,
        'birth_place' => $faker->city,
        'living_place' => $faker->city,
        'file_number' => $faker->numberBetween(4000,5000),
        'gender' => $faker->randomElement($array = array ('m','f')),
        'phone' => $faker->phoneNumber,
        'mobile' => $faker->phoneNumber,
        'cancer_type' => $faker->numberBetween(1,5),
        'marital_status' => $faker->randomElement($array = array ('s','m')),
        'doctor_name' => $faker->name,
        'picture' => $faker->imageUrl(500, 400 , 'cats', true, 'Faker'),
    ];
});

$factory->define(App\Expense::class, function (Faker\Generator $faker) {
    return [
        'letter_number' => $faker->name,
        'national_code' => $faker->numberBetween(4000000,5000000),
        'idcrd_number' => $faker->numberBetween(4000000,5000000),
        'birt_hdate' => $faker->date($format = 'Y-m-d', $max = '-20 years'),
        'father_name' => $faker->name,
        'birth_place' => $faker->city,
        'living_place' => $faker->city,
        'file_number' => $faker->numberBetween(4000,5000),
        'gender' => $faker->randomElement($array = array ('m','f')),
        'phone' => $faker->phoneNumber,
        'mobile' => $faker->phoneNumber,
        'cancer_type' => $faker->numberBetween(1,5),
        'marital_status' => $faker->randomElement($array = array ('s','m')),
        'doctor_name' => $faker->name,
        'picture' => $faker->imageUrl(500, 400 , 'cats', true, 'Faker'),
    ];
});