import { jsPDF } from "jspdf";

const HowItWorks = () => {
  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Winter Donation Campaign", 10, 20);
    
    doc.setFontSize(12);
    doc.text(`
    How to Donate:
    1. Choose Your Donation Type
    - Clothing: New or gently-used coats, scarves, hats, gloves, thermal wear, and snow boots.
    - Blankets & Sleeping Bags: Clean, warm items.
    - Essentials: Hygiene kits, hot water bottles, socks, heaters.
    - Monetary Donations: Online donations accepted.

    2. Pack & Label Your Donation
    - Label your donations clearly by category.

    3. Drop Off at a Collection Point
    - North Division: Community Hall, Northern High School Gymnasium
    - South Division: Hope Church, South Market Shelter
    - East Division: Eastside Library, Greenhill Fire Station
    - West Division: West Point Center, Horizon Mall
    - Central Division: Unity Center, Central Plaza

    Supported Divisions:
    - North, South, East, West, Central
    `, 10, 40);

    doc.save("winter-donation-instructions.pdf");
  };

  return (
    <div>
      <h3 className="text-5xl font-bold text-center text-slate-500">How It Works</h3>
      <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold text-sky-300 mb-4">Get Donation Instructions</h1>
      <button
        onClick={generatePdf}
        className="btn btn-accent btn-outline text-black hover:text-white"
      >
        Download PDF
      </button>
    </div>
    </div>
  );
};

export default HowItWorks;