import React from "react";
import { Link } from "react-router-dom";
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Expectional = () => {
  return (
    <div className="card lg:card-side bg-base-100">
      <figure className="p-10 lg:w-2/4">
        <img className="lg:w-1/2  rounded-lg shadow-2xl" src={treatment} alt="Album" />
      </figure>
      <div className="card-body md:w-3/4 lg:w-1/4 mx-0 my-auto">
        <h2 className="card-title md:text-5xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
        <p className="md:w-3/4 text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions justify-start mt-4">
          <Link to='/appointment'>
          <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expectional;
