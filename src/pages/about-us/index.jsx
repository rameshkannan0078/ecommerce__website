import CnNavbar from "../../components/CnNavbar";
import Shopping from "../../assets/shopping.png";
import Person_1 from "../../assets/person/person_1.jpg";
import Person_2 from "../../assets/person/person_2.jpg";
import Person_3 from "../../assets/person/person_3.jpg";
import Person_4 from "../../assets/person/person_4.jpg";
import Person_5 from "../../assets/person/person_5.jpg";
import Person_6 from "../../assets/person/person_6.jpg";
import Person_7 from "../../assets/person/person_7.jpg";
import Person_8 from "../../assets/person/person_8.jpg";
import Person_9 from "../../assets/person/person_9.jpg";
import Person_10 from "../../assets/person/person_10.jpg";
import {
  Activity,
  MessageCircle,
  ShoppingCart,
  Target,
  CheckCircle,
  Heart,
} from "react-feather";

const teamAndUser = [
  { image: Person_1, name: "Ramya Krishnan", position: "Founder & CEO" },
  { image: Person_2, name: "John Doe", position: "CTO" },
  { image: Person_3, name: "Jane Smith", position: "Lead Developer" },
  { image: Person_4, name: "Alice Johnson", position: "Marketing Director" },
  { image: Person_5, name: "Bob Miller", position: "Designer" },
  { image: Person_6, name: "John Martinez", position: "Sales Manager" },
  { image: Person_7, name: "Chris Brown", position: "Finance Manager" },
  { image: Person_8, name: "Chris White", position: "HR Manager" },
  { image: Person_9, name: "Michael Lee", position: "Product Manager" },
  { image: Person_10, name: "Laura Davis", position: "Customer Support" },
];

const valuesAndWork = [
  {
    icon: <Activity />,
    text: "Innovative and Creative Solutions for Every Shopping Experience",
  },
  {
    icon: <Target />,
    text: "Customer-Centric Approach to Meet and Exceed Your Shopping Goals",
  },
  {
    icon: <MessageCircle />,
    text: "Open Communication and Support Throughout Your Shopping Journey",
  },
  {
    icon: <ShoppingCart />,
    text: "Efficient and Seamless Shopping Process for Ultimate Convenience",
  },
  {
    icon: <CheckCircle />,
    text: "Reliable Quality Assurance for All Products and Services",
  },
  {
    icon: <Heart />,
    text: "Passionately Committed to Enhancing Your Shopping Satisfaction",
  },
];

