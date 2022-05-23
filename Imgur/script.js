let page=1;

const getData = async() =>{
var res = await fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=PneUiNSmdPgEn6oWrUatpndH5t_UO9oIpZaIoNpa4Zs`);
res = await res.json();
showData(res)
}
getData()


window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    page++  
    main()
    }
})

const showData = (data) =>{
    let parent = document.querySelector(".content")
    data.map((el)=>{
        let div = document.createElement("div");
       let img = document.createElement("img");
       img.src = el.urls.small
       let name = document.createElement("p");
       name.innerText = el.user.name 
        div.append(img,name)
        parent.append(div);
    })
}
const search = async() =>{
    try {
        let query = document.getElementById("inpu").value;
            let x = await fetch(
              `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=TnpoTGKKgbYNfMXhHISwqxNDCySwwrqJme9tnzb0QaA`
            );
            let data = await x.json();
            return data;
      } catch (error) {
        console.log(error);
      }
}

let inpu = document.getElementById("inpu");
let timerId;
inpu.addEventListener("input",()=>{
    debounce(main,1000)
})

async function main() {
    let data = await search();
    if (data.results.length===0) {
       getData()
    }
    showData(data.results);
  }


  function debounce(func, delay) {
      document.querySelector(".content").innerHTML=""
      page=1;
    if (timerId) {
      clearTimeout(timerId);
    }
    setTimeout(function () {
      func();
    }, delay);
  }