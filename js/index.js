let menu = document.querySelector(".header__menu");
let navbar = document.querySelector(".header__middle");
let close = document.querySelector(".header__close");
let link = document.querySelector(".header__link");
let projectWrapper = document.querySelector(".project__wrapper");
let modalSection = document.querySelector(".modal-section");



AOS.init();

menu.addEventListener("click", function (e) {
  setTimeout(function () {
    if (e.target.className === "header__menu") {
      navbar.style.display = "block";
    } else if (e.target.className === "close") {
      navbar.style.display = "none";
    }
  }, 200);
});

close.addEventListener("click", function (e) {
  if (e.target.className === "header__close") {
    closeMenu();
  }
});

navbar.addEventListener("click", function (e) {
  if (e.target.className === "header__link") {
    closeMenu();
  }
});

let closeMenu = function () {
  navbar.animate(
    [{ transform: "translateY(0px)" }, { transform: "translateY(-2000px)" }],
    {
      duration: 500,
    },

    "linear"
  );
  setTimeout(function () {
    navbar.style.display = "none";
  }, 500);
};

projectWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("project__box")) {
    if (e.target.classList.contains("riby")) {
      let modalContent = `
      <div class="modal">
      <p class="modal__close">
        &times;
      </p>
      <div class="modal__body">
      <div class="modal__image-con">
     
      <img class="modal__image" src="images/riby.PNG"/>
      </div>
          
        <div class="modal__info">
          <h3 class="modal__heading">
          Finance Life Technologies Limited (Riby)   
          </h3>
          <p class="modal__paragraph">
          Riby is a Digital Banking & Financial Services Platform for Cooperatives, Trade/Business Groups & Salary
          Earners in Company Groups.
       </p>
       <ul class="modal__details">
       <li>Worked on Riby Agent landing page</li>
       <li>
         Worked on Riby Agent Network Control Center(ANCC) for managing
         agent’s operations
       </li>
       <li>Maintained other landing pages across other Riby products.</li>
       <li>Worked on Riby Pay dashboard.</li>
       <li>Assigned tasks to interns, and managed their projects</li>
       <li>
         Worked on Riby Single Sign On (SSO) page used for authentication
         across all Riby products.
       </li>
     </ul>
        </div>
    </div>
    </div>`;
    modalSection.innerHTML = modalContent;
    }

    if (e.target.classList.contains("skooleo")) {
      let modalContent = `
      <div class="modal">
      <p class="modal__close">
        &times;
      </p>
      <div class="modal__body">
      <div class="modal__image-con">
      <img class="modal__image" src="images/skooleo.PNG"/>
      </div>
      <div class="modal__info">
      <h3 class="modal__heading">
      Skooleeo Technology   
      </h3>
      <p class="modal__paragraph">
      Skooleeo is a software as a service(SaaS) management app for schools to connect teachers, parents and
      students. With Skooleeo, teachers can manage classrooms better and students are able to optimize learning with
      parent’s engagement.
   </p>
   <ul class="modal__details">
   <li>Designed the whole software architecture and data structure for the back-end.</li>
   <li>
   Worked on the landing page
   </li>
   <li>Developed a role-based teacher, parent, school, and admin dashboard</li>
   <li>Optimized the back-end so it can scale for thousands of concurrent users.</li>
   
 </ul>
    </div>
    </div>
    </div>`;
    modalSection.innerHTML = modalContent;
    }


    if (e.target.classList.contains("eachone")) {
      let modalContent = `
      <div class="modal">
      <p class="modal__close">
        &times;
      </p>
      <div class="modal__body">
      <div class="modal__image-con">
      <img class="modal__image" src="images/eachone.PNG"/>
      </div>
      <div class="modal__info">
      <h3 class="modal__heading">
      Each One  
      </h3>
      <p class="modal__paragraph">
      The eachone.ng initiative is making it possible for 
      Nigerians to lift up fellow Nigerians in need. 
      It is a connector bridging the gap between 
      families in need and those who can provide assistance.
   </p>
   <ul class="modal__details">
   <li>Worked on Riby Agent landing page</li>
   <li>
     Worked on Riby Agent Network Control Center(ANCC) for managing
     agent’s operations
   </li>
   <li>Maintained other landing pages across other Riby products.</li>
   <li>Worked on Riby Pay dashboard.</li>
   <li>Assigned tasks to interns, and managed their projects</li>
   <li>
     Worked on Riby Single Sign On (SSO) page used for authentication
     across all Riby products.
   </li>
 </ul>
    </div>
    </div>
    </div>`;
    modalSection.innerHTML = modalContent;
    }
    
  }
  
});

modalSection.addEventListener("click", function(e){
  if(e.target.className === "modal__close"){
    modalSection.innerHTML = ""
  }
})


