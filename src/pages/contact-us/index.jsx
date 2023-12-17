import CnNavbar from "../../components/CnNavbar";
export default function Contactus() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <CnNavbar>
      <div className="flex items-center mt-8 p-4 justify-center h-full">
        <div className="w-full sm:w-1/2 h-full p-4 bg-gray-100 rounded-md">
          <form onSubmit={handleSubmit} className="p-4">
            <div className="text-align font-bold">Contact Us</div>
            <div className="mt-2 h-1 w-full bg-black"></div>
            <div className="mt-4 space-y-3 flex flex-col">
              <label>{`Name`}</label>
              <input placeholder="Enter the name" type="text" className="h-8 border-2 p-1" />
              <label>{`Email Address`}</label>
              <input placeholder="Enter the email address" type="email" className="h-8 border-2 p-1" />
              <label>{`Message`}</label>
              <textarea placeholder="Enter the message" type="text" className="h-32 border-2 p-1" />
            </div>
            <button type="submit" className="h-10 rounded-md font-bold text-white mt-6 text-center w-full bg-black">
              Submit
            </button>
          </form>
        </div>
      </div>
    </CnNavbar>
  );
}
