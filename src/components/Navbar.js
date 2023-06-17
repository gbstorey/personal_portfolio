export default function Navbar() {
    return (
        <header className=" top-0 z-10 max-w-screen-xl px-10 mx-auto z-10 text-gray-900 md:text-white
        md:border-0 mb-5 md:bg-none border-b border-gray-900 md:border-0">
          <div className="flex flex-wrap py-5 flex-col md:flex-row mx-0 items-center">
            <a href="#about" className="title-font font-medium mb-4 md:mb-0 hover:text-devil-gold">
              <p className="text-3xl md:text-xl w-full text-center md:text-right">
                Garrett Storey
              </p>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center
            justify-center">
              <a href="#projects" className="mr-0 md:mr-5 hover:text-devil-gold w-full text-center py-2 md:py-0
              md:w-auto md:text-right text-xl">
                Past Work
              </a>
              <a href="#skills" className="mr-0 md:mr-5 hover:text-devil-gold w-full text-center py-2 md:py-0 md:w-auto
              md:text-right text-xl">
                Skills
              </a>
              <a href="#testimonials" className="mr-0 md:mr-5 hover:text-devil-gold w-full text-center py-2 md:py-0
              md:w-auto md:text-right text-xl">
                Recommendations
              </a>
            </nav>
            <a
              href="#contact"
              className="base:justify-items-center md:inline-flex items-center text-center border-white
              pb-4 md:pb-2 hover:text-devil-gold hover:border-devil-gold md:border py-1 px-3 focus:outline-nonerounded md:mt-0 text-xl">
              Contact Me
            </a>
          </div>
        </header>
      );
}