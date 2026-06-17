const projects = [
  { title: "Customer Churn Prediction & Retention Intelligence", tag: "ML · LLM · Deployed",
    blurb: "End-to-end XGBoost platform with 85% accuracy and a Gemini 2.5 Flash assistant generating personalised retention strategies. 3-tier risk dashboard in Dash, deployed on Railway via CI/CD.",
    stack: ["XGBoost", "Gemini", "Dash", "Railway"] },
  { title: "DriveMonitor — Real-time Driver Safety", tag: "Computer Vision",
    blurb: "Dual-pipeline inference fusing YOLOv8 + MediaPipe FaceMesh to monitor seatbelt, drowsiness, and head pose in real time — instant alerts on unsafe conditions.",
    stack: ["YOLOv8", "MediaPipe", "OpenCV"] },
  { title: "Taxi Trip Duration Predictor", tag: "Full-stack ML",
    blurb: "FastAPI + React/TypeScript + Apache Spark pipeline. CSV upload → preprocessing → training → live metrics. Deployed on Render & Vercel.",
    stack: ["FastAPI", "React", "Spark"] },
  { title: "Facial Expression Recognition", tag: "Deep Learning",
    blurb: "Swin Transformer in PyTorch for 3-class emotion classification at 88% accuracy. Improved baseline +6% by auditing class imbalance and refining preprocessing.",
    stack: ["PyTorch", "Swin", "Vision"] },
  { title: "Head Pose Stability Fix · NTI", tag: "CV · Production",
    blurb: "Redesigned landmark selection and recalibrated angle calculations to resolve a critical instability bug — boosting prediction stability by ~30%.",
    stack: ["MediaPipe", "OpenCV"] },
  { title: "Image Processing Filters Desktop App", tag: "Desktop · Python",
    blurb: "Standalone OpenCV + Tkinter application packaging 5+ noise reduction algorithms and filters behind an accessible GUI.",
    stack: ["OpenCV", "Tkinter"] },
];

const skills = {
  "AI / ML": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Hugging Face", "MLflow", "Apache Spark"],
  "Computer Vision": ["OpenCV", "MediaPipe", "YOLOv8", "Swin Transformer"],
  "LLM / GenAI": ["Google Gemini API", "Prompt Engineering", "Conversational AI"],
  "Full-Stack": ["FastAPI", "React", "TypeScript", "Streamlit", "Dash", "Vite"],
  "DevOps / Cloud": ["Docker", "GitHub CI/CD", "Railway", "Render", "Vercel"],
};

// Projects
document.getElementById("projects").innerHTML = projects.map((p, i) => `
  <article class="project">
    <div class="project-head">
      <span class="chip">${p.tag}</span>
      <span class="project-num">${String(i + 1).padStart(2, "0")}</span>
    </div>
    <h3 class="project-title">${p.title}</h3>
    <p class="project-blurb">${p.blurb}</p>
    <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
  </article>
`).join("");

// Skills
document.getElementById("skills-list").innerHTML = Object.entries(skills).map(([cat, items]) => `
  <div class="skill-row">
    <div class="skill-cat">${cat}</div>
    <div class="skill-tags">${items.map(s => `<span>${s}</span>`).join("")}</div>
  </div>
`).join("");

// Marquee (duplicated for seamless loop)
const words = ["Computer Vision", "·", "Machine Learning", "·", "LLM Applications", "·", "MLOps", "·", "Full-stack AI", "·"];
const html = [...words, ...words, ...words, ...words].map(w =>
  w === "·" ? `<span class="sep">·</span>` : `<span>${w}</span>`
).join("");
document.getElementById("marquee").innerHTML = html;

// Year
document.getElementById("year-line").textContent = `© ${new Date().getFullYear()} Maryhan Sabry · Alexandria, Egypt`;