export default function Aboutus() {
  return (
    <CnNavbar>
      <div>
        <div className="flex flex-col sm:flex-row p-8 bg-gray-100 mt-4">
          <div className="w-full sm:w-1/2 text-justify pr-5  mt-16">
            <div className="font-bold text-[1.5rem] mb-4">
              Our E-commerce Journey: A Story of Innovation and Growth
            </div>
            In the early days of 2010, a group of visionary entrepreneurs came
            together with a common goal: to revolutionize the way people shop.
            Inspired by the rapid advancements in technology and the rising tide
            of online connectivity, they founded our e-commerce venture with a
            mission to make shopping a seamless and enjoyable experience for
            everyone. The initial years were marked by challenges and learning
            experiences. We started small, offering a curated selection of
            products across diverse categories. Our dedicated team worked
            tirelessly to build a user-friendly platform, ensuring that
            customers could browse, choose, and order with ease.
            <div className="font-bold text-[1.5rem] mb-4 mt-8">
              Technological Innovation
            </div>
            <div>
              As the digital landscape evolved, so did we. Embracing
              cutting-edge technologies, we implemented robust e-commerce
              solutions, secure payment gateways, and personalized user
              interfaces. Our commitment to staying ahead in the tech game
              allowed us to provide a dynamic and responsive shopping
              environment. With the trust of our early customers, we expanded
              our product range and ventured into new markets. The relentless
              pursuit of quality, affordability, and customer satisfaction
              propelled us forward. We forged partnerships with renowned brands
              and introduced exclusive collaborations, setting ourselves apart
              in the competitive e-commerce landscape.
            </div>
          </div>
          <div className="w-full sm:w-1/2 sm:mt-4 border  rounded-md border-gray-300 overflow-hidden shadow-2xl">
            <img
              src={Shopping}
              className="w-full h-full object-cover"
              alt="Shopping"
            />
          </div>
        </div>
        <div className="p-8">
  <div className="text-[2rem] font-bold text-blue-800">Our Vision</div>
  <div className="p-5 shadow-2xl bg-gray-100">
    <div className="mt-4  rounded-md flex flex-col space-y-6">
      <div>
        <div className="font-bold text-xl mb-2 flex flex-row space-x-4 items-center text-green-500">
          <div className="bg-green-500 rounded-full w-4 h-4"></div>
          <div>People - First</div>
        </div>
        <p className="text-gray-700">
          To be a leading global e-commerce platform, we envision empowering customers with a seamless and personalized shopping experience that transcends boundaries. Our commitment to putting people first goes beyond transactions; we aim to build a vibrant and connected online community where trust, satisfaction, and genuine connections thrive.
        </p>
      </div>

      <div>
        <div className="font-bold text-xl mb-2 text-purple-600  flex flex-row space-x-4  ">
        <div className="bg-purple-500 rounded-full w-4 h-4"></div>
           <div> Product - Driven</div></div>
        <p className="text-gray-700">
          Navigating the digital landscape, our vision is to set new benchmarks in innovation, customer satisfaction, and technological excellence. We aspire to redefine what it means to shop online by curating a product-driven platform. This is more than just a marketplace; it's a space where customers can discover, experience, and embrace a diverse range of innovative and quality products.
        </p>
      </div>

      <div>
        <div className="font-bold text-xl mb-2 text-orange-500  flex flex-row space-x-4">
        <div className="bg-orange-500 rounded-full w-4 h-4"></div>
      <div>    Global Connectivity</div>

        </div>
        <p className="text-gray-700">

          Our vision extends to creating a globally connected platform, breaking down geographical barriers. We envision a world where customers from every corner can seamlessly explore and access a curated selection of products, fostering a sense of unity through shared experiences and the joy of discovery.
        </p>
      </div>

      <div>
        <div className="font-bold text-xl mb-2 flex flex-row space-x-4 text-red-600">
        <div className="bg-red-500 rounded-full w-4 h-4"></div>
    <div>      Sustainability and Impact</div>
        </div>
        <p className="text-gray-700">
          As a forward-looking e-commerce platform, we envision incorporating sustainability into every aspect of our operations. Our vision is to make a positive impact on the environment and communities. From eco-friendly packaging to supporting ethical practices, we strive to be a catalyst for positive change in the world.
        </p>
      </div>
    </div>
  </div>
</div>

        <div className="p-8">
          <div className="text-[2rem]  font-bold">
            Our core values define our work
          </div>
          <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {valuesAndWork.map((value, index) => (
              <div
                key={index}
                className="border rounded-md p-4 flex flex-row space-x-6 shadow-md"
              >
                <div className="rounded-full bg-green-600 p-2 text-white">
                  {value.icon}
                </div>
                <div className="text-lg font-bold mt-1">{value.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8">
          <div className="text-[2rem] font-bold"> Meet Our Team </div>
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamAndUser.map((teamMember, index) => (
              <div key={index} className="border rounded-md p-4 shadow-md">
                <img
                  src={teamMember.image}
                  className="w-full h-72 object-fit mb-4 rounded-md"
                  alt={teamMember.name}
                />
                <div className="text-lg font-bold">{teamMember.name}</div>
                <div className="text-gray-600">{teamMember.position}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8">
        <div className="p-5 shadow-2xl">
  <div className="mt-4 flex flex-col space-y-6">
    <div className="font-bold text-2xl">Our Mission</div>

    <p className="text-gray-700">
      At BagO, we are on a mission to empower commerce, connecting lives through the joy of discovery and seamless transactions. Our commitment is to redefine convenience in online shopping, ensuring unparalleled ease and efficiency. We curate a collection of high-quality products to inspire confidence, serving as a trusted source for confident and innovative shopping. Additionally, we are dedicated to empowering sellers, fostering their growth, and building lasting partnerships. Together, we envision a vibrant and inclusive online marketplace that enriches the lives of our users and partners.
    </p>
  </div>
</div>

        </div>
      </div>
    </CnNavbar>
  );
}
