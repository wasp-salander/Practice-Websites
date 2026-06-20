
const reviews = [
   {
      id: 1,
      img: "emily_jones.jpg",
      name: "Emily Jones",
      job: "ux designer",
      info: `Hi, I'm Emily Jones, a passionate Junior UX Designer 
            who loves turning complex problems into intuitive digital experiences. 
            I specialize in user research and wireframing, 
            always focusing on creating empathetic, user-centric designs. 
            I'm eager to bring my fresh perspective and Figma skills to a dynamic team 
            where I can learn, grow, and make a real impact.`
   },
   {
      id: 2,
      img: "amit_patel.jpg",
      name: "Amit Patel",
      job: "the boss",
      info: `Hi! I'm Amit Patel, the leader of this team, 
            bringing years of industry experience to the table.
            My focus is on driving strategic growth, fostering innovation, 
            and guiding our talented team toward success.
            I look forward to working closely with everyone 
            to reach our highest potential and deliver outstanding results.`
   },
   {
      id: 3,
      img: "kim_min-ji.jpg",
      name: "Kim Min-ji",
      job: "web developer",
      info: `Hi! I'm Kim Min-ji, a web developer and proud Harvard graduate.
            I specialize in building clean, efficient, and user-friendly web applications.
            I'm excited to bring my technical skills and academic background 
            to the team to help create amazing digital experiences.`
   },
   {
      id: 4,
      img: "nicolas_brown.jpg",
      name: "Nicolas Brown",
      job: "intern",
      info: `Hi! I'm Nicolas Brown, a fresh graduate eager 
            to kickstart my professional journey as an intern here. 
            I recently completed my studies and am excited 
            to apply my academic background to real-world projects. 
            I look forward to learning from the team and contributing 
            to our collective success.`
   },
   {
      id: 5,
      img: "maya_williams.jpg",
      name: "Maya Williams",
      job: "python/typescript developer",
      info: `Hi! I'm Maya Williams, a software developer with 8 
            years of experience specializing in Python and TypeScript. 
            Throughout my career, I've focused on building robust, 
            scalable applications while constantly refining my coding practices. 
            Currently, I am looking to transition my skills and follow my 
            growing passion for the cybersecurity field.`
   }
]

const img = document.getElementById("avatar");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {

   showPerson(currentItem);
})

function showPerson(person) {

   let item = reviews[person];
   img.src = item.img;
   name.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.info;
}

nextBtn.addEventListener('click', () => {

   currentItem++;
   if(currentItem > reviews.length - 1) {
      currentItem = 0;
   }
   showPerson(currentItem);
})

prevBtn.addEventListener('click', () => {

   currentItem--;
   if(currentItem < 0) {
      currentItem = reviews.length - 1;
   }
   showPerson(currentItem);
})

randomBtn.addEventListener('click', () => {

   currentItem = Math.floor(Math.random() * reviews.length);
   showPerson(currentItem);
})