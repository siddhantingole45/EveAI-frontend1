import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Link as LinkIcon } from "lucide-react";

export default function SingleSubject() {
        const navigate = useNavigate();
    
  const [openChapter, setOpenChapter] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

const subject = {
  name: "Mathematics",
  chapters: [
    {
      name: "Algebra",
      topics: [
        {
          name: "Linear Equations",
          subtopics: [
            {
              name: "Introduction to Linear Equations",
              description:
                "A linear equation is an equation between two variables that gives a straight line when plotted on a graph.",
              resources: [
                {
                  title: "Khan Academy - Linear Equations",
                  link: "https://www.khanacademy.org/math/algebra/linear-equations"
                }
              ]
            },
            {
              name: "Solving Linear Equations",
              description:
                "Linear equations can be solved by balancing, substitution, or elimination methods.",
              resources: [
                {
                  title: "Math is Fun - Solving Linear Equations",
                  link: "https://www.mathsisfun.com/algebra/linear-equations.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Calculus",
      topics: [
        {
          name: "Differentiation",
          subtopics: [
            {
              name: "Concept of Derivatives",
              description:
                "The derivative measures the rate at which a function changes as its input changes.",
              resources: [
                {
                  title: "Paul’s Online Notes - Derivatives",
                  link: "https://tutorial.math.lamar.edu/Classes/CalcI/DerivativeIntro.aspx"
                }
              ]
            },
            {
              name: "Applications of Derivatives",
              description:
                "Derivatives are used to find slopes of curves, rates of change, and optimization problems.",
              resources: [
                {
                  title: "Khan Academy - Applications of Derivatives",
                  link: "https://www.khanacademy.org/math/differential-calculus/applications-derivatives"
                }
              ]
            }
          ]
        },
        {
          name: "Integration",
          subtopics: [
            {
              name: "Introduction to Integrals",
              description:
                "An integral is the reverse process of differentiation and represents the area under a curve.",
              resources: [
                {
                  title: "Khan Academy - Integration",
                  link: "https://www.khanacademy.org/math/integral-calculus"
                }
              ]
            },
            {
              name: "Definite and Indefinite Integrals",
              description:
                "Indefinite integrals represent families of functions, while definite integrals compute exact area under curves.",
              resources: [
                {
                  title: "Math is Fun - Integration",
                  link: "https://www.mathsisfun.com/calculus/integration-introduction.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Geometry",
      topics: [
        {
          name: "Triangles",
          subtopics: [
            {
              name: "Pythagoras Theorem",
              description:
                "In a right-angled triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides.",
              resources: [
                {
                  title: "Pythagorean Theorem - Khan Academy",
                  link: "https://www.khanacademy.org/math/geometry/pythagorean-theorem"
                }
              ]
            },
            {
              name: "Properties of Triangles",
              description:
                "The sum of angles in a triangle is always 180°. Types of triangles include equilateral, isosceles, and scalene.",
              resources: [
                {
                  title: "Math is Fun - Triangles",
                  link: "https://www.mathsisfun.com/triangle.html"
                }
              ]
            }
          ]
        },
        {
          name: "Circles",
          subtopics: [
            {
              name: "Circle Basics",
              description:
                "A circle is the set of all points in a plane that are equidistant from a fixed point called the center.",
              resources: [
                {
                  title: "BBC Bitesize - Circles",
                  link: "https://www.bbc.co.uk/bitesize/guides/zsg87hv/revision/1"
                }
              ]
            },
            {
              name: "Tangents and Chords",
              description:
                "A tangent touches the circle at exactly one point, while chords connect two points on the circle.",
              resources: [
                {
                  title: "Math Open Reference - Circles",
                  link: "https://www.mathopenref.com/circle.html"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};



  if (!subject) {
    return <div className="p-6 text-gray-600">No subject selected.</div>;
  }

  return (
    
    <div
            className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-[#0d0f1c] cursor-pointer" onClick={() => navigate("/dashboard")}>
                            <div className="size-4">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                            <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
                                EveAI
                            </h2>
                        </div>
                        <div className="flex items-center gap-9">
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="/dashboard">
                                Dashboard
                            </a>
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">
                                Library
                            </a>
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">
                                Resources
                            </a>
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">
                                Community
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        {/* Search */}
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div className="text-[#47579e] flex border-none bg-[#e6e9f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                    </svg>
                                </div>
                                <input
                                    placeholder="Search"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-[#e6e9f4] focus:border-none h-full placeholder:text-[#47579e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                />
                            </div>
                        </label>

                        {/* Notification */}
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <div className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                                </svg>
                            </div>
                        </button>

                        {/* Profile Image */}
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" onClick={() => navigate("/settings")}
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkC2FJhVK-2zFlBvujMa-uBHSRKQOy4zdBHlMTBzC7B0jlZhja-8KuzJtaH7PNiyF6lT-J7KQ_wHcwlWEl9kVWgbY_tdqH-7itno0fKArA6N0ZgCW8KNQgyLsED4UxL-sN6kw4ejFzmX65lrXqSmcoqD3vMkUgFDe20RmzU3FUu5oKFw0O8ihxtdLfDjXq2hGF2GV6jBLuMrjNGStbO-jpDPtD2M9Hm2SagUyl8lVuz6oEQqnLRSDhDifyEJ11OyMkLSRU32WaKKc3")',
                            }}
                        ></div>
                    </div>
                </header>
    <div className="p-6 w-7xl mx-auto">
      {/* Subject Title */}
      <h1 className="text-3xl font-bold mb-6">{subject.name}</h1>

      {/* Chapters */}
      {subject.chapters.map((chapter, cIndex) => (
        <div
          key={cIndex}
          className="mb-4 border rounded-xl shadow-sm bg-white overflow-hidden"
        >
          {/* Chapter Header */}
          <div
            className="flex items-center cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
            onClick={() =>
              setOpenChapter(openChapter === cIndex ? null : cIndex)
            }
          >
            {openChapter === cIndex ? (
              <ChevronDown className="mr-2" />
            ) : (
              <ChevronRight className="mr-2" />
            )}
            <h2 className="text-xl font-semibold">{chapter.name}</h2>
          </div>

          {/* Topics inside Chapter */}
          {openChapter === cIndex && (
            <div className="px-6 py-4">
              {chapter.topics.map((topic, tIndex) => (
                <div key={tIndex} className="mb-4">
                  <div
                    className="flex items-center cursor-pointer text-blue-700"
                    onClick={() =>
                      setOpenTopic(openTopic === tIndex ? null : tIndex)
                    }
                  >
                    {openTopic === tIndex ? (
                      <ChevronDown className="mr-2 text-blue-600" />
                    ) : (
                      <ChevronRight className="mr-2 text-blue-600" />
                    )}
                    <h3 className="text-lg font-medium">{topic.name}</h3>
                  </div>

                  {/* Subtopics */}
                  {openTopic === tIndex && (
                    <div className="ml-6 mt-2 space-y-3">
                      {topic.subtopics.map((sub, sIndex) => (
                        <div key={sIndex} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold">{sub.name}</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            {sub.description}
                          </p>

                          {/* Resource Links */}
                          {sub.resources &&
                            sub.resources.map((res, rIndex) => (
                              <a
                                key={rIndex}
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-blue-500 hover:underline mt-2 text-sm"
                              >
                                <LinkIcon size={14} />
                                {res.title}
                              </a>
                            ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}
