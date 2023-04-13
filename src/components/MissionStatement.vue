<template>
  <div class="mission-statement">
    <h1>Help us save Vue.js</h1>

    <p>
      Vue.js is a beloved framework by so many frontend engineers, it is known for its ease of use and simplicity, with a lightweight and intuitive syntax that is easy for beginners to learn and use. However it has a serious problem that nobody seems to be addressing.
    </p>

    <h2>Engineers who know Vue.js and companies who use Vue.js can't find each other</h2>

    <p>
      Despite its growing popularity, Vue.js still faces challenges in terms of adoption and recognition in the wider industry. One major issue is that many engineers who specialize in Vue.js struggle to find job opportunities that match their skills and interests. This is partly because some companies are not yet familiar with Vue.js or do not fully appreciate its advantages over other frameworks. As a result, many talented Vue.js engineers may end up working on projects that don't fully utilize their expertise, or may even switch to other frameworks out of frustration or lack of opportunities. This disconnect between supply and demand can ultimately be harmful for both engineers and companies, as it can lead to suboptimal outcomes, wasted resources, and missed opportunities for innovation and growth. That's why we believe it's crucial to connect engineers and companies who share a passion for Vue.js, and to promote its benefits and potential to a wider audience.
    </p>

    <h2>Startups are making the decision to use React because they don't want to spend exponentially more time trying to hire talent</h2>

    <p>
      For startups and other companies looking to build web applications, choosing the right front-end framework can be a critical decision with far-reaching implications. Some companies may choose React.js over Vue.js out of a fear that Vue.js may be more difficult to find talent for. This fear is not entirely unfounded, as React.js has been around longer and has a larger user base and community, which can make it easier to find experienced engineers and get support for the framework. However, we believe that this fear should not deter companies from exploring Vue.js and its potential benefits, especially if they value innovation, efficiency, and a quality developer experience. By building a strong community of Vue.js experts and advocates, and by promoting the framework's advantages and unique features, we hope to help overcome this perception and make Vue.js a more attractive and accessible option for startups and companies of all sizes.
    </p>

    <h2>Green engineers are learning React first because when they look at the existing job boards it looks like Vue.js is dead</h2>

    <p>
      For new engineers entering the web development field, learning a front-end framework is often a top priority, as it can greatly enhance their job prospects and career opportunities. Many new engineers learn React.js, even though it can be more challenging to master. One reason for this is our view into the job market, which shows React beating out Vue 95% of the time. Additionally, many companies have already invested in React.js and may be hesitant to switch to a new framework, which can create a perception of stability and job security for engineers who know React.js. However, we believe that learning Vue.js would be a better investment for new engineer, as it's widely considered to be more approachable and easy to understand. By providing resources and support for learning Vue.js, and by connecting talented engineers with companies that recognize its potential, we hope to help bridge the gap between supply and demand, and make Vue.js a more accessible and desirable framework for new engineers.
    </p>

    <h2>What's out there</h2>

    <h3>Job posting sites</h3>

    <p>
      Current job posting sites suck for engineers in general. RIP Stack Overflow Jobs. The sites that actually have significant traffic and opportunity are so broad that they lack engineering specific filtering. A website that helps you find a job as a receptionist at your local dentist isn't going to care or understand how important remote work is or what the tech stack is. The sites that know how help engineers often still don't get specific enough to separate "I'm looking for a Vue3 engineer" from "We require experience in one of the following (React, Vue, Angular)". The task of sifting through these job postings is exhausting! There are vue-specific job posting sites as well, but unfortunately these lack both quality of content and lack of job seeking features.
    </p>

    <h3>Site profiling</h3>

    <p>
      Another avenue for finding Vue.js jobs is through services that try to provide a tech stack for a given URL. These are often not super reliable and the lists they assemble are expensive and favor the biggest companies, providing little to no value for job seekers.
    </p>

    <h3>Online Communities</h3>

    <p>
      Vue has a ton of great resources for engineers, however most of that content is tailored towards learning Vue.js and related libraries. There are no great communities for Vue.js engineers who are looking for a job and virtually zero communities for companies who are looking to hire Vue.js engineers.
    </p>

    <h2>How we can do better</h2>

    <h3>Assemble the a reliable list of websites/companies that use Vue.js</h3>

    <p>
      Having a reliable and up-to-date list of websites that use Vue.js can be a valuable resource for engineers and companies looking to evaluate and adopt the framework. By showcasing real-world examples of Vue.js in action, this list can provide concrete evidence of the framework's capabilities, performance, and versatility, as well as its potential for innovation and differentiation. This can help build confidence and trust in the Vue.js community and promote its adoption and recognition in the wider industry. Additionally, the list can serve as a source of inspiration and learning for engineers, who can study the code and design patterns of these websites and apply them to their own projects. For companies, the list can provide a pool of potential partners and collaborators who share a passion for Vue.js and can help drive their business goals and objectives.
    </p>

    <h3>Build a community of Vue.js engineers</h3>

    <p>
      Having a strong and supportive community of Vue.js engineers can be a powerful asset for both engineers and companies looking to explore and adopt the framework. This community can provide a valuable network of peers and mentors who can offer guidance, feedback, and support on technical and non-technical issues, as well as a platform for collaboration, innovation, and knowledge sharing. For engineers, this community can help them build and improve their skills, stay up-to-date with the latest trends and best practices, and showcase their work and achievements to potential employers and clients. For companies, this community can provide a diverse and talented pool of candidates who are passionate and experienced in Vue.js, and who can bring fresh ideas and perspectives to their projects and teams.
    </p>

    <h3>Connect the two</h3>

    <p>
      Having both companies and Vue.js engineers in the same community can create a powerful and dynamic platform for connecting the two and promoting collaboration and growth. This community can serve as a marketplace and a talent pool, where companies can showcase their projects, job opportunities, and technical challenges, and where engineers can share their skills, knowledge, and experience, and find relevant and fulfilling job opportunities. By creating a common language and culture around Vue.js, this community can bridge the gap between supply and demand, and promote a more efficient and effective job matching process, where both parties can benefit and thrive. Additionally, this community can provide a forum for dialogue and feedback, where companies can receive valuable insights and suggestions from the engineers who use their products and services, and where engineers can learn from and contribute to the real-world challenges and opportunities faced by companies. By fostering and nurturing this community, we hope to create a more vibrant, diverse, and inclusive ecosystem of Vue.js users and advocates, and promote its long-term success and sustainability.
    </p>
  </div>
</template>

<style>
.mission-statement {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border-radius: 4px;
  padding: var(--space-4) var(--space-5);
  max-width: 80%;
  overflow-y: auto;
}

.mission-statement h1 {
  font-size: 2rem;
  font-weight: bold;
}

.mission-statement h2 {
  font-size: 1.3rem;
  font-weight: bold;
}

.mission-statement h3 {
  font-size: 1.1rem;
  font-weight: bold;
}

@media(max-width:768px){
  .mission-statement {
    max-width: unset;
    border-radius: 0;
    padding: var(--space-3);
  }
}
</style>