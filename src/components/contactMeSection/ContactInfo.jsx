import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="sumantpandit993127@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 79923 86142" Image={FiPhone} />
      <SingleInfo text="Chhapra Bihar, (Saran)" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
