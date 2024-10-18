const mongoose = require("mongoose");
const Comic = require("../models/comic");  
const initData = [
    {
        name: "The Amazing Spider-Man",
        author: "Stan Lee",
        year: 1963,
        price: 500,
        discount: 10,
        pages: 150,
        condition: "new",
        description: "A classic Marvel comic.",
        summary: `Peter Parker, an ordinary high school student, is bitten by a radioactive spider, gaining the abilities of a spider. He adopts the persona of Spider-Man to fight crime, but quickly learns that "with great power comes great responsibility." The Amazing Spider-Man comic series explores his journey as a superhero while balancing the challenges of his personal life, love, and friendships. Villains such as the Green Goblin, Doctor Octopus, and the Lizard constantly challenge him, pushing Spider-Man to his limits. A timeless story of heroism, loss, and the burden of responsibility.`
    },
    {
        name: "Batman: Year One",
        author: "Frank Miller",
        year: 1987,
        price: 350,
        discount: 5,
        pages: 120,
        condition: "used",
        description: "A gritty reboot of Batman’s origin.",
        summary: `In "Batman: Year One," Bruce Wayne returns to Gotham City after years of training, determined to fight crime and corruption. The story parallels his transformation into Batman with that of James Gordon, who struggles to maintain his integrity as a cop in the corrupt Gotham Police Department. Together, they seek justice in a city overrun by crime. Batman faces dangerous criminals like Carmine Falcone and must learn to navigate the shadows. Frank Miller’s gritty storytelling and dark atmosphere redefine Batman’s early days, presenting a realistic and grounded origin story.`
    },
    {
        name: "The Avengers",
        author: "Stan Lee",
        year: 1963,
        price: 450,
        discount: 15,
        pages: 200,
        condition: "new",
        description: "Earth's mightiest heroes come together.",
        summary: `The Avengers are a team of superheroes who unite to combat threats too great for any one hero to handle. Led by Captain America, Thor, Iron Man, Hulk, and Ant-Man, the team faces off against powerful adversaries like Loki and Ultron. Throughout their journey, they learn to work together, despite their differences. The series explores themes of teamwork, sacrifice, and the need for heroes in a world threatened by evil forces. Each hero brings their own unique abilities to the table, making The Avengers a diverse and powerful team of Earth's mightiest heroes.`
    },
    {
        name: "X-Men: Dark Phoenix Saga",
        author: "Chris Claremont",
        year: 1980,
        price: 600,
        discount: 12,
        pages: 160,
        condition: "new",
        description: "The iconic Dark Phoenix Saga of the X-Men.",
        summary: `The "Dark Phoenix Saga" is one of the most iconic and tragic storylines in X-Men history. Jean Grey, one of the founding members of the X-Men, becomes the host for the Phoenix Force, an immensely powerful cosmic entity. As Jean's powers grow, she struggles to control the Phoenix, ultimately succumbing to its influence and becoming the Dark Phoenix. The X-Men must face the heartbreaking reality that their friend has become a threat to the universe. Themes of love, sacrifice, and power are explored in this saga, as the X-Men fight to save Jean and the world from the Dark Phoenix.`
    }
];

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/comicstore'); 
};

main()
 .then(() => {
    console.log("Connection successful");
 })
 .catch((err) => {
    console.log("Error occurred", err);
});

const initDb = async () => {
    
    await Comic.deleteMany({});

    
    initData.data = initData.map((obj) => ({
        ...obj,
        owner: "66ab89c800a3d8d2ac688d00" 
    }));

    // Insert new data
    const data = await Comic.insertMany(initData.data);
    console.log("Data was initialized successfully");
};

initDb();
