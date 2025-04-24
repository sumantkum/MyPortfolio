import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sumantkumar-fullstackdeveloper/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/sumantkum" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/profile.php?id=61573586307425" Icon={FaFacebook} />
      <SingleContactSocial link="https://x.com/Kuma19157Sumant" Icon={FaTwitter} />


    </div>
  );
};

export default ContactSocial;
