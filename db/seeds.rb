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

post = Post.create(
    title: 'How to make a website',
    body: 'idk how',
    user_id: 1
)
post = Post.create(
    title: 'i need a clown',
    body: 'Yas Queen go get em',
    user_id: 2
)

puts "✅ Done seeding!"
