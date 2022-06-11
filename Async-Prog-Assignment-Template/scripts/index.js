      // Slide-Show :

let picObj = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8733/998733-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/7393/1000087393/1000087393-h","https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/5483/1770015483/1770015483-h",
]

let i = 0;

let img_div = document.getElementById("slideshow");

    let img = document.createElement("img");
    
    setInterval(function(){
        if(i == 3){
            i = 0;
        }

        img.src = picObj[i];

        img_div.append(img);

        i++;

    },3000);

             // Movie Lists :

let dataBase = [
     m1 = {
        name : "Chhichhore",
        release : "24.06.2019",
        url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oED62JT9JwZtNh6_uTWe40joZQqFB9XEWA&usqp=CAU",
        rating : 4
    },
    m2 = {
        name : "Hate Story 2",
        release : "09.09.2016",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1713/1121713-h-ea93eeab5db6",
        rating : 2
    },
    m3 = {
        name : "A Thursday",
        release : "15.02.2022",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694",
        rating : 5
    },
    m4 = {
        name : "Baaghi 2",
        release : "25.08.2020",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5461/245461-h",
        rating : 1
    },
    m5 = {
        name : "Baby",
        release : "25.08.2020",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7414/957414-h",
        rating : 4
    },
    m6 = {
        name : "Peekaboo",
        release : "25.08.2020",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9378/1259378-h-91a0f5a915f3",
        rating : 2
    },
    m7 = {
        name : "MS Dhoni",
        release : "25.08.2020",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h",
        rating : 5
    },
    m8 = {
        name : "Bajrangi Bhaijaan",
        release : "25.08.2020",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1777/1000071777/1000071777-h",
        rating : 3
    },
    m9 = {
        name : "Angreeze Medium",
        release : "25.08.2020",
        url : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6700/1026700-h-baab56827741",
        rating : 3
    }

];     

localStorage.setItem("movies", JSON.stringify(dataBase));

displayData(dataBase);

function displayData (dataBase){

    document.getElementById("movies").innerHTML = null;
    
    dataBase.map(function(elem){
        //  console.log(elem.name);
      
          let movie_div = document.getElementById("movies");
      
          let div = document.createElement("div");
          div.setAttribute("class", "m-div");
      
          let img = document.createElement("img");
          img.setAttribute("class", "m-img")
          img.src = elem.url;
      
          let m_name = document.createElement("h3");
          m_name.innerText = elem.name;
      
          let rate = document.createElement("p");
          rate.setAttribute("class", "p-tag")
          rate.innerText = `Rating: ${elem.rating}`
      
         
          div.append(img,m_name,rate);
      
          movie_div.append(div);
      })
}



// Sort Movies By Rating Function 


document.getElementById("lh").addEventListener("click", lhFunction);

function lhFunction(){
    
    let sortBylh = dataBase.sort(function (a,b){
        return a.rating - b.rating
    })

    displayData(dataBase)
     
}

document.getElementById("hl").addEventListener("click", hlFunction);

function hlFunction(){
    
    let sortByhl = dataBase.sort(function (a,b){
        return b.rating - a.rating
    })

    displayData(dataBase)
}