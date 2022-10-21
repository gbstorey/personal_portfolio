import React from "react";
import { useReducer, useEffect, useRef} from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'NAME_INPUT':
        return {
        name: action.val, email: state.email, message: state.message, 
        nameIsValid: 
          nameValidation(action.val),
        emailIsValid:
          state.emailIsValid,
        messageIsValid:
          state.messageIsValid
      }
    case 'EMAIL_INPUT':
        return {
        name: state.name, email: action.val, message: state.message, 
        nameIsValid: 
          state.nameIsValid,
        emailIsValid:
          emailValidation(action.val),
        messageIsValid:
          state.messageIsValid
      }
    case 'MESSAGE_INPUT':
        return {
        name: state.name, email: state.email, message: action.val, 
        nameIsValid: 
          state.nameIsValid,
        emailIsValid:
          state.emailIsValid,
        messageIsValid:
          messageValidation(action.val)
      }
      case 'INPUT_BLUR':
        return {
        name: state.name, email: state.email, message: state.message, 
        nameIsValid: 
          state.nameIsValid,
        emailIsValid:
          state.emailIsValid,
        messageIsValid:
          state.messageIsValid
      }
    default:
      return { name: ' ', email: ' ', message: ' ', 
      nameIsValid: null, emailIsValid: null, messageIsValid: null};
}};

function emailValidation(email) {
  if (email.includes("@") && email.trim().length > 5) {return true} 
  else {return false};
};

function nameValidation(name) {
  if (name.trim().length > 2) {return true} 
  else {return false};
};

function messageValidation(message) {
  if (message.trim().length > 10) {return true} 
  else {return false};
};

function validateAll(email, name, message) {
  if (
  emailValidation(email) === true && 
  nameValidation(name) === true && 
  messageValidation(message) === true
  ) {return true}
  else {return false}
};

export default function Contact() {

    const [formState, dispatchForm] = useReducer(
      formReducer,
      {name: '', email: '', message: '', 
      nameIsValid: null, emailIsValid: null, messageIsValid: null}
    );

    const contactTriggered = useRef(true);

    useEffect(() => {
        if (contactTriggered.current) {
          return;
        } else {
          const identifier = setTimeout(() => {
            dispatchForm({type: 'INPUT_BLUR'})
          }, 1000);
          return () => {
            clearTimeout(identifier);
          };
        }
    }, [formState.name, formState.message, formState.email])

    function handleSubmit(e) {
      console.log(formState)
        e.preventDefault();
        if (validateAll(formState.email, formState.name, formState.message) !== true) { 
          alert("contact form not valid")
        } else {
          const myForm = e.target
          const formData = new FormData(myForm)
          fetch("/", {
              method: "POST",
              headers: {"Content-Type": "application/x-www-form-urlencoded"},
              body: new URLSearchParams(formData).toString(),
          })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
        }
        
    };


    return (
        <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0 invisible md:visible"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/search?q=Arizona+State+University,+Tempe,+AZ,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md w-fit">
                <div className="md:w-1/2 md:pl-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    WORK ADDRESS
                  </h2>
                  <p className="mt-1">
                  808 S Rural Rd. <br />
                    Tempe, AZ 85281
                  </p>
                </div>
                <div className="lg:w-1/2 md:pl-6 lg:pl-0 pr-16 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed" href="/">
                    garrettbstorey@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">505-288-4566</p>
                </div>
              </div>
            </div>
            <form
              data-netlify="true"
              name="contact"
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <input type="hidden" name="form-name" value="contact" />
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Contact Me
              </h2>
              <p className="leading-relaxed mb-5">
                Please reach out using this form. I would love to hear from you!
              </p>
              <div className={`${formState.nameIsValid === true || formState.nameIsValid === null? "relative mb-4" : "relative mb-0"}`}>
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name.value}
                  className={`w-full bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out 
                  ${formState.nameIsValid === true || formState.nameIsValid === null? "border-gray-700" : "border-rose-600"}`}
                  onFocus={(e) => {contactTriggered.current = false}}
                  onBlur={(e) => dispatchForm({type: 'INPUT_BLUR'})}
                  onChange={(e) => dispatchForm({type: 'NAME_INPUT', val: e.target.value})}
                />
                {formState.nameIsValid === true || formState.nameIsValid === null ? null:
                <p className="leading-relaxed text-rose-600 ">Your name doesn't seem long enough!</p>
                }
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email.value}
                  className={`w-full bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out 
                  ${formState.emailIsValid === true || formState.emailIsValid === null? "border-gray-700" : "border-rose-600"}`}
                  onFocus={(e) => {contactTriggered.current = false}}
                  onBlur={(e) => dispatchForm({type: 'INPUT_BLUR'})}
                  onChange={(e) => dispatchForm({type: 'EMAIL_INPUT', val: e.target.value})}
                />
                {formState.emailIsValid === true || formState.emailIsValid === null ? null:
                <p className="leading-relaxed text-rose-600 ">Minimum 5 characters, requires "@" symbol.</p>
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message.value}
                  className={`w-full bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out
                  ${formState.messageIsValid === true || formState.messageIsValid === null? "border-gray-700" : "border-rose-600"}`}
                  onFocus={(e) => {contactTriggered.current = false}}
                  onBlur={(e) => dispatchForm({type: 'INPUT_BLUR'})}
                  onChange={(e) => dispatchForm({type: 'MESSAGE_INPUT', val: e.target.value})}
                />
                {formState.messageIsValid === true || formState.messageIsValid === null ? null:
                <p className="leading-relaxed text-rose-600 ">Minimum 10 characters.</p>
                }
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
}