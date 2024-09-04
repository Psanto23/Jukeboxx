const lyrics = 
[
 "I'll admit it, i'll admit it...",
 "It's... It's... Grippy",
  "My dick is like an accent mark it’s all about the over E's",
 "Nas is like",
 "No cap and gown, I didn't go to class",
 "Metro shut yo ho ass up and make some drums",
 "She blow my dick like a cello",
 "Lately I been thinkin bout puttin my dick inside Kali Uchis",
 "I don't really care if you cryyyy",
 "Hold on take a moment, count my guaaaaap",
 "Can I have like that? You got it like that",
 "Pooh shiesty that's my dog, but pooh you know I'm really shiesty",
 "Metro Boomin want some more",
 "Metroooooo",
 "If young metro don't trust you...",
 "We not from 63rd",
 "And if I throw a bullet, I bet he catch it like Beckham",
 "That's why they call me Slim Shady (I'm back, I'm back)",
 "Order more bottles, order more models!",
 "I didn't play the hand I was dealt, I changed my cards",
 "We could go band4band, fuck dat we could M4M",
 "I only hear tall tales coming from little men",
 "This my shit! All the girls stomp your feet like this",
 "Smoking on your top 5 tonight, tonight...",
 "That be Mawly Raw!",
 "OH!...FUCK!     SHIT!     BITCH!",
 "Tay Keith, fuck these n*ggas up!",
 "Oh my god Ronny",
 "Yo Pierre, you wanna come out here?",
 "Mustard on the beat ho",
 "Wake up F1lthy!",
 "Zaytoven...",
 "I take my shirt off and all the hoes stop breathin",
 "808 Mafiaaa",
 "Wake up Mr. West!",
 "Flashin... lights, lights, lights",
 "Do you hear me, do you feel me, we gon be alright!",
 "Twenty more mins until I'm on",
 "Ooh, hop in that mofuckin foreign",
 "Ok,ok,ok,ok,ok,ok,oh...",
 "For real, for real, for real this time...",
 "Till 3005 I'll be right by your side",
 "Hollywood Cole!",
 "First things first rest in peace Uncle Phil!",
 "This is a Melo Beat",
 "AXL!",
 "I walk around like that n*gga",
 "Pills on me blue, like a bruise, better yet: blues clues",
 "I got up on my birkinnnn, it's workinnn, she said shes a virginn, it's hurtinn",
 "999",
 "1400",
 "1600 Block",
 "What's a God to a non-believer?",
 "I only love my bed and my mama I'm sorry",
 "I love when you count me out",
 "I choose me",
 "i",
 "Every n*gga is a star",
 "Raindrop, droptop",
 "When shit hit the fan is you still a fan?\r(make sure ask your friends)",
 "Drug dealin just to get to byyyy",
 "Who dat boy?!",
"Let's make a deaaaaal\rBitch be for real",
"HOES MAD! HOES MAD!",
"She's a-\rBad thang, fine as helll, thick as fuck!",
"Woke up to n*ggas soundin like me",
"If Pirus and Crips all got along...every time I'm in the street I hear\rYAWK YAWK YAWK YAWK",
"Wheezy outta here",
"21 21 21",
"Can I kick it?",
"Put a glock in my purse",







];

let lastIndex = -1;

function getRandomLyric() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * lyrics.length);
    } while (randomIndex === lastIndex);
    
    lastIndex = randomIndex;
    return lyrics[randomIndex];
}

document.getElementById('lyrics').textContent = getRandomLyric();

