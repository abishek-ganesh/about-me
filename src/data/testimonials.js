// Testimonials data structure
//
// Student quotes come from the named end-of-course survey. Every student picked
// a sharing permission on that survey and this file honors it exactly:
// - "share with my name" / "share with my first name" -> first name only, plus
//   a last initial only where two students share a first name
// - "share anonymously"                               -> name is 'Anonymous'
// - "keep this private"                               -> not included at all
// Responses from the separate anonymous instructor survey are never quoted
// here; that survey carried no sharing permission and is used only for
// aggregate numbers. Students from every cohort are presented together, and
// cohort identity and dates are deliberately not recorded or displayed.

const testimonials = [
  {
    id: 1,
    name: 'Francisco',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: "I would tell them to stop overthinking and just sign up. If I could successfully transition from a warehouse job to understanding AI, they can do it too. They should expect to be challenged, but also expect to have the best instructor. Abishek makes the classes highly dynamic, breaks down complex math so it actually makes sense, and constantly shares AI news to keep you inspired.",
    projectType: 'teaching',
    featured: true,
  },
  {
    id: 2,
    name: "Denz'l",
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: "Abishek is by far the best instructor I've had. His ability to simplify such complex/technical topics shows that he not only understands but applies and works with these complex models on a daily basis. Abishek's passion, humility, and fun personality makes the class feel welcoming and open to all.",
    projectType: 'teaching',
    featured: true,
  },
  {
    id: 3,
    name: 'Wendy',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Abishek cares deeply about helping students become well-rounded, holistic AI engineers - not just people who can execute a few tasks, but people who understand how to think, solve problems, and connect concepts together. At times he’ll challenge you to think independently rather than simply giving answers, which can feel demanding, but that approach ultimately builds confidence and stronger problem-solving skills.',
    projectType: 'teaching',
    featured: true,
  },
  {
    id: 4,
    name: 'Sean M.',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: "He's among the best teachers I've ever had. He not only respects his cohort but is also excited to teach it and share new info about it. He is a teacher for someone who cares about the field they are going into.",
    projectType: 'teaching',
  },
  {
    id: 5,
    name: 'Wesley',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Abishek really broke it down into small bite sized pieces, from the python, all the way up through all of the models, step by step, piece by piece until I had a full understanding of why models are the way they are.',
    projectType: 'teaching',
  },
  {
    id: 6,
    name: 'Joseph',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Abishek does a good job of pushing students to think through problems instead of just following steps, which can be difficult at first but helps build real understanding and confidence. By the end, they should expect to have stronger technical skills, hands-on project experience, and a much better understanding of how AI and machine learning apply to real-world problems.',
    projectType: 'teaching',
  },
  {
    id: 7,
    name: 'Erick',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'When I started this bootcamp, I was honestly afraid of AI. I thought it was something too difficult or too advanced for me to actually build with. Now, I see it differently. Abishek helped make that change possible by explaining things in a way that felt practical and approachable.',
    projectType: 'teaching',
  },
  {
    id: 8,
    name: 'Clifton',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'He is both someone you learn great from and in a welcoming environment that allows you to be yourself. Abishek would never hesitate to go back over something or dive deeper into something he just taught.',
    projectType: 'teaching',
  },
  {
    id: 9,
    name: 'Jesse',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: "If you want to be a big dog then this boot camp will get you there. You can expect to cover all areas of AI/ML and you'll have to dig deep to make it to the end of the six months. If you're up to the challenge and ready to change your life, sign up right now.",
    projectType: 'teaching',
  },
  {
    id: 10,
    name: 'Doug',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Before this bootcamp, I was a person who wanted to know more about AI and with Abishek as an instructor I feel I got way more than I could even imagine. They should expect to learn every aspect of machine learning and artificial intelligence and to be prepared for an intense hard, rewarding but fun journey.',
    projectType: 'teaching',
  },
  {
    id: 11,
    name: 'Kyle',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Abishek was meeting us where we were each individually at, and taking the knowledge from any background and applying it in a way that makes sense and we can connect the information across all different kinds of disciplines.',
    projectType: 'teaching',
  },
  {
    id: 12,
    name: 'Samuel',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'The vibes! And how Abishek navigated the classroom. It was a very engaging and dynamic environment, with lots of fun memories. Lots of fun, easy to approach for help and very relevant AI topic discussions.',
    projectType: 'teaching',
  },
  {
    id: 13,
    name: 'Anthony',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: "I dabbled using LLMs and AI as a career sounded nice but I wasn't confident in my skills. I think now I fully understand that if I break down the skills I want to learn that I can apply what I have learned in this bootcamp to that. I have a new passion and love for blending my expertise with using AI as a catalyst for staying in my zone of greatness.",
    projectType: 'teaching',
  },
  {
    id: 14,
    name: 'Caitlin',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: "Abishek didn't just teach us to code; he taught us to think like AI developers. Their real-world experience brought every lesson to life, and their belief in our potential pushed me to tackle projects I initially thought were beyond my abilities. They transformed me from someone who knew basic programming to someone who can confidently build AI solutions.",
    projectType: 'teaching',
    featured: true,
  },
  {
    id: 15,
    name: 'Natalie',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Abishek is so passionate about AI that he makes even the boring lectures feel fun. He’s a true champion of positivity, instilling confidence in every student that they have what it takes to succeed.',
    projectType: 'teaching',
  },
  {
    id: 16,
    name: 'Chris',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'A teacher affects eternity; he can never tell where his influence stops.',
    projectType: 'teaching',
  },
  {
    id: 17,
    name: 'Brett',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'His passion for AI and dedication to the craft of teaching was the fuel that kept me going.',
    projectType: 'teaching',
  },
  {
    id: 18,
    name: 'David B.',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Has the amazing ability to explain highly complex ideas in easy to understand segments that come together.',
    projectType: 'teaching',
  },
  {
    id: 19,
    name: 'Joe',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Very personable and affable. Easy to get along with and always wanting the class to share his curiosity about the subject matter. I feel that Abishek is a person who would lifelong be passionate about ML and AI.',
    projectType: 'teaching',
  },
  {
    id: 20,
    name: 'Sean S.',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'Abishek is extremely knowledgeable. His honest, well rounded approach encourages all students they will understand the practices, but it takes time and focus.',
    projectType: 'teaching',
  },
  {
    id: 21,
    name: 'Anonymous',
    role: 'Graduate',
    company: 'AI Bootcamp',
    text: 'The instructor’s teaching style is easy to understand and engaging, never dull. By incorporating real-world cases, we gain more hands-on experience. The instructor is also very attentive, adapting and improving based on students’ actual needs.',
    projectType: 'teaching',
  },
];

// Social proof statistics
export const socialProof = {
  clientsServed: '15+',
  projectsCompleted: '25+',
  studentsTeaching: 'Dozens',
  yearsExperience: '8+',
};

// Company logos (when available)
export const clientLogos = [];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

export default testimonials;
