import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import { navigate } from "gatsby";
import SEO from "../components/seo";
import CursorContext from "../context/CursorContext";
import ScrollDown from "../components/scrollDown";
import {
  sentence,
  letter,
  sentenceArt,
  letterArt,
} from "../components/heroSection";

// import { useClickOutside } from "../hooks/useClickOutside";
// import IconsLibrary from "../components/iconsLibrary";

const line1 = "Let's start";
const line2 = "your project";
/*
const SelectInput = ({
  options,
  onSelect,
  index,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const ref = useRef();
  const [selected, setSelected] = useState("Choose art...");
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClicked = (inputId, value) => {
    setSelected(value);
    onSelect(inputId, value);
    setIsOpen(false);
  };

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <DropDownContainer ref={ref}>
      <DropDownHeader
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {selected}
        <IconsLibrary type="arrow-down" />
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {options.map((option, idx) => (
            <ListItem
              onClick={() => onOptionClicked(options.value, option.label)}
              key={idx}
            >
              {option.label}
              {index === 0 && <IconsLibrary type="arrow-down" />}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
*/
const ContactPage = () => {
  const { setCursorType } = useContext(CursorContext);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    details: "",
  });

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    detailsError: "",
  });

  const handleOnChange = (event) => {
    event.persist();

    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkNameInput = (event) => {
    event.persist();

    if (inputs.name.length === 0) {
      setErrors((prev) => ({
        ...prev,
        nameError: "Name is required ",
      }));
    } else if (inputs.name.length < 3) {
      setErrors((prev) => ({
        ...prev,
        nameError: "Please provide a valid name.",
      }));
    } else {
      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          nameError: "",
        }));
      }, 500);
    }
  };

  const checkEmailInput = (event) => {
    event.persist();
    if (inputs.email.length === 0) {
      setErrors((prev) => ({
        ...prev,
        emailError: "E-mail is required ",
      }));
    } else if (inputs.email.length < 2 || re.test(inputs.email) === false) {
      setErrors((prev) => ({
        ...prev,
        emailError: "Please provide a valid e-mail address.",
      }));
    } else {
      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          emailError: "",
        }));
      }, 500);
    }
  };

  const checkDetailsInput = (event) => {
    event.persist();
    if (inputs.details.length === 0) {
      setErrors((prev) => ({
        ...prev,
        detailsError: "Please provide more information about your project.",
      }));
    } else {
      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          detailsError: "",
        }));
      }, 500);
    }
  };
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputs({
        name: "",
        email: "",
        details: "",
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: `https://formspree.io/f/${process.env.GATSBY_FORMSPREE_CONTACT_FORM_ID}`,
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!");
        navigate("/thank-you");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  const handleMouseEnter = () => {
    setCursorType({
      type: "hover-link",
      imageName: null,
    });
  };

  const handleMouseEnterInput = () => {
    setCursorType({
      type: "hover-input",
      imageName: null,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  const handleMouseDefault = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  useEffect(() => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  }, [setCursorType]);

  return (
    <div
      className="pb-16 w-[full] max-w-[1080px] mx-auto mb-4 md:mb-16 lg:mb-30"
      onMouseEnter={handleMouseDefault}
    >
      <SEO
        title="Freelance Digital Artist | Portfolio of Vitkovska Kateryna"
        titleTemplate="Contact Page | Vitkovska Art"
        url="https://www.vitkovskaya.art/contact"
      />
      <div className="border-b-[1px] border-slate-100 w-full pb-8 md:pb-16">
        <h1 className="text-5xl md:text-7xl text-slate-100 leading-extratight font-normal tracking-wide font-sans font-medium mb-2 lg:mb-[50px] mt-16 md:mt-24 lg:mt-8">
          <motion.div variants={sentence} initial="hidden" animate="visible">
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={`${char}${index}`} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>{" "}
          <motion.div
            className="pl-12 md:pl-20 text-[#e78831] font-medium"
            variants={sentenceArt}
            initial="hidden"
            animate="visible"
          >
            {line2.split("").map((char, index) => {
              return (
                <motion.span key={`${char}${index}`} variants={letterArt}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </h1>
        <div className="mt-8 md:mt-16 ">
          <ScrollDown />
        </div>
      </div>
      <div className="py-6 md:py-12 w-full flex justify-end">
        <form
          className="w-full max-w-[600px] flex flex-col"
          onSubmit={handleOnSubmit}
          method="post"
        >
          <div className="my-4">
            <h3 className="text-lg md:text-xl text-slate-100 mb-4 font-display">
              Your name*
            </h3>
            <StyledInput
              type="text"
              name=""
              id="name"
              placeholder="Your name..."
              required
              onMouseEnter={handleMouseEnterInput}
              onMouseLeave={handleMouseLeave}
              onChange={handleOnChange}
              onBlur={checkNameInput}
            />
            <FormTextError error={errors.nameError}>
              <span>{errors.nameError}</span>
            </FormTextError>
          </div>
          <div className="my-4">
            <h3 className="text-lg md:text-xl text-slate-100 mb-4 font-display">
              Your email*
            </h3>
            <StyledInput
              type="email"
              id="email"
              name=""
              placeholder="Your email..."
              required
              onMouseEnter={handleMouseEnterInput}
              onMouseLeave={handleMouseLeave}
              onChange={handleOnChange}
              onBlur={checkEmailInput}
            />
            <FormTextError error={errors.emailError}>
              <span>{errors.emailError}</span>
            </FormTextError>
          </div>
          <div className="my-4">
            <h3 className="text-lg md:text-xl text-slate-100 mb-4 font-display">
              Your message*
            </h3>
            <StyledTextarea
              type="message"
              id="details"
              name=""
              placeholder="Your message..."
              required
              onMouseEnter={handleMouseEnterInput}
              onMouseLeave={handleMouseLeave}
              onChange={handleOnChange}
              onBlur={checkDetailsInput}
            />
            <FormTextError error={errors.detailsError}>
              <span>{errors.detailsError}</span>
            </FormTextError>
          </div>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={
              !!(errors.nameError || errors.emailError || errors.detailsError)
            }
            className={` ${
              errors.nameError || errors.emailError || errors.detailsError
                ? "opacity-30"
                : "opacity-100"
            } block rounded-md text-[#e78831]  block italic font-serif text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl hover:text-slate-100 focus:text-slate-100 transition ease-in-out duration-300 hover:cursor-none text-center`}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

/*

const DropDownContainer = styled.div`
  text-align: left;
  width: 100%;
  max-width: 600px;
  position: relative;

  svg {
    width: 18px;
    height: 9px;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translate(0, -50%);
    margin-top: 2px;
  }
`;

const DropDownHeader = styled.div`
  padding: 17px 19px 12px 0;
  font-size: 42px;
  line-height: 34px;
  color: #cecece;
  margin-bottom: 30px;
  position: relative;
  font-family: Saol Display;
  height: 100px;
  border-bottom: 1px solid rgb(241 245 249);
  display: flex;
  align-items: center;

  @media (max-width: 560px) {
    font-size: 32px;
    line-height: 1.1;
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  top: 120px;
  z-index: 1;
  width: 100%;
  padding: 0 0 8px;
  margin: 0;
  box-sizing: border-box;
  color: rgb(241 245 249);
  font-size: 20px;
  font-family: Saol Display;
  background-color: rgb(19, 20, 26);
  border: 1px solid rgb(241 245 249);

  @media (max-width: 560px) {
    top: 80px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding: 8px 19px 0;
  font-size: 32px;
  cursor: pointer;
  margin: 0;
  position: relative;
  font-family: Saol Display;
  cursor: none;
  transition: all 0.4s ease-in-out;

  @media (max-width: 560px) {
    font-size: 24px;
  }

  svg {
    transform: rotate(-180deg);
    margin-bottom: 2px;
  }
  :hover {
    color: #e78831;
  }
`;

*/

const StyledInput = styled.input`
  height: 100px;
  border-top: 1px rgb(241 245 249);
  border-right: 1px rgb(241 245 249);
  border-left: 1px rgb(241 245 249);
  border-radius: 0px;
  background-color: transparent;
  color: #fff;
  font-size: 42px;
  line-height: 34px;
  width: 100%;
  border-bottom: 1px solid rgb(241 245 249);
  transition: border 0.4s ease-in-out;
  cursor: none;

  @media (max-width: 560px) {
    height: 80px;
    font-size: 32px;
    line-height: 1.1;
  }

  :focus {
    outline: none;
    border-bottom: 1px solid #e78831;
  }
  :hover {
    cursor: none;
  }
`;

const StyledTextarea = styled.textarea`
  height: 200px;
  border-top: 1px rgb(241 245 249);
  border-right: 1px rgb(241 245 249);
  border-left: 1px rgb(241 245 249);
  border-radius: 0px;
  background-color: transparent;
  color: #fff;
  font-size: 42px;
  line-height: 34px;
  width: 100%;
  border-bottom: 1px solid rgb(241 245 249);
  transition: border 0.4s ease-in-out;
  cursor: none;
  padding-top: 32px;

  :focus {
    outline: none;
    border-bottom: 1px solid #e78831;
  }
  :hover {
    cursor: none;
  }

  @media (max-width: 560px) {
    height: 140px;
    font-size: 32px;
    padding-top: 16px;
    line-height: 1.1;
  }
`;

const FormTextError = styled.div`
  height: 42px;
  position: relative;
  overflow: hidden;
  margin-top: 12px;
  font-family: Helvetica Neue;
  span {
    color: #fa4e4e;
    bottom: ${({ error }) => {
      if (error === "") return "26px";
      if (error !== "") return "0";
    }};
    opacity: ${({ error }) => {
      if (error === "") return "0";
      if (error !== "") return "1";
    }};
    display: block;
    position: absolute;
    transition: all 1s ease-in-out;
    font-size: 22px;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }
`;

export default ContactPage;
