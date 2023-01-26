function appendImgesElement(Keyword, index){
    const imgElement = document.createElement("img");
    imgElement.className = "img"+index;
    imgElement.src = `https://source.unsplash.com/225x225/?${Keyword}$sig=${index}`;
    const galleryElement = document.querySelector(".gallery");
    galleryElement.appendChild(imgElement);

}
function removeAllimge(){
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";

}


function searchPhotos(event){  
    const Keyword = event.target.value;
    
    if(event.key === "Enter" && Keyword){console.log(Keyword)
        removeAllimge();
        for(let i= 1; i<=20; i++){
            appendImgesElement(Keyword, i);

        }
    }
}


function main(){
  
    //const inputElement = document.getElementsByClassName(search);
    //inputElement[0].add
     const inputElement = document.querySelector(".search");
    inputElement.addEventListener("keydown", searchPhotos);
}
main();