let allIssues =[]
const loadAllIssue = ()=>{
    
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
   
    .then((res) => res.json())
    .then((data)=> {
        allIssues = data.data
        displayIssue(allIssues)
        displayIssue(data.data)
        
        
    })
}

const loadSingleIssue = (id) => {
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
        .then(res => res.json())
        .then(data => {
            showIssue(data.data)
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

                <div onclick="loadSingleIssue(${issue.id})" class="card bg-base-100 shadow-md p-5 flex flex-col justify-between h-full border-t-4 space-y-6  ${getPriorityColor(issue.priority)}">
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

                        <div class="flex gap-2 flex-wrap">
                        ${issue.labels.map(label => `
                            <span class="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                                ${label}
                            </span>
                        `).join("")}
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


const showIssue = (issue) => {
    const modal = document.getElementById("modal-container")

    modal.classList.remove("hidden")

    modal.innerHTML = `
    <div class="bg-white w-[500px] rounded-xl p-6 shadow-lg">

        <h1 class="text-xl font-bold mb-2">
            ${issue.title}
        </h1>

        <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                ${issue.status}
            </span>
            <p>Opened by ${issue.author}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
        </div>

        <div class="flex gap-2 mb-3 flex-wrap">
            ${issue.labels.map(label => `
                <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                    ${label}
                </span>
            `).join("")}
        </div>

        <p class="text-gray-500 text-sm mb-4">
            ${issue.description}
        </p>

        <div class="bg-gray-100 p-4 rounded-lg flex justify-between">
            <div>
                <p class="text-gray-400 text-sm">Assignee:</p>
                <p class="font-semibold">${issue.author}</p>
            </div>

            <div>
                <p class="text-gray-400 text-sm">Priority:</p>
                <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    ${issue.priority}
                </span>
            </div>
        </div>

        <div class="mt-4 text-right">
            <button onclick="closeModal()" class="btn btn-primary">
                Close
            </button>
        </div>

    </div>
    `
}

const closeModal = () => {
    document.getElementById("modal-container").classList.add("hidden")
}

const filterIssues = (type) => {

    if (type === "all") {
        displayIssue(allIssues)
    }

    else if (type === "open") {
        const openIssues = allIssues.filter(issue =>
            issue.priority === "high" || issue.priority === "medium"
        )
        displayIssue(openIssues)
    }

    else if (type === "closed") {
        const closedIssues = allIssues.filter(issue =>
            issue.priority === "low"
        )
        displayIssue(closedIssues)
    }
}

const setActiveBtn = (type) => {
    const buttons = ["all", "open", "closed"]

    buttons.forEach(btn => {
        document.getElementById(btn + "-btn").classList.remove("btn-primary")
        document.getElementById(btn + "-btn").classList.add("btn-outline")
    })

    document.getElementById(type + "-btn").classList.remove("btn-outline")
    document.getElementById(type + "-btn").classList.add("btn-primary")
}




setActiveBtn('all')

loadAllIssue()
