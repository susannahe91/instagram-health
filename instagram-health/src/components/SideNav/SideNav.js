import React, { Component } from "react";
import "./SideNav.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Scrollspy from "react-scrollspy";

const sections = [
  { name: "Background", id: "background" },
  {
    name: "Problem",
    id: "define",
    subsections: [
      { name: "Initial Research", id: "define-1" },
      { name: "User Needs", id: "define-2" },
      { name: "Why Instagram?", id: "define-3" },
    ],
  },
  {
    name: "Ideation & Early Prototyping",
    id: "ideation",
    subsections: [
      { name: "UX Flow", id: "ideation-1" },
      { name: "UI Sketches", id: "ideation-2" },
      { name: "Low-Fidelity Prototypes", id: "ideation-3" },
    ],
  },
  {
    name: "User Testing & High-Fidelity Prototype",
    id: "hifi",
    subsections: [
      { name: "User Testing", id: "hifi-1" },
      { name: "High-Fidelity Prototype", id: "hifi-2" },
      { name: "User Testing Revisited", id: "hifi-3" },
    ],
  },
  {
    name: "Final Design & Takeaways",
    id: "final-design",
    subsections: [
      { name: "Before & After", id: "final-design-1" },
      { name: "Final Design", id: "final-design-2" },
      { name: "What I Learned", id: "final-design-3" },
    ],
  },
];

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: null,
      activeSubsection: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const currentPosition = window.pageYOffset;

    // Find the currently active section and its parent section
    const activeSection = sections.find((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        // console.log(element.id)
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          return true;
        }
      }
      return false;
    });

    // Find the currently active subsection
    let activeSubsection = null;
    if (activeSection) {
      activeSubsection = activeSection.subsections?.find((sub) => {
        const element = document.getElementById(sub.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            return true;
          }
        }
        return false;
      });
    }

    // Update the state if the active section or subsection has changed
    if (activeSubsection && activeSubsection !== this.state.activeSubsection) {
      this.setState({
        activeSection: sections.find((s) =>
          s.subsections?.some((sub) => sub.id === activeSubsection.id)
        ),
        activeSubsection,
      });
    } else if (activeSection && activeSection !== this.state.activeSection) {
      this.setState({ activeSection, activeSubsection: null });
    }
  }

  render() {
    const { activeSection, activeSubsection } = this.state;
    return (
      <div className="sidenav">
        <Scrollspy items={sections.map((s) => s.id)} currentClassName="active">
          {sections.map((s) => (
            <li key={s.id} className={s === activeSection ? "active" : ""}>
              <Link to={s.id} smooth={true} className="main-section-nav">
                {s.name}
              </Link>
              {s.subsections && s === activeSection && (
                <ul>
                  {s.subsections.map((sub) => (
                    <li
                      key={sub.id}
                      className={sub === activeSubsection ? "active" : ""}
                    >
                      <Link to={sub.id} smooth={true}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </Scrollspy>
      </div>
    );
  }
}

export default SideNav;
