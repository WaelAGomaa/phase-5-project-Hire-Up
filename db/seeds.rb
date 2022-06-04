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
    picture: 'https://lastfm.freetls.fastly.net/i/u/ar0/f8dbaea7f7763e2edbace3e11f587b73',
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

User.create(
    username: 'Paola',
    password: 'password',
    email: 'paola@gmail.com',
    first_name: 'paola',
    last_name: 'moreno',
    industry: 'vintage',
    company: 'degardena',
    pronouns: 'she/her',
    talent: 'being amazing',
    instagram: 'rose_moreno',
    picture: 'https://www.meme-arsenal.com/memes/8139a9f323b9de13d63b8576294f204d.jpg',
    bio: 'I am awesome',
    age: '22',
    phone_number: '0123456789')

User.create(
    username: 'brian',
    password: 'password',
    email: 'Brian@gmail.com',
    first_name: 'Brian',
    last_name: 'healy',
    industry: 'drag',
    company: 'drag.co',
    pronouns: 'he/him',
    talent: 'im a dragquwen',
    instagram: 'permylast_e-male',
    picture: 'https://hips.hearstapps.com/cosmouk.cdnds.net/14/31/nrm_1406798788-119417-aleni.jpg?crop=0.750xw:1.00xh;0.100xw,0&resize=640:*',
    bio: 'I am clown',
    age: '26',
    phone_number: '0123456789')

Post.create(
    title: 'How to make a website',
    body: 'idk how to make a website',
    user_id: 1,
    likes: 3
)
Post.create(
    title: 'i need a clown',
    body: 'Yas Queen go get em',
    user_id: 2,
    likes: 0
)
Post.create(
    title: 'any gutarist avil?',
    body: 'a surprise party for my bf next weekend ',
    user_id: 1,
    likes: 1
)
Post.create(
    title: 'I need a dragquwen',
    body: 'for my stores grand opening any1?',
    user_id: 3,
    likes: 1
)
Post.create(
    title: 'I just got a clown gig!',
    body: 'So excited to start my new clownery',
    user_id: 4,
    likes: 4
)
Conversation.create(sender_id:1,recipient_id:2)
Conversation.create(sender_id:3,recipient_id:1)


Message.create(body:"Hi there wael!",conversation_id:1,user_id:1)

Message.create(body:"Hi there david!",conversation_id:1,user_id:2)

Message.create(body:"hi gay",conversation_id:2,user_id:3)

puts "✅ Done seeding!"
