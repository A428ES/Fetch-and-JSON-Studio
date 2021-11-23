window.addEventListener("load", event => {
    let jsonDat = [];
    let content = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(event => {
        event.json().then(astronautList => {

            astronautList.sort(function(a, b){ return b.hoursInSpace - a.hoursInSpace });
            let totalHTML = '';
            for(let i = 0;i<astronautList.length;i++){
            totalHTML += `<div class="astronaut">
            <div class="bio">
               <h3>${astronautList[i].firstName} ${astronautList[i].lastName}</h3>
               <ul>
                  <li>${astronautList[i].hoursInSpace}</li>
                  <li`;
                  
                  if(astronautList[i].active === true) {
                      totalHTML += ` class="active"`;
                  } else {
                      totalHTML += ``;
                  }
                  
                  totalHTML += `>Active: ${astronautList[i].active}</li>
                  <li>Skills: ${astronautList[i].skills}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronautList[i].picture}">
         </div>`;

         content.innerHTML = totalHTML;
            }
            
        });
    })
});