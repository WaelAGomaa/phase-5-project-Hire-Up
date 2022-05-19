puts "🌱 Seeding spices..."

User.create(
    username: 'wael',
    password: 'password',
    email: 'waeelash155@gmail.com',
    first_name: 'wael',
    last_name: 'gomaa',
    industry: 'IT',
    company: 'Google',
    pronouns: 'he/him',
    talent: 'programming',
    instagram: 'waelgomaa',
    picture: 'https://avatars2.githubusercontent.com/u/52705819?s=460&v=4',
    bio: 'I am a programmer',
    age: '25',
    phone_number: '0123456789')

puts "✅ Done seeding!"
