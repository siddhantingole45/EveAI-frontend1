import React, { useState } from "react";
import { ChevronDown, ChevronRight, Link as LinkIcon } from "lucide-react";
import AppShell from "../Components/AppShell";

export default function SingleSubject() {
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
                description: "A linear equation is an equation between two variables that gives a straight line when plotted on a graph.",
                resources: [
                  { title: "Khan Academy - Linear Equations", link: "https://www.khanacademy.org/math/algebra/linear-equations" },
                ],
              },
              {
                name: "Solving Linear Equations",
                description: "Linear equations can be solved by balancing, substitution, or elimination methods.",
                resources: [
                  { title: "Math is Fun - Solving Linear Equations", link: "https://www.mathsisfun.com/algebra/linear-equations.html" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Calculus",
        topics: [
          {
            name: "Differentiation",
            subtopics: [
              {
                name: "Concept of Derivatives",
                description: "The derivative measures the rate at which a function changes as its input changes.",
                resources: [
                  { title: "Paul’s Online Notes - Derivatives", link: "https://tutorial.math.lamar.edu/Classes/CalcI/DerivativeIntro.aspx" },
                ],
              },
              {
                name: "Applications of Derivatives",
                description: "Derivatives are used to find slopes of curves, rates of change, and optimization problems.",
                resources: [
                  { title: "Khan Academy - Applications of Derivatives", link: "https://www.khanacademy.org/math/differential-calculus/applications-derivatives" },
                ],
              },
            ],
          },
          {
            name: "Integration",
            subtopics: [
              {
                name: "Introduction to Integrals",
                description: "An integral is the reverse process of differentiation and represents the area under a curve.",
                resources: [
                  { title: "Khan Academy - Integration", link: "https://www.khanacademy.org/math/integral-calculus" },
                ],
              },
              {
                name: "Definite and Indefinite Integrals",
                description: "Indefinite integrals represent families of functions, while definite integrals compute exact area under curves.",
                resources: [
                  { title: "Math is Fun - Integration", link: "https://www.mathsisfun.com/calculus/integration-introduction.html" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Geometry",
        topics: [
          {
            name: "Triangles",
            subtopics: [
              {
                name: "Pythagoras Theorem",
                description: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides.",
                resources: [
                  { title: "Pythagorean Theorem - Khan Academy", link: "https://www.khanacademy.org/math/geometry/pythagorean-theorem" },
                ],
              },
              {
                name: "Properties of Triangles",
                description: "The sum of angles in a triangle is always 180°. Types of triangles include equilateral, isosceles, and scalene.",
                resources: [
                  { title: "Math is Fun - Triangles", link: "https://www.mathsisfun.com/triangle.html" },
                ],
              },
            ],
          },
          {
            name: "Circles",
            subtopics: [
              {
                name: "Circle Basics",
                description: "A circle is the set of all points in a plane that are equidistant from a fixed point called the center.",
                resources: [
                  { title: "BBC Bitesize - Circles", link: "https://www.bbc.co.uk/bitesize/guides/zsg87hv/revision/1" },
                ],
              },
              {
                name: "Tangents and Chords",
                description: "A tangent touches the circle at exactly one point, while chords connect two points on the circle.",
                resources: [
                  { title: "Math Open Reference - Circles", link: "https://www.mathopenref.com/circle.html" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <AppShell title={subject.name}>
      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-[#0f111a]">{subject.name}</h1>
          <p className="mt-2 text-sm text-[#56618f]">Explore chapters, topics, and resources for this subject.</p>
        </div>

        {subject.chapters.map((chapter, cIndex) => (
          <div key={cIndex} className="overflow-hidden rounded-3xl border border-[#e2e6ef] bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenChapter(openChapter === cIndex ? null : cIndex)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <div className="flex items-center gap-3">
                {openChapter === cIndex ? <ChevronDown /> : <ChevronRight />}
                <span className="text-xl font-semibold text-[#0f111a]">{chapter.name}</span>
              </div>
              <span className="text-sm text-[#64748b]">{openChapter === cIndex ? 'Collapse' : 'Expand'}</span>
            </button>

            {openChapter === cIndex && (
              <div className="space-y-4 border-t border-[#e2e6ef] p-6">
                {chapter.topics.map((topic, tIndex) => (
                  <div key={tIndex} className="rounded-2xl bg-[#f8fafc] p-4">
                    <button
                      type="button"
                      onClick={() => setOpenTopic(openTopic === tIndex ? null : tIndex)}
                      className="flex w-full items-center justify-between text-left text-lg font-semibold text-[#0f111a]"
                    >
                      <span>{topic.name}</span>
                      {openTopic === tIndex ? <ChevronDown /> : <ChevronRight />}
                    </button>

                    {openTopic === tIndex && (
                      <div className="mt-4 space-y-4 pl-4">
                        {topic.subtopics.map((sub, sIndex) => (
                          <div key={sIndex} className="rounded-2xl bg-white p-4 shadow-sm">
                            <h4 className="font-semibold text-[#0f111a]">{sub.name}</h4>
                            <p className="mt-2 text-sm text-[#475569]">{sub.description}</p>
                            <div className="mt-4 space-y-2">
                              {sub.resources.map((res, rIndex) => (
                                <a
                                  key={rIndex}
                                  href={res.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2563eb] hover:underline"
                                >
                                  <LinkIcon size={14} />
                                  {res.title}
                                </a>
                              ))}
                            </div>
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
    </AppShell>
  );
}
