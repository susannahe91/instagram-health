// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentLinkButton from "./components/ContentLinkButton/ContentLinkButton";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import React, { useEffect, useRef } from "react";
import SideNav from "./components/SideNav/SideNav";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Magnifier } from 'react-image-magnifiers';
import "./App.css";

function scrollToElement(event) {
  event.preventDefault(); // prevent the default link behavior
  const element = document.querySelector(event.target.hash);
  const elementTop = element.getBoundingClientRect().top;
  const offsetPosition = elementTop - 100; // Set the offset position here, 100 is an example value
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function App() {
  // const markRefs = useRef([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.intersectionRatio > 0) {
  //           entry.target.style.animationPlayState = "running";
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.8,
  //     }
  //   );

  //   markRefs.current.forEach((markRef) => {
  //     observer.observe(markRef); // <-- Pass markRef directly instead of markRef.current
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     startEvent: "DOMContentLoaded",
  //   });
  // }, []);

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  });

  // useEffect(() => {
  //   const highlights = document.querySelectorAll(".highlight");

  //   function handleScroll() {
  //     highlights.forEach((highlight) => {
  //       const top = highlight.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       if (top < windowHeight) {
  //         highlight.style.transition = 'background-color 1.65s linear';
  //         highlight.style.backgroundColor = '#ffa8ce63';
  //       } else {
  //         highlight.style.transition = 'none';
  //         highlight.style.backgroundColor = 'transparent';
  //       }
  //     });
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="page-container">
      <section id="landing">
        <div className="showcase-content">
          <div className="showcase">
            <div className="ig_logo"></div>
            <div className="showcase-text">
              <h1>Instagram Health</h1>
              {/* <p>an extension of the Instagram mobile app</p> */}
              <p>by Susanna He, Alan Wang, Joey Dang, & Matthew Nguyen</p>
            </div>
            <a href="#background" onClick={scrollToElement} title="">
              view case study
            </a>
            {/* <Scrollspy>
              <Link to="#background" smooth={true} className="scroll-button">
                view case study
              </Link>
            </Scrollspy> */}
          </div>
        </div>
      </section>

      <div
        data-aos="fade-up"
        data-aos-offset="540"
        data-aos-delay="1880"
        data-aos-duration="2500"
        className="main-container"
      >
        <SideNav data-aos="fade-up" className=""></SideNav>

        <main id="main-content">
          <section className="main-section" id="background">
            <h2>Background</h2>
            <p>
              Picture this: it’s the start of a new year, and you’re brimming
              with motivation! You make many New Years’ resolutions, some of
              which include leading a healthier lifestyle – you’ve been{" "}
              <span>
                wanting to pursue better health habits, from eating better to
                exercising regularly.
              </span>{" "}
              As long as you follow a few steps to a healthy routine, these
              goals that you set yourself up to shouldn’t be too hard to
              achieve, you think.
            </p>
            <p>
              But a couple of weeks into this new year, and suddenly you find
              that nothing is going according to your plans at all! All kinds of
              things get in the way – you want to exercise and eat healthier,
              but most days of the week you fail to find the energy or
              motivation to do so. Who can be bothered to stick to a routine
              when you’ve got classes/work, meetups with friends, pets to take
              care of, and hobbies to enjoy? On the few days that you do have
              the time to cook or exercise, you end up telling yourself, “I’ll
              do it tomorrow,” and put it off indefinitely. After a few months
              pass, you’ve made{" "}
              <span>no progress towards your goal of a healthy lifestyle</span>,
              and you don’t know where it all went wrong.
            </p>
            <p>
              We wanted to{" "}
              <span>
                help people who want to make healthy lifestyle choices hold
                themselves accountable for making healthy choices
              </span>
              . We were inspired by this idea because many people run into the
              situation described above; they are all too common amongst
              ourselves and our peers.
            </p>
            <p>
              Often, a little push now and then is all someone needs to make
              better choices. By extending a social media app to facilitate
              healthy lifestyle posts, users can get the push they need from
              their friends while also giving that push to others.{" "}
              <span>
                A social media environment dedicated to these sorts of posts
              </span>{" "}
              would be a fun and interactive way to help users and their friends
              complete healthy goals as they hold each other accountable and
              share new ways to be healthy.
            </p>
          </section>

          <section
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="550"
            data-aos-duration="800"
            className="main-section"
            id="define"
          >
            <h2>Problem</h2>
            <section className="sub-section" id="define-1">
              <h3>Initial Research</h3>
              <p>
                We found 8 young people of varying ages who are trying to stay
                healthy to interview. During interviews, we first presented
                users with a photo collage of various healthy/unhealthy
                behaviors and asked them to pick photos that best represented
                their current lifestyle, their ideal lifestyle, and the aspects
                of their life they wished to work on. We then asked them to
                explain their choices in order to uncover more details about
                their lifestyles and better frame our other interview questions.
                Our interviews were “semi-structured,” in which we asked a set
                of planned interview questions and gave ourselves the freedom to
                ask questions “off-the-script” in order to better understand our
                interviewees. We then summarized our interview findings into
                general themes, answering our 3 main research questions:
              </p>
              <h5>
                <span>
                  What obstacles are stopping people who want to make healthy
                  lifestyle choices from doing so?
                </span>
              </h5>
              <ul>
                <li>Hard to find time / busy</li>
                <li>Laziness / unproductive / no motivation</li>
                <li>Lack of a good space / environment / resources</li>
              </ul>

              <h5>
                <span>
                  What would help users be more encouraged to make healthy
                  lifestyle choices?
                </span>
              </h5>
              <ul>
                <li>More time</li>
                <li>Better resources / environment</li>
                <li>
                  Something to stop getting distracted / prevent self from being
                  unproductive
                </li>
              </ul>

              <h5>
                <span>
                  What motivates people to make healthy lifestyle choices?
                </span>
              </h5>
              <ul>
                <li>Self-improvement</li>
                <li>Friends</li>
                <li>Societal pressures</li>
              </ul>
              <p>
                Looking at these trends, we arrived at our problem: <br></br>
                <span className="problem-statement">
                  Unmotivated young adults need external support to actively
                  change their lifestyle habits in order to maintain a healthier
                  lifestyle.
                </span>
              </p>
            </section>

            {/* <h4 className="problem-statement">
              Unmotivated young adults need external support to actively change
              their lifestyle habits in order to maintain a healthier lifestyle.
            </h4> */}

            <section
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="550"
              data-aos-duration="800"
              className="sub-section"
              id="define-2"
            >
              <h3>User Needs</h3>
              {/* <img src="instagram-health\src\assets\Persona_1-min.png" alt="Image description" /> */}

              <div className="image-and-text">
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="550"
                  data-aos-duration="800"
                  id="persona-1"
                ></div>
                <p>
                  Based on our earlier research, this persona represents a user
                  who{" "}
                  <span>
                    regularly makes unhealthy lifestyle choices, but would like
                    to strive towards living a healthier life
                  </span>
                  . The struggles that they face that deter them from a healthy
                  lifestyle are based on the same struggles that we heard most
                  often from our own users during our interviews with them,
                  which were namely a lack of motivation, and a lack of
                  understanding on where/how to start on improving themselves.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="550"
                data-aos-duration="800"
                className="image-and-text"
              >
                <p>
                  This persona represents a user who is trying to{" "}
                  <span>maintain a healthy lifestyle</span>, but is currently
                  struggling to keep it up due to lack of motivation or an
                  abundance of distractions. During our user research, we found
                  that some of the people we interviewed were struggling not
                  because they were being unhealthy all the time, but rather
                  because although they were already making some healthy
                  choices, they were having trouble being consistent about it.
                </p>
                <div id="persona-2"></div>
                {/* <img src="\assets\Persona_2-min.png" className="figure-img" id="persona-2" alt="2nd user persona"></img> */}
              </div>
            </section>

            <section className="sub-section" id="define-3">
              <h3>Why Instagram?</h3>
              <img
                src="\assets\competitive_audit-min.png"
                className="figure-img"
                id="audit"
                alt="Competitive audit between 4 apps: Instagram, Habitica, Snapchat, and BeReal."
              ></img>
              <p>
                After conducting domain research and comparing various social
                media apps including the four shown above, we arrived at
                Instagram as our app of choice to extend the design of in order
                to tackle our problem.{" "}
              </p>
              <p>
                We felt that Instagram’s constant stream of interaction,
                emphasis on photos/videos, and ease of content discovery
                (through its Search/Explore page and Stories) gave it the most
                potential to create an effective space in which users could
                motivate both themselves and others along their respective
                health journeys.
              </p>
            </section>
          </section>

          <section
            data-aos="fade-up"
            data-aos-offset="270"
            data-aos-delay="1480"
            data-aos-duration="800"
            className="main-section"
            id="ideation"
          >
            <h2>Ideation & Early Prototyping</h2>
            <section className="sub-section" id="ideation-1">
              <h3>UX Flow</h3>

              <div className="flow-1-container">
                <img
                  src="\assets\flow_1-min.png"
                  className="figure-img"
                  id="flow-1"
                  alt="1st UX flow"
                ></img>
                {/* <Magnifier imageSrc="assets/flow_1-min.png">
                <div className="figure-img" id="flow-1"></div>
              </Magnifier> */}
                <p className="figure-text">
                  In our <span>User Flow 1</span>, we explored how the feature
                  could be implemented using Instagram’s already-existing{" "}
                  <span>home feed flow</span>. We added a new “Health Tab” for
                  users to post pictures of themselves making healthy lifestyle
                  choices and look at “Health” photos posted by other users. The
                  user can post photos like normal to this feed which will be
                  shown to their followers, which will also increase their
                  streak (see below) of daily posts.
                </p>
              </div>

              <div className="flow-2-container">
                <img
                  src="\assets\flow_2-min.png"
                  className="figure-img"
                  id="flow-2"
                  alt="2nd UX flow"
                ></img>
                <p className="figure-text">
                  In our <span>User Flow 2</span>, we explored how the feature
                  could be implemented using Instagram’s already-existing{" "}
                  <span>story flow</span>, through the use of special “Health”
                  stickers, which can be added to a normal story. Stories with
                  these “Health” stickers will then show up differently on
                  users’ Instagram feeds (within their own story tabs) and with
                  higher priority in order to stand out from normal story
                  content.
                </p>
                <p>
                  We found that several of the apps in our competitive audit
                  encourage users to interact with the app on a constant/daily
                  basis. Habitica offers daily check-in incentives to users,
                  BeReal encourages daily interaction by forcing users to post
                  at certain times, and Snapchat allows users to maintain
                  “streaks” with their friends to keep track of how many days
                  they’ve made posts in a row. For both of our UX flows, we drew
                  inspiration from these features to create a “Health” streak
                  counter that acts in a similar fashion. Users who post
                  multiple days in a row on either their health story or health
                  tab feed will be rewarded with a streak counter that appears
                  on their health profile.
                </p>
              </div>
            </section>

            <section
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="50"
              data-aos-duration="800"
              className="sub-section"
              id="ideation-2"
            >
              <h3>UI Sketches</h3>
              <h5>User Flow 1</h5>
              <img
                src="\assets\flow_1_sketch-1-min.png"
                className="figure-img"
                id="sketch1-1"
                alt="1st set of sketches, based on UX Flow 1 (part 1)"
              ></img>
              <img
                src="\assets\flow_1_sketch-2-min.png"
                className="figure-img"
                id="sketch1-2"
                alt="1st set of sketches, based on UX Flow 1 (part 2)"
              ></img>

              <h5>User Flow 2</h5>
              <img
                src="\assets\flow_2_sketch-min.png"
                className="figure-img"
                id="sketch2"
                alt="2nd set of sketches, based on UX Flow 2"
              ></img>
              <p>
                We designed our sketches to reflect the different screens and
                options available outlined in our UX flow diagrams. Each step in
                our UX flow gave us the overall function we needed a
                screen/sketch to implement, so we followed that as we each came
                up with our own designs to sketch out; having that general idea
                made it easier for us to be creative with our sketching process.
                The sketches shown above were the results of all of our sketches
                compiled, and then redrawn under one consistent style. Making
                many UI sketches allowed us to find and come up with new ways to
                accomplish the steps in our UX flows.
              </p>
            </section>

            <section
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay="50"
              data-aos-duration="800"
              className="sub-section"
              id="ideation-3"
            >
              <h3>Low-Fidelity Prototypes</h3>
              <h5>Prototype A (Flow 1)</h5>
              <img
                src="\assets\Prototype_A-1-min.png"
                className="figure-img"
                id="prototype1-1"
                alt="First 4 screens of 1st Lo-fi prototype"
              ></img>
              <img
                src="\assets\Prototype_A-2-min.png"
                className="figure-img"
                id="prototype1-2"
                alt="Last 5 screens of 2nd Lo-fi prototype"
              ></img>
              <p>
                Prototype A was based on User Flow 1, which involves the use of
                a new health tab where users can post healthy pictures of
                themselves to share with their friends. In this way, users can
                keep track of healthy photos of themselves and their friends in
                one centralized location on the app. We modeled the UI of the
                Health feed to look very similar to the normal Instagram home
                feed to make users feel at home, making the new feature easy to
                pick up.
              </p>
              <p>
                For the search menu within our Health feed, we modeled it
                similar to Instagram’s current explore feed; we added a few
                health tags users can select to filter the posts to view on the
                search health page. We also allowed users to add these health
                tags to their post to help distinguish the type of health post
                they are posting. We chose to display a “Health Streak” at the
                top of our newly-created Health feed because we wanted to make
                it look similar to the direct message notifications that people
                receive from Instagram.
              </p>
              <p>
                During our original planning from the previous step, we wanted
                to keep the Health feed blurred until users made their daily
                “Health post”. However, after further consideration, we decided
                to allow users to see a few posts before prompting them with the
                “Health Streak” notification and blurring the rest of the posts.
                We had thought that this way, users could find some inspiration
                from the first few posts they see and still be encouraged to
                post their own photos so that they can see more. After even more
                consideration however, we decided to abandon this idea of
                blurring posts altogether due to how restrictive it might feel.
                We instead decided to allow users to scroll freely, but have the
                notification prompting the user to post pop up again every few
                posts that the user scrolls through.
              </p>

              <h5>Prototype B (Flow 2)</h5>
              <img
                src="\assets\Prototype_B-1-min.png"
                className="figure-img"
                id="prototype2-1"
                alt="First 4 screens of 2nd Lo-fi prototype"
              ></img>
              <img
                src="\assets\Prototype_B-2-min.png"
                className="figure-img"
                id="prototype2-2"
                alt="Last 4 screens of 2nd Lo-fi prototype"
              ></img>
              <p>
                Prototype B was based on User Flow 2 where users can create
                stories and place the health sticker on them. Unlike with
                Prototype A, Prototype B implements the new health feature
                without having a dedicated menu/feed button for it on the bottom
                navigation bar. In this way, we intended to make it so that
                users would have an even easier time adjusting to the feature
                since it simply adds on to the already-existing features of
                Instagram stories and stickers.
              </p>
              <p>
                Both prototypes make use of the idea of “streaks” in order to
                reward and encourage users to consistently check in and share
                updates on their health journey with other users. In Prototype
                A, this streak feature works in tandem with our idea of limiting
                the user to being able to only view the first few posts on their
                health feed until they post for the day in order to further
                entice users to be consistent with their health routines while
                staying connected with their friends and family who also use the
                app. We hoped that being able to see and share health posts
                (Prototype A) or stories (Prototype B) would allow users to find
                sources of inspiration from one another for ways to stay healthy
                (exercise routines, recipes, etc.) and keep each other
                accountable with their presences and activity online.
              </p>
            </section>
          </section>

          <section
            data-aos="fade-up"
            data-aos-offset="270"
            data-aos-delay="1480"
            data-aos-duration="800"
            className="main-section"
            id="hifi"
          >
            <h2>User Testing & High-Fidelity Prototype</h2>
            <section className="sub-section" id="hifi-1">
              <h3>User Testing</h3>
              <p>
                We performed user testing on 4 young people from the ages 19-22
                who were trying to stay healthy. 2 of these users were students
                and the other 2 were working professionals. They were all trying
                to live a healthier lifestyle, so we found them suitable for
                user testing. All of the users reported that they had used
                Instagram before, though each had different levels of
                familiarity with the app.{" "}
              </p>
              <p>
                While testing <span>Prototype A</span>, users liked that the
                “Health tab” was separate from Instagram, which made it
                straightforward to find. One user noted how a separate health
                tab could{" "}
                <span>
                  help differentiate the health features from typical Instagram
                  activities
                </span>
                , placing an emphasis on the health aspects that our prototype
                would bring to Instagram. Users also liked the ability to post
                to a select group of “Health” friends because it allowed them to
                be more private and gear their posts to specific followers. Some
                users were confused by the position of the search bar for the
                “Health” tab in Prototype A. One user also felt that this search
                screen was redundant with Instagram’s Explore tab.
              </p>
              <p>
                While testing <span>Prototype B</span>, users liked that the
                feature was easier to use, since the user simply had to add a
                sticker to the story. One user noted that the “Health Story”
                feature was <span>more intuitive to use</span>, since the user
                did not have to go through the entire “Health Tab”. However, our
                other users felt that it was too generic and too close to how
                Instagram looks normally. Users noted that since the feature is
                integrated with Instagram stories, Health stories{" "}
                <span>could be overlooked and forgotten over time</span>. One
                user noted that they didn’t like only having the option to post
                to their story for health-related things and preferred posts
                over stories. Though still in a low-fidelity stage, two users
                also felt that the design of the heart sticker could be
                improved.{" "}
              </p>
              <p>
                Based on our findings, we noticed that{" "}
                <span>
                  most (3 out of 4) of our test users preferred Prototype A over
                  Prototype B
                </span>{" "}
                because Prototype A contained a new and separate section for
                health posts, which made the new health features more obvious to
                the user. They felt that adding “health stickers” to stories in
                Prototype B was too subtle and was harder to notice and keep up
                with.
              </p>
            </section>

            <section className="sub-section" id="hifi-2">
              <h3>High-Fidelity Prototype</h3>
              {/* <div className="figure-img" id="hifi-1"></div>
              <div className="figure-img" id="hifi-2"></div>
              <div className="figure-img" id="alt-hifi"></div> */}
              <img
                className="figure-img"
                id="hifi-1"
                src="\assets\HiFi-1-min.png"
                alt="First draft of high-fidelity prototypes (first 4 screens)."
              ></img>
              <img
                className="figure-img"
                id="hifi-2"
                src="\assets\HiFi-2-min.png"
                alt="First draft of high-fidelity prototypes (last 5 screens)."
              ></img>
              <p>
                From our user testing, we learned that generally, users did not
                like Prototype B as much as A, which involved posting “Health
                Stories” using Instagram’s existing story feature. Because our
                users feared that they would forget about the feature as time
                went on due to the way the feature was integrated alongside
                normal Instagram stories, we felt that unmotivated users would
                be better served by having a consistent and dedicated location
                to access health-related content. As a result, we decided to use
                UX Flow 1 / Prototype A as the basis for our high-fidelity
                prototypes.
              </p>
              <p>
                We mostly stayed faithful to our original UX Flow 1, but added
                an option for users to choose their audience for their posts,
                letting them make their health post visible to either “Everyone”
                or only a specific group of “Health Friends”. Posts from “Health
                Friends'' will show up at the top of users’ feeds with a special
                pink star icon, as shown in our high-fidelity screens. Health
                posts from followers who aren’t Health Friends will show up on
                the feed after all Health Friends’ posts are viewed.
              </p>
              <p>
                We made this change, inspired by Instagram's already-existing
                Close Friends feature, because we felt that the definition of
                “healthy” could vary between users. This feature would allow
                users to “curate” their feed to include posts that align with
                their own definition. Additionally, from our user research, our
                participants raised concerns about the issue of social
                comparison, further prompting us to add the Health Friends
                feature. This would allow users to post to a certain group of
                friends they are comfortable with, and give users the ability to
                control the flow/order of their feed by selecting whose posts
                will show up first. This way, users can effectively choose to
                only look at the Health posts of those that they trust on
                Instagram, should they decide to scroll through only the Health
                Friends’ section of their feed.
              </p>

              <h5>Alternate Screens</h5>
              <img
                className="figure-img"
                id="alt-hifi"
                src="\assets\Alternate_Screens-min.png"
                alt="Alternate screens for the home and search pages."
              ></img>
              <p>
                The right screen shows an alternative version of the Health feed
                screen, inspired by the existing “Reels” page on Instagram. We
                created this alternate version because it encourages users to
                engage with the post before moving on to the next, as posts take
                up the whole screen—forcing users to view each post one by one.
                With the more traditional feed, users are more apt to quickly
                scroll past their friends' posts, whereas this alternate version
                makes it less likely for users to accidentally skip a post.
                Consequently, this results in more effort required for users to
                get to specific posts that they want to look at within their
                feed. With these two differing screens, we wanted to find out
                whether users prefered more engagement or having the flexibility
                to scroll quickly through the Health posts.
              </p>
              <p>
                The left screen shows an alternative version of the search page
                that is inspired by the existing “Explore” page on Instagram. We
                created this alternate version because it is more similar to and
                consistent with the typical Instagram experience, and it allows
                users to see more “Health” posts at once. However, with this
                alternate version, users can’t easily see specific details of
                the posts, like the name, tags, and health streak of the poster.
                If they want to see any of the posts’ details, they would need
                to tap on each post individually. We wanted to find out whether
                users prefered seeing more posts at once or whether they
                prefered being able to easily see the posts’ details from the
                Explore screen.{" "}
              </p>
            </section>

            <section className="sub-section" id="hifi-3">
              <h3>User Testing Revisited</h3>
              <p>
                In terms of the designs for the Health tab, users preferred the
                original tab over the alternate tab because not having to view
                posts one by one allowed them to more easily scroll through
                other users’ Health posts and see other users’ profiles. They
                also wanted to be able to see their own posts, which would be
                easier in the original design. As a result, we decided to keep
                our original Health feed screen for our revised prototype. On
                the other hand, users preferred the alternative design for the
                Search tab (which was based on Instagram’s current Search tab)
                because it showed more posts on the screen at once; our users
                generally felt that being able to see more posts quickly was
                more important to them than being able to see the post’s details
                from the Search screen. Because of this, we decided to replace
                our Search tab with our alternate design in our revised
                prototype.{" "}
              </p>
              <p>
                Users also felt that the Health streak indicator could also be
                changed to stand out more and more effectively convey the idea
                of a “streak”. To achieve this, we changed the Health streak
                indicator from a heart to a flame icon. One user also noted that
                they wanted to see the tags of Health posts, so we also added
                the tags for each post to the Health feed.{" "}
              </p>
            </section>
          </section>

          <section
            data-aos="fade-up"
            data-aos-offset="270"
            data-aos-delay="1480"
            data-aos-duration="800"
            className="main-section"
            id="final-design"
          >
            <h2>Final Design & Takeaways</h2>

            <section className="sub-section" id="final-design-1">
              <h3>Before & After</h3>
              <img
                className="figure-img"
                id="before-after-home"
                src="\assets\Before_and_After_Home-min.png"
                alt="Before and after for home screen."
              ></img>
              <p>
                After receiving feedback on our Health feed page, we decided to
                change our health streak icon to a flame to better communicate
                the idea of a streak, and to keep the icon unique from the
                Health icon that is used for the navigation bar. We also allowed
                users to see the tags for each post from the Health feed, which
                was a detail that we had overlooked when designing the post tag
                feature in our past prototypes; previously, these tags were only
                portrayed on our Search tab screens. Having the tags here in the
                feed would also{" "}
                <span>allow users to browse the Health tags more easily</span>,
                since users can simply tap on the tag directly from the posts on
                their feed after viewing.
              </p>

              <img
                className="figure-img"
                id="before-after-search"
                src="\assets\Before_and_After_Search-min.png"
                alt="Before and after for search screen."
              ></img>
              <p>
                Looking at the user feedback we received on the health search
                page, we decided to move forward with our alternative design,
                which takes after Instagram’s search function. This involved
                removing the top bar containing the header, streak indicator,
                and camera icon, as well as each posts’ details from the screen
                in order to maximize the space for displaying posts. Based on
                our user research, the users who preferred our alternative
                design{" "}
                <span>
                  valued being able to see more posts at once over being able to
                  see the posts’ information from the Search screen
                </span>
                . With our target audience in mind, we felt that users would
                benefit more from being able to see more health posts rather
                than seeing more details (post tags, descriptions, account
                names), as seeing more posts would help those in need of quick
                sources of inspiration on their health journey. Should a user
                like to see more details, they would be able to easily tap on a
                post and view these details (username, description, tag, and
                streaks value) there.
              </p>
            </section>

            <section
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="550"
              data-aos-duration="800"
              className="sub-section"
              id="final-design-2"
            >
              <h3>Final Design</h3>
              <img
                className="figure-img"
                id="final-hifi-1"
                src="\assets\Final_HiFi-1-min.png"
                alt="Final draft of high-fidelity prototypes (first 5 screens)."
              ></img>
              <img
                className="figure-img altscreen"
                id="final-hifi-2"
                src="\assets\Final_HiFi-2-min.png"
                alt="Final draft of high-fidelity prototypes (last 4 screens)."
              ></img>
            </section>

            <section className="sub-section" id="final-design-3">
              <h3>What I Learned</h3>
              <p>
                During my time working on this case study, feedback was crucial
                at every step. Whether the opinions and evaluations come from
                peers, friends, or our users, each remark helped me make sure
                that I was looking at our solution from multiple angles.{" "}
              </p>
              <p>
                Yet naturally, getting feedback from multiple sources came with
                contradictions – opinions and suggestions would conflict with
                one another, even when each side presented a compelling
                reasoning. During our design process, there was rarely ever a
                clear-cut answer to the questions of “which would be better” or
                “should we change this” and the like, since each decision came
                with its own set of drawbacks.
              </p>
              <p>
                In the end, reminding myself of what the goal of our design was,
                as well as who our design should target, is what helped guide my
                decision-making during our design process. While it was often
                tempting to go with the answer that pleased the largest and most
                general audience, it was important to remember that our target
                audience was not the entirety of Instagram's userbase, but
                simply those who wanted to work towards or maintain a healthy
                lifestyle.{" "}
              </p>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
