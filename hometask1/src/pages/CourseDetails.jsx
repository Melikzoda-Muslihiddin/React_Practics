import { useParams, Link } from "react-router-dom";
import courses from "../data/courses.json";
import CourseHero from "../components/CourseHero";
import CourseStats from "../components/CourseStats";
import WhySection from "../components/WhySection";
import SalarySection from "../components/SalarySection";
import LaptopSection from "../components/LaptopSection";
import CourseProgram from "../components/CourseProgram";
import CertificateSection from "../components/CertificateSection";

const CourseDetails = () => {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <section className="min-h-screen bg-[#07122e] px-6 py-16 text-white">
        <div className="mx-auto max-w-310">
          <h1 className="text-4xl font-bold">Course not found</h1>
          <p className="mt-4 text-white/70">
            We could not find the course you are looking for.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-[#07122e] transition hover:opacity-90"
          >
            Back to courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#07122e] text-white">
      <CourseHero course={course} />
      <CourseStats course={course} />
      <WhySection course={course} />
      <SalarySection course={course} />
      <LaptopSection course={course} />
      <CourseProgram course={course} />
      <CertificateSection course={course} />
    </div>
  );
};

export default CourseDetails;
