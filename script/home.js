
const loadAllIssue = ()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data)=> {
        console.log(data)
        displayIssue(data.data)
        
    })
}

// {
//     "id": 2,
//     "title": "Add dark mode support",
//     "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.",
//     "status": "open",
//     "labels": [
//         "enhancement",
//         "good first issue"
//     ],
//     "priority": "medium",
//     "author": "sarah_dev",
//     "assignee": "",
//     "createdAt": "2024-01-14T14:20:00Z",
//     "updatedAt": "2024-01-16T09:15:00Z"
// }
const getPriorityColor = (priority) => {
    if(priority === "high") return "border-green-500";
    if(priority === "medium") return "border-green-400";
    if(priority === "low") return "border-purple-400";
}
const displayIssue = (issues) =>{
    const lavelContainer = document.getElementById("lavel-container")
    lavelContainer.innerHTML=""
    issues.forEach((issue)=>{
        const div =document.createElement("div")
        div.innerHTML=`

                <div class="card bg-base-100 shadow-md p-5 flex flex-col justify-between h-full border-t-4 space-y-6  ${getPriorityColor(issue.priority)}">
                <div class="flex justify-between px-5 ">
                    <img class ="" src=${issue.priority === "low" ? "./assets/Closed- Status .png" : "./assets/Open-Status.png"} alt="">
                    <button class="btn rounded-full text-sm ${
                    issue.priority === "high" ? "bg-red-100 text-red-600" :
                    issue.priority === "medium" ? "bg-yellow-100 text-yellow-600" :
                    "bg-gray-100 text-purple-600" 
                    }">
                    ${issue.priority}
                </button>
                </div>
                <div>
                    <h1 class="font-semibold text-2xl">${issue.title}</h1>
                    <p class="text-gray-400 text-sm">${issue.description}</p>
                </div>
                <div class="flex gap-2">
                    <button class="btn rounded-full  bg-red-300 text-red-700"><span><i class="fa-solid fa-bug"></i></span>BUG</button>
                    <button class="btn rounded-full bg-yellow-100 text-orange-400"><span><i class="fa-solid fa-life-ring"></i></span>HELP WANTED</button>
                </div>
                <div class="w-full border-t border-gray-300 mt-4 pt-4">
                    
                    <p class="text-gray-500 ">${issue.author}</p>
                    <p class="text-gray-500">${issue.createdAt}</p>

                
                </div>
            </div>

        
        
        `
        lavelContainer.append(div)
    })

}



loadAllIssue()





// const loadAllIssue = ()=>{
//     fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     .then((res) => res.json())
//     .then((data)=> {
//         console.log(data)
//         displayIssue(data.data)
        
//     })
// }

// {
//     "id": 2,
//     "title": "Add dark mode support",
//     "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.",
//     "status": "open",
//     "labels": [
//         "enhancement",
//         "good first issue"
//     ],
//     "priority": "medium",
//     "author": "sarah_dev",
//     "assignee": "",
//     "createdAt": "2024-01-14T14:20:00Z",
//     "updatedAt": "2024-01-16T09:15:00Z"
// }

// const displayIssue = (issues) =>{
//     const lavelContainer = document.getElementById("lavel-container")
//     lavelContainer.innerHTML=""
//     issues.forEach((issue)=>{
//         const div =document.createElement("div")
//         div.innerHTML = `

//         <div class="card bg-base-100 shadow-md p-5 flex flex-col justify-between h-full border-t-4 ${getPriorityColor(issue.priority)}">

//         <!-- top -->
//          <div class="flex justify-between items-center">
//         <img class="w-8" src="./assets/Open-Status.png" alt="">
//         <button class="btn rounded-full text-sm ${
//             issue.priority === "high" ? "bg-red-100 text-red-600" :
//             issue.priority === "medium" ? "bg-yellow-100 text-yellow-600" :
//             "bg-purple-100 text-purple-600"
//         }">
//             ${issue.priority}
//         </button>
//         </div>

//         <!-- content -->
//         <div class="my-4">
//         <h1 class="font-semibold text-lg">${issue.title}</h1>
//         <p class="text-gray-400 text-sm line-clamp-2">
//             ${issue.description}
//         </p>
//         </div>

//         <!-- labels -->
//         <div class="flex gap-2 flex-wrap">
//         ${issue.labels.map(label => `
//             <span class="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
//                 ${label}
//             </span>
//         `).join("")}
//         </div>

//         <!-- footer -->
//         <div class="mt-4 pt-3 border-t">
//         <p class="text-gray-500 text-sm">#1 by ${issue.author}</p>
//         <p class="text-gray-400 text-sm">${new Date(issue.createdAt).toLocaleDateString()}</p>
//         </div>

//         </div>`
//         lavelContainer.append(div)
//     })

// }

// loadAllIssue()