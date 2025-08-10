import { FaTruck, FaCreditCard, FaUndoAlt } from "react-icons/fa";
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  text: string;
}

const servicesData: Service[] = [
  {
    icon: <FaTruck />,
    title: "Delivery",
    text: "Your order will be delivered within 7-12 business days following the order confirmation. Additional business days may be required for delivery during",
  },
  {
    icon: <FaCreditCard />,
    title: "Payments",
    text: "Shop now, pay later. You'll only pay for the items you keep. Your payment will automatically be deducted from your card after 30 days, no additional charge",
  },
  {
    icon: <FaUndoAlt />,
    title: "Returns",
    text: "You are always welcome to return or exchange for free in any H&M store in the US, excluding Puerto Rico. You have 30 days to decide if an item is right for you",
  },
];

export default servicesData;
