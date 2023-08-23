import SideBar from "../components/sideBar";

function About() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <section className="bg-gray-60 bg-gray-900 h-screen overflow-auto">
        <div className="p-2.5">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-white w-full">
            About Expressive Echoes
          </h1>
          <p className="mb-3 text-lg text-gray-300 lg:text-xl dark:text-gray-400">
            Hello there! I`m Shishiro, an enthusiastic aspiring full stack
            developer with a passion for creating meaningful and dynamic web
            applications. Welcome to my blog website, Expressive Echoes, where
            I`m excited to share my journey, insights, and experiences in the
            world of web development. <br /> At Expressive Echoes, I`ve combined
            my love for technology and storytelling to bring you a platform that
            not only showcases my growth but also provides a space for learning
            and interaction. This blog is a product of the powerful MERN stack
            an acronym that stands for MongoDB, Express.js, React, and Node.js.
            These technologies form the backbone of this website, allowing me to
            craft a seamless and responsive user experience.
            <br /> One of the core features of Expressive Echoes is the ability
            to perform CRUD operations on the blogs I share. CRUD, which stands
            for Create, Read, Update, and Delete, allows me to publish new
            content, present it to you in an accessible format, update posts as
            I learn and grow, and even remove content that`s no longer relevant.
            This interactivity ensures that the website remains fresh, relevant,
            and aligned with my ongoing journey as a full stack developer.{" "}
            <br /> I`ve intentionally chosen to write in simple and
            easy-to-understand English. My goal is to make technology and web
            development accessible to everyone, regardless of their background
            or familiarity with the subject. I believe that even complex
            concepts can be explained in a way that feels approachable, and I`m
            committed to breaking down barriers between the tech world and those
            eager to explore it.
            <br /> In crafting Expressive Echoes, I`ve aimed to create a
            welcoming virtual space where I can share not only the technical
            aspects of my journey but also the personal insights and
            inspirations that shape my development path. Thank you for joining
            me on this adventure, and I hope that as you explore the content on
            this website, you`ll find valuable information, a supportive
            community, and a place to connect with the exciting world of full
            stack development.
            <br /> Here`s to embracing the echoes of technology and transforming
            them into something truly expressive. Happy reading!
          </p>
          <span className="mb-3 text-lg text-gray-300 lg:text-xl dark:text-gray-400">
            Warmest regards, Shishiro
          </span>
        </div>
      </section>
    </div>
  );
}

export default About;
