const Contact = () => {
  return (
    <div>
      <div className="relative mx-auto bg-[url('https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-fixed w-full h-screen object-cover bg-no-repeat">
        {/* <Image
          width={1000}
          height={100}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          className="mx-auto "
          src={contact}
          alt="House Image"
        /> */}
        <div className="absolute top-0 w-full h-full bg-black/50  flex items-center ">
          <div className=" banner-overlay  w-full m-auto p-4 text-center">
            <h1 className=" text-3xl  md:font-bold text-white mb-10">
              Contact us today if you’d like to know more about how we help buy,
              sell or rent your home
            </h1>
            <div className="bg-white p-4 rounded px-12">
              <h3 className="text-2xl font-bold">
                Schedule a meeting with our team
              </h3>
              <p className="w-7/12 m-auto my-4 text-lg">
                Our experts and developers would love to contribute their
                expertise and insights
              </p>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-slate-100 p-3 rounded border border-1 border-slate-400"
                />
                <input
                  type="text"
                  className="bg-slate-100 p-3 rounded border border-1 border-slate-400"
                  placeholder="Mobile"
                />
                <input
                  type="text"
                  className="bg-slate-100 p-3 rounded border border-1 border-slate-400"
                  placeholder="Email"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="bg-slate-100 p-3 rounded border border-1 border-slate-400"
                />
              </div>
              <input
                type="text"
                placeholder="Massage"
                className="bg-slate-100 p-3 rounded border border-1 border-slate-400 w-full h-24 my-3"
              />
              <button
                type="submit"
                className="bg-blue-600 text-center text-white font-bold py-3 rounded border border-1 border-slate-400 w-full"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
