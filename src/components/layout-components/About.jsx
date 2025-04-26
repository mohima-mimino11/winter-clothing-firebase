

const About = () => {
  return (
    <div className="my-8">
      <div className="flex-col gap-8">
        <div className="my-5">
          <h3 className="text-5xl font-bold text-center text-slate-500">Our Mission</h3>
          <p className="text-lg font-medium text-center text-sky-300">At Winter Campaign, our mission is simple: to bring warmth, comfort, and hope to those who need it most during the coldest months of the year. Every winter, countless individuals—especially children, the elderly, and the homeless—face freezing temperatures without proper clothing, shelter, or nourishment. We are here to change that.We organize and support a range of winter donation drives across different regions, providing essential items like coats, blankets, warm meals, and heating equipment to vulnerable communities. Through collaboration with local volunteers, donors, and partners, we ensure that no one is left in the cold.</p>
        </div>
        <div className="my-5">
          <h3 className="text-5xl font-bold text-center text-slate-500">How You Can Help</h3>
          <p className="text-lg font-medium text-center text-sky-300">You can make a real difference this winter by getting involved in one of the following ways:</p>
          <ul className="list-disc list-inside text-lg font-medium text-center text-sky-300">
            <li> <span className="text-slate-500 font-semibold">Donate Items:</span> Contribute gently-used or new winter clothing, blankets, or supplies to one of our drop-off points.</li>
            <li> <span className="text-slate-500 font-semibold">Make a Monetary Donation:</span> Your financial support helps us purchase and distribute essential winter kits directly to those in need.</li>
            <li> <span className="text-slate-500 font-semibold">Start a Campaign:</span> Want to organize a drive in your community? We’ll provide the resources and support to help you get started.</li>
            <li><span className="text-slate-500 font-semibold">Volunteer:</span> Join our team of warm-hearted volunteers to pack kits, deliver goods, or assist in community outreach.</li>
            <li> <span className="text-slate-500 font-semibold">Spread the Word:</span> Share our mission with your friends, family, or on social media. Awareness saves lives.</li>
          </ul>
          <p className="text-lg font-medium text-center text-sky-300">Together, we can turn freezing nights into warm tomorrows.</p>
        </div>
      </div>
    </div>
  );
};

export default About;