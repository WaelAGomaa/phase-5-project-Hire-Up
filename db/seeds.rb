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
    picture: 'https://assets.teenvogue.com/photos/586fb5d4f77a0c673d72629f/1:1/w_2417,h_2417,c_limit/GettyImages-165443495.jpg',
    bio: 'I am a programmer',
    age: '25',
    phone_number: '0123456789')
User.create(
    username: 'david',
    password: 'password',
    email: 'david@gmail.com',
    first_name: 'david',
    last_name: 'caldera',
    industry: 'rebric cube',
    company: 'cool cubes',
    pronouns: 'he/him',
    talent: 'awesome colorful cubes',
    instagram: 'caldera_cube',
    picture: 'https://assets.teenvogue.com/photos/586fb5d4f77a0c673d72629f/1:1/w_2417,h_2417,c_limit/GettyImages-165443495.jpg',
    bio: 'I am a rebric cube',
    age: '25',
    phone_number: '0123456789')

Post.create(
    title: 'How to make a website',
    body: 'idk how',
    user_id: 1
)
Post.create(
    title: 'i need a clown',
    body: 'Yas Queen go get em',
    user_id: 2
)
Post.create(
    title: 'Seed trial',
    body: '#3',
    user_id: 1
)

puts "✅ Done seeding!"
