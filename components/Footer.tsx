import Logo from "./Logo";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bgd   shadow-lg">
      <section className="h-full wrapper py-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex justify-center items-end text-gray-200 flex-col gap-1">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <span className="text-base opacity-80">tbawareness@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-white flex-col md:flex-row">
          <span className="opacity-65 text-base text-center">
            Copyright &copy; {date.getFullYear()}. All Rights Reserved.
          </span>
          <div className="space-x-3 opacity-80">
            {/* <Button variant={"link"} className="p-0 text-white text-base">
              Privacy Policy
            </Button>
            <Button variant={"link"} className="p-0 text-white text-base">
              Terms of Services
            </Button> */}
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
