document.addEventListener("DOMContentLoaded",()=>{

    let addbutton = document.querySelector(".addbtn")

    addbutton.setAttribute("class","addlist")

    let input = document.querySelector("input")

    let Order_list = document.querySelector("ol")
    
    let heading = document.querySelector("h2")
    
    input.setAttribute("placeholder", "Add your list.....")

    heading.textContent = "You'r Added Data"

    let nav = input.parentElement
    nav.setAttribute("class", "Nav")

    addbutton.addEventListener("click",()=>{

        let inputVal = input.value

        if(input.value.trim() === ""){
            alert("Please Add Something........")
            return
        }

        let allItems = document.querySelectorAll(".Add-list");
        let exists = Array.from(allItems).some((item) => {
                return item.firstChild.textContent.trim() === input.value.trim()
            });

        if (exists) {
            alert("This item is already exists. Please add a new one!");
            return;
        }

        let li = document.createElement("li")

        li.setAttribute("class","Add-list")

        let removebtn = document.createElement("button")

        removebtn.textContent = "Remove"

        removebtn.setAttribute("class","removebtn")

        removebtn.addEventListener("click", ()=>{
            li.remove()
        })

        li.innerText = inputVal
        
        li.appendChild(removebtn)

        Order_list.appendChild(li)

    })
})
