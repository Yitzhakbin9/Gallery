
const headline = document.querySelector("#headline");
const IMG = document.querySelector("img")
const athlete = document.querySelector("#athlete");
const food = document.querySelector("#food");
const music = document.querySelector("#music");
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const description = document.querySelector("#description");


let index = 0;

let music_bool = false;
let food_bool = false
let sports_bool = false;

leftArrow.addEventListener('click' , async function (){
    index = (index+1) % 20;
    console.log(`index: ${index}`);
    if(music_bool){
        IMG.src = await getImage(index , "music");
    }
    else if(food_bool){
        IMG.src = await getImage(index , "food");
    }
    else if(sports_bool){
        IMG.src = await getImage(index , "sports");
    }
})

rightArrow.addEventListener('click' , async function (){
    index = (index+1) % 20;
    console.log(`index: ${index}`);
    if(music_bool){
        IMG.src = await getImage(index , "music");
    }
    else if(food_bool){
        IMG.src = await getImage(index , "food");
    }
    else if(sports_bool){
        IMG.src = await getImage(index , "sports");
    }
})


music.addEventListener('click',async function (){
    index = (index+1) % 20;
    console.log(`index: ${index}`);


    // IMG.src = await getMusicImage(index , music);
    IMG.src = await getImage(index , "music");
    description.innerHTML = "Showing music collection";
    food_bool = false;
    sports_bool = false;
    music_bool = true;
})

athlete.addEventListener('click',async function (){
    index = (index+1) % 20;
    console.log(`index: ${index}`);

    // IMG.src = await getAthleteImage(index);
    IMG.src = await getImage(index , "sports");

    description.innerHTML = "Showing sports collection";
    food_bool = false;
    sports_bool = true;
    music_bool = false;
})

food.addEventListener('click',async function (){
    index = (index+1) % 20;
    console.log(`index: ${index}`);
    IMG.src = await getImage(index , "food");

    description.innerHTML = "Showing food collection";
    food_bool = true;
    sports_bool = false;
    music_bool = false;
})



const getImage = async (index , subject) => {
    try {
            const res = await axios.get(`https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6&category=${subject}`)
            const result = res.data.hits[index].largeImageURL;
            return result;
    } catch (e) {
        console.log("ERROR" , e);
    }
}

